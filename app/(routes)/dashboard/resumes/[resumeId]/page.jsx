"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import PersonalInfoData from "./_components/PersonalInfoData";
import EducationInfo from "./_components/EducationInfo";
import LanguagesInfo from "./_components/LanguagesInfo";
import JobInfo from "./_components/JobInfo";
export const runtime = "edge";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const page = () => {
  const { resumeId } = useParams();
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [resumeDetail, setResumeDetail] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (user?.id) {
      fetchResumeDetails();
    }
  }, [user, isLoaded]);

  const fetchResumeDetails = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `${apiUrl}resume/detail?resumeId=${resumeId}&clerkId=${user?.id}`
      );
      if (!response.ok) {
        console.log("Error fetching the data!!");
        router.push("/not-found");
        return;
      }
      const data = await response.json();
      setResumeDetail(data);
      console.log("Success fetching the resume!!", data.resumeDetails);
      setLoader(false);
    } catch (error) {
      console.log("Server error", error.message);
    }
  };

  return (
    <div>
      <Card className="max-w-[600px] overflow-y-scroll h-[90vh]">
        <CardHeader>
          <CardTitle className="">Update Your Resume</CardTitle>
        </CardHeader>

        <div className="">
          {loader ? (
            <CardContent className="flex justify-center">
              <ClipLoader />
            </CardContent>
          ) : (
            <CardContent>
              <PersonalInfoData />
              <EducationInfo />
              <LanguagesInfo />
              <JobInfo />
            </CardContent>
          )}
        </div>
      </Card>
    </div>
  );
};

export default page;
