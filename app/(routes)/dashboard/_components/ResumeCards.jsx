"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const ResumeCards = ({ resume }) => {
  const { user, isLoaded, isSignedIn } = useUser();
  const [resumeData, setResumeData] = useState();
  const router = useRouter();
  const [resumeLoader, setResumeLoader] = useState(false);

  const onLoadResume = async () => {
    setResumeLoader(true);
    router.push(`/dashboard/resumes/${resume}`);
  };

  useEffect(() => {
    fetchResumeDetails();
  }, [user]);

  const fetchResumeDetails = async () => {
    try {
      const response = await fetch(
        `${apiUrl}resume/detail?resumeId=${resume}&clerkId=${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch resume details");
      }
      const data = await response.json();
      if (data.message !== "Resume found!!") {
        throw new Error(data.message || "Unknown error");
      }
      setResumeData(data.resumeDetails);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <div onClick={onLoadResume} className="">
      <button className="relative group flex md:items-center items-center justify-center md:justify-center">
        <div className="absolute z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-xl font-semibold">
          <div className="flex flex-col items-center opacity-70">
            <span className="transform transition-transform duration-500 delay-100 group-hover:-rotate-90 ">
              {resumeLoader ? (
                <VscDebugRestart className="text-base animate-spin-reverse" />
              ) : (
                <VscDebugRestart className="text-base" />
              )}
            </span>
            <h1 className="text-sm tracking-widest">
              {resumeData?.resumeTitle}
            </h1>
          </div>
        </div>
        <div className="group ">
          <Card className="flex items-center border w-52 h-36  group rounded-2xl mt-2 shadow-lg cursor-pointer  transition-all">
            <div className="flex justify-center w-full ">
              <Image
                src={
                  "https://cdn-blog.novoresume.com/articles/modern-resume-templates/modern-resume-templates.png"
                }
                height={400}
                width={250}
                alt="Previous-Resume-Picture"
                className="h-32 w-20 group-hover:blur-xs duration-200"
              />
            </div>
          </Card>
        </div>
      </button>
    </div>
  );
};

export default ResumeCards;
