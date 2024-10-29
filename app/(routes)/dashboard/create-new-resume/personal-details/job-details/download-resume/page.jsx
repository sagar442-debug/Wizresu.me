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
          <div className="text-center">
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
            {/* <Button
              className="bg-sky-500 text-white hover:text-black rounded-2xl hover:shadow-lg"
              variant="secondary"
              onClick={handleDownloadPdf}
            >
              Download
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
