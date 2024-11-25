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
import { Trash2 } from "lucide-react";
import { Save } from "lucide-react";

export const runtime = "edge";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const page = () => {
  const { resumeId } = useParams();
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [resumeDetail, setResumeDetail] = useState({});
  const [loader, setLoader] = useState(true);
  const [resumeTitle, setResumeTitle] = useState();
  const [onSave, setOnSave] = useState(false);

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
      setResumeDetail(data.resumeDetails);
      console.log("Success fetching the resume!!", data.resumeDetails);
      setLoader(false);
    } catch (error) {
      console.log("Server error", error.message);
    }
  };

  const justSave = (e) => {
    e.preventDefault();
    setOnSave(true);
  };

  return (
    <div>
      <Card className="lg:w-[500px] overflow-y-scroll h-[90vh]">
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
              <div className="mb-4">
                <label className="sr-only" htmlFor="email">
                  Resume Title
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Resume Title"
                  type="text"
                  value={resumeDetail?.resumeTitle}
                />
              </div>

              <PersonalInfoData
                save={onSave}
                fullName={resumeDetail?.userFullName}
                emailAddress={resumeDetail?.userEmailAddress}
                phoneNumber={resumeDetail?.userPhoneNumber}
                website={resumeDetail?.userPhoneNumber}
                address={resumeDetail?.userAddress}
                objectiveText={resumeDetail?.objective}
              />
              <EducationInfo
                save={onSave}
                educationData={resumeDetail?.userDegree}
              />
              <LanguagesInfo
                save={onSave}
                languageData={resumeDetail?.userLanguage}
              />
              <JobInfo save={onSave} jobData={resumeDetail?.jobExperience} />
              <div className="flex space-x-2 items-center">
                <button
                  onClick={justSave}
                  className="bg-[#3b82f6] p-2 duration-100 text-sm transition-all flex items-center gap-2  text-white mt-2 rounded-[5px] hover:bg-[#5b9aff]"
                >
                  <Save />
                  <span>Save</span>
                </button>
                <button className="bg-[#b42929] flex items-center text-sm gap-2 p-2 duration-100 transition-all text-white mt-2 rounded-[5px] hover:bg-[#e74646]">
                  <Trash2 className="" />
                  <span>Delete</span>
                </button>
              </div>
            </CardContent>
          )}
        </div>
      </Card>
    </div>
  );
};

export default page;
