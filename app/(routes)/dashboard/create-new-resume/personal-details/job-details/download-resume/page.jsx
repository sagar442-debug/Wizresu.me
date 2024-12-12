"use client";
import React, { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
  const objective = useStore((state) => state.objective);
  const skills = useStore((state) => state.skills);
  const chatOutput = useStore((state) => state.chatOutput);
  const { user, isLoaded } = useUser();
  const [resumeName, setResumeName] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Basic");
  const [sub, setSub] = useState();
  const loadingChat = useStore((state) => state.loadingChat);

  useEffect(() => {
    if (Object.keys(jobExperience).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserDetails();
  }, [user]);

  const getUserDetails = async () => {
    try {
      const response = await fetch(
        `${apiUrl}users/get-user?clerkId=${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application-json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setSub(data?.userData?.subscription);
    } catch (error) {
      console.error("Failed to get user details:", error);
    }
  };

  useEffect(() => {
    setResumeData({
      clerkId: user?.id,
      resumeTitle: resumeName,
      skills,
      objective,
      jobTitle,
      jobDescription,
      userFullName,
      userEmailAddress,
      userPhoneNumber,
      userWebsite,
      userAddress,
      userDegree,
      userLanguage,
      jobExperience: chatOutput.jobExperience,
    });
  }, [isLoaded, resumeName]);

  const inititalTap = useStore((state) => state.initialTap);
  const setInitialTap = useStore((state) => state.setInitialTap);
  //   const handleDownloadPdf = async (e) => {
  //     setLoading(true);
  //     e.preventDefault();
  //     setInitialTap(true);

  //     await new Promise((resolve) => setTimeout(resolve, 200));
  //     const input = resumeRef.current;

  //     if (!input) {
  //         console.error("resumeRef is not set or is invalid.");
  //         setLoading(false);
  //         return;
  //     }

  //     await html2canvas(input, { scale: 3 }).then((canvas) => {
  //         const imgData = canvas.toDataURL("image/png");
  //         const pdf = new jsPDF("p", "mm", "a4");

  //         // A4 dimensions in pixels at 96dpi
  //         const pdfWidth = 210; // in mm
  //         const pdfHeight = 297; // in mm

  //         const canvasWidth = canvas.width;
  //         const canvasHeight = canvas.height;

  //         // Convert canvas height to corresponding height in mm
  //         const imgHeight = (canvasHeight * pdfWidth) / canvasWidth;

  //         // Calculate the number of pages needed
  //         let heightLeft = imgHeight; // Remaining content height
  //         let position = 0; // Initial position

  //         // Add the first page
  //         pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight > pdfHeight ? pdfHeight : imgHeight);

  //         heightLeft -= pdfHeight;

  //         // Add additional pages if content overflows
  //         while (heightLeft > 0) {
  //             position -= pdfHeight; // Move to the next section
  //             pdf.addPage();
  //             pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight > pdfHeight ? pdfHeight : heightLeft);
  //             heightLeft -= pdfHeight;
  //         }

  //         pdf.save("resume.pdf");
  //     });

  //     setInitialTap(false);
  //     setLoading(false);
  // };
  useEffect(() => {
    console.log(loadingChat);
  }, [loadingChat]);
  const handleDownloadPdf = async (e) => {
    setLoading(true);
    e.preventDefault();
    setInitialTap(true);

    await new Promise((resolve) => setTimeout(resolve, 200));
    const input = resumeRef.current;

    if (!input) {
      console.error("resumeRef is not set or is invalid.");
      setLoading(false);
      return;
    }

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 297; // A4 height in mm
    const pdfAspectRatio = pdfHeight / pdfWidth; // Aspect ratio of A4

    const canvas = await html2canvas(input, { scale: 3 }); // Higher scale for better quality
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale image height proportionally

    const pageHeightInPx = (canvas.width / pdfWidth) * pdfHeight; // Height of one PDF page in pixels
    let heightLeft = canvas.height; // Total canvas height in pixels
    let position = 0; // Start at the top

    while (heightLeft > 0) {
      // Render the current portion of the canvas
      const canvasPage = document.createElement("canvas");
      canvasPage.width = canvas.width;
      canvasPage.height = Math.min(pageHeightInPx, heightLeft); // Current page height in pixels

      const ctx = canvasPage.getContext("2d");
      ctx.drawImage(
        canvas,
        0,
        position,
        canvas.width,
        canvasPage.height,
        0,
        0,
        canvas.width,
        canvasPage.height
      );

      // Convert the page canvas to an image
      const imgData = canvasPage.toDataURL("image/png");

      // Add the image to the PDF
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        imgWidth,
        (canvasPage.height * imgWidth) / canvasPage.width
      );

      // Move to the next portion
      heightLeft -= pageHeightInPx;
      position += pageHeightInPx;

      // Add a new page for the next portion (if necessary)
      if (heightLeft > 0) {
        pdf.addPage();
      }
    }

    pdf.save("resume.pdf");
    setInitialTap(false);
    setLoading(false);
  };

  const onResumeSave = (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, [resumeName]);

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
      console.log(response);
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
              disabled={loading || loadingChat}
            >
              {loading || loadingChat ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                ""
              )}
              Download
            </Button>
            <Dialog className="">
              {/* {sub == "Professional" ||
                (sub == "Premium" && (
                  <DialogTrigger asChild>
                    <Button
                      className="bg-sky-500 text-white hover:text-black rounded-2xl hover:shadow-lg space-x-2"
                      variant="secondary"
                    >
                      <FaRegBookmark />
                      <span>Save</span>
                    </Button>
                  </DialogTrigger>
                ))} */}
              {sub == process.env.NEXT_PUBLIC_PREMIUM_PRICE ||
              (sub == process.env.NEXT_PUBLIC_PROFESSIONAL_PRICE &&
                isLoaded) ? (
                <DialogTrigger asChild>
                  <Button
                    className="bg-sky-500 text-white hover:text-black rounded-2xl hover:shadow-lg space-x-2"
                    variant="secondary"
                  >
                    <FaRegBookmark />
                    <span>Save</span>
                  </Button>
                </DialogTrigger>
              ) : (
                <HoverCard>
                  <HoverCardTrigger>
                    <Button
                      className="bg-sky-500 text-white hover:text-black rounded-2xl hover:shadow-lg space-x-2"
                      variant="secondary"
                      disabled
                    >
                      <Lock width={16} />

                      <span>Save</span>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Get the premium subscription to save your resumes
                  </HoverCardContent>
                </HoverCard>
              )}

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
