"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useStore from "@/store/useStore";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import { ReloadIcon } from "@radix-ui/react-icons";
import { FaRegBookmark } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";

export const runtime = "edge";

const page = () => {
  const resumeRef = useStore((state) => state.resumeRef);
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);
  const jobExperience = useStore((state) => state.jobExperience);
  useEffect(() => {
    if (Object.keys(jobExperience).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);
  const inititalTap = useStore((state) => state.initialTap);
  const setInitialTap = useStore((state) => state.setInitialTap);
  const handleDownloadPdf = async (e) => {
    setLoading(true);
    e.preventDefault();
    setInitialTap(true);
    await new Promise((resolve) => setTimeout(resolve, 200));
    const input = resumeRef.current;
    if (!input) {
      console.error("resumeRef is not set or is invalid.");
      return;
    }
    await html2canvas(input, { scale: 6 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 page width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, null, "FAST");

      pdf.save("resume.pdf");
    });
    setInitialTap(false);
    setLoading(false);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Your Resume is Ready</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-center">
            <Button
              className="bg-sky-500 text-white hover:text-black rounded-2xl hover:shadow-lg"
              variant="secondary"
              onClick={handleDownloadPdf}
              disabled={loading}
            >
              {loading ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                ""
              )}
              Download
            </Button>
            <Dialog className="">
              <DialogTrigger asChild>
                <Button
                  className="bg-sky-500 text-white hover:text-black rounded-2xl hover:shadow-lg space-x-2"
                  variant="secondary"
                >
                  <FaRegBookmark />
                  <span>Save</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Name Your Fame</DialogTitle>
                  <DialogDescription>
                    Because even your resume deserves a title as legendary as
                    you are! 🏆✨
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 ">
                  <div className="grid grid-cols-4 items-center justify-start gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <input
                      type="text"
                      className="outline-none p-2 border w-52 rounded"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <div className="flex justify-center w-full">
                    {/* <Button
                      className="hover:bg-slate-100 shadow-lg rounded text-lg "
                      type="confirm"
                    >
                      Save
                    </Button> */}
                    <DialogClose asChild>
                      <Button
                        type="button"
                        className="hover:bg-slate-100 shadow-lg rounded "
                      >
                        Save
                      </Button>
                    </DialogClose>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
