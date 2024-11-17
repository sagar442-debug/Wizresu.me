"use client";
import React, { useEffect, useState } from "react";
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
import { useUser } from "@clerk/nextjs";

export const runtime = "edge";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const page = () => {
  const resumeRef = useStore((state) => state.resumeRef);
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);
  const jobExperience = useStore((state) => state.jobExperience);
  const jobTitle = useStore((state) => state.jobTitle);
  const userFullName = useStore((state) => state.userFullName);
  const userEmailAddress = useStore((state) => state.userEmailAddress);
  const userPhoneNumber = useStore((state) => state.userPhoneNumber);
  const userWebsite = useStore((state) => state.userWebsite);
  const userAddress = useStore((state) => state.userAddress);
  const userDegree = useStore((state) => state.userDegree);
  const userLanguage = useStore((state) => state.userLanguage);
  const jobDescription = useStore((state) => state.jobDescription);
  const [resumeData, setResumeData] = useState();
  const chatOutput = useStore((state) => state.chatOutput);
  const { user, isLoaded } = useUser();
  const [resumeName, setResumeName] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (Object.keys(jobExperience).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setResumeData({
      clerkId: user?.id,
      resumeTitle: resumeName,
      jobTitle,
      jobDescription,
      userFullName,
      userEmailAddress,
      userPhoneNumber,
      userWebsite,
      userAddress,
      userDegree,
      userLanguage,
      jobExperience,
    });
  }, [isLoaded, resumeName]);

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

  const onResumeSave = (e) => {
    e.preventDefault();
    console.log(resumeData);
  };

  useEffect(() => {
    console.log(resumeName);
  }, [resumeName]);

  const uploadResumeDetails = async () => {
    if (resumeName?.length < 3) {
      setErrorMessage("Resume name must be at least 3 characters!");
    }

    // Disable the button to prevent multiple submissions
    setButtonDisable(true);
    try {
      const response = await fetch(`${apiUrl}resume/save-resume`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resumeData),
      });
      if (!response.ok) {
        setButtonDisable(false);
        setErrorMessage(response.statusText);
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      console.log("Resume uploaded successfully:", data);
    } catch (error) {
      console.error("Failed to upload resume:", error);
    }
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
                  {resumeName.length < 3 ? (
                    <DialogDescription>
                      <p className="text-red-600">
                        Resume Name must be at least 3 character long
                      </p>
                    </DialogDescription>
                  ) : (
                    ""
                  )}
                  {errorMessage ? (
                    <DialogDescription>
                      <p className="text-red-600">{errorMessage}</p>
                    </DialogDescription>
                  ) : (
                    ""
                  )}
                </DialogHeader>
                <div className="grid gap-4 py-4 ">
                  <div className="grid grid-cols-4 items-center justify-start gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <input
                      type="text"
                      onChange={(e) => setResumeName(e.target.value)}
                      className="outline-none p-2 border w-60 rounded"
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
                    <Button
                      onClick={uploadResumeDetails}
                      type="button"
                      disabled={buttonDisable}
                      className="hover:bg-slate-100 shadow-lg rounded "
                    >
                      Save
                    </Button>
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
