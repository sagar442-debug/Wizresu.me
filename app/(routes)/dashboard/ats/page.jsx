"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAtsCalculator } from "@/app/_utils/atsCalculator";
import useStore from "@/store/useStore";
import { CheckCheck, CloudUpload } from "lucide-react";
import { ListTodo } from "lucide-react";
import { Briefcase } from "lucide-react";
import { ScanText } from "lucide-react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChangingProgressProvider from "../_components/ChangingProgressProvider";
import { ClipLoader } from "react-spinners";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";

export const runtime = "edge";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const Page = () => {
  const atsScore = useStore((state) => state.atsScore);
  const fileInputRef = useRef(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const { generateAtsScore, geminiData } = useAtsCalculator();
  const setAtsScore = useStore((state) => state.setAtsScore);
  const setResumeScanData = useStore((state) => state.setResumeScanData);
  const resumeScanData = useStore((state) => state.resumeScanData);
  const [atsPercent, setAtsPercent] = useState(0);
  const [scanLoader, setScanLoader] = useState(false);
  const [atsData, setAtsData] = useState({});
  const colors = ["#ff0000", "#e0a500", "#01dd6f", "#0000ff"]; // red, blue, yellow, green
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [resumeDetail, setResumeDetail] = useState("");
  const [addedResume, setAddedResume] = useState(false);
  const intervalRef = useRef(null);

  // Color cycling for progress bar
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through colors
    }, 1000); // Change color every 1 second

    return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
  }, [colors.length]);

  const onScan = async () => {
    if (!jobTitle || !jobDescription || !resumeDetail) {
      alert("Please fill in all fields before scanning!");
      return;
    }
    setScanLoader(true);
    const response = await generateAtsScore(
      resumeDetail,
      jobDescription,
      jobTitle
    );
    setResumeScanData(response);
    setAtsData(response);
    const score = Math.round(response.percentageMatch);
    setAtsPercent(score);
    console.log("This is gemini data", response);
    setScanLoader(false);
    setAddedResume(false);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await fetch(`${apiUrl}pdf/upload-pdf`, {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const data = await response.json();
          setResumeDetail(data.pdfText);
        } else {
          console.error("Error uploading PDF:", response.statusText);
          alert("Failed to extract text from the PDF. Please try again.");
        }
      } catch (error) {
        console.error("Failed to send file:", error);
        alert("Failed to upload PDF. Please try again.");
      }
      setAddedResume(true);
    }
  };

  const handleButtonClick = () => {
    if (!scanLoader) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="ml-10">
      <div className="flex gap-10">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center tracking-wider ">
              Calculate your ATS (BETA)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="space-y-2">
              <button
                disabled={scanLoader}
                onClick={handleButtonClick}
                className={`${
                  scanLoader ? "bg-gray-400" : "bg-[#3b82f6]"
                } w-full space-x-2 text-white font-semibold py-2 px-4 rounded flex items-center justify-center hover:bg-blue-600 transition duration-300`}
              >
                <span>{addedResume ? <CheckCheck /> : <CloudUpload />}</span>
                <span>Upload your resume!</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                disabled={scanLoader || addedResume}
                className={`${
                  scanLoader || addedResume
                    ? "bg-gray-400 hover:bg-gray-400"
                    : "bg-[#3aaa5c]"
                } w-full text-white font-semibold py-2 px-4 rounded flex space-x-2 hover:bg-[#31a353d8] transition duration-300`}
              >
                <span>
                  <ListTodo />
                </span>
                <span>Select your resume</span>
              </button>
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="px-2 flex gap-2 bg-[#3b82f6] text-white py-2 font-semibold rounded transition duration-300 hover:bg-[#3b7df6d3]"
                      variant="outline"
                    >
                      <span>
                        <Briefcase />
                      </span>
                      <span>Job Details</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Job details</DialogTitle>
                      <DialogDescription>
                        Provide the job details of the job that you are applying
                        to!
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 ">
                      <div className="grid grid-cols-4 items-center justify-start gap-4">
                        <Label className="text-right">Your Position</Label>
                        <input
                          onChange={(e) => setJobTitle(e.target.value)}
                          type="text"
                          className="outline-none p-2 border w-60 rounded"
                        />
                      </div>
                      <div className="grid grid-cols-4 justify-start gap-4">
                        <Label className="text-right">Description</Label>
                        <textarea
                          onChange={(e) => setJobDescription(e.target.value)}
                          type="text"
                          rows={10}
                          className="outline-none p-2 border w-60 rounded"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <button
                          className="px-3 border text-black flex gap-2 hover:bg-[#3b82f6] hover:text-white py-1 rounded transition duration-300"
                          type="submit"
                        >
                          Save
                        </button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <button
                  disabled={
                    jobTitle.length < 5 ||
                    jobDescription.length < 5 ||
                    !addedResume
                  }
                  onClick={onScan}
                  className={`px-2 flex gap-2  text-white py-2 font-semibold rounded transition duration-300 hover:bg-[#c49236cc] ${
                    jobTitle.length < 5 ||
                    jobDescription.length < 5 ||
                    !addedResume
                      ? "bg-[#c49236cc] "
                      : "bg-[#b68832]"
                  }`}
                  variant="outline"
                >
                  <span>
                    <ScanText />
                  </span>
                  <span>Scan</span>
                </button>
              </div>
            </div>
          </CardContent>
          <CardContent>
            <ChangingProgressProvider value={atsPercent} interval={10}>
              {(percentage) => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathTransitionDuration: 0.15,
                  })}
                />
              )}
            </ChangingProgressProvider>
          </CardContent>
        </Card>
        <Card className="w-[600px]">
          <CardHeader>
            <CardTitle>Suggestions</CardTitle>
          </CardHeader>
          {scanLoader ? (
            <div className="flex items-center justify-center mt-32 w-full ">
              <ClipLoader
                className="transition-all duration-75"
                color={colors[currentColorIndex]}
                size={100}
              />
            </div>
          ) : null}

          {atsData && Object.keys(atsData).length > 0 && (
            <>
              {atsData.recommendedKeywords &&
                atsData.recommendedKeywords.length > 0 && (
                  <CardContent>
                    <CardDescription className="font-semibold ">
                      Keywords:
                    </CardDescription>
                    <div className="grid grid-cols-3 text-sm text-center gap-3 text-white mt-2">
                      {atsData.recommendedKeywords.map((keyword, i) => (
                        <h1
                          key={i}
                          className="px-2 py-1 min-w-20 bg-[#5abe70fb] rounded-xl hover:bg-[#4caa60fb] duration-200 transition-all "
                        >
                          {keyword}
                        </h1>
                      ))}
                    </div>
                  </CardContent>
                )}

              {atsData.recommendedSentences &&
                atsData.recommendedSentences.length > 0 && (
                  <CardContent>
                    <CardDescription className="font-semibold ">
                      Phrases:
                    </CardDescription>
                    <div className="space-y-2 text-sm text-white mt-2">
                      {atsData.recommendedSentences.map((sentence, i) => (
                        <h1
                          key={i}
                          className="px-2 py-1 bg-[#50af7ffb] hover:bg-[#409c6efb] rounded-xl duration-200 transition-all"
                        >
                          {sentence}
                        </h1>
                      ))}
                    </div>
                  </CardContent>
                )}
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Page;
