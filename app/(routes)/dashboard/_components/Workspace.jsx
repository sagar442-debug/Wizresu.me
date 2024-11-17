"use client";
import React, { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";
import { Grid2X2 } from "lucide-react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import useStore from "@/store/useStore";
import { useRouter } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";
import ResumeCards from "./ResumeCards";
import { useUser } from "@clerk/nextjs";

import LoadingResumeCard from "./LoadingResumeCard";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

function Workspace() {
  const router = useRouter();
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);
  const { user, isLoaded, isSignedIn } = useUser();
  const [clerkId, setClerkId] = useState();
  const [userInfo, setUserInfo] = useState();
  const [totalResume, setTotalResumes] = useState([]);
  const [resumeLoading, setResumeLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setClerkId(user.id);
    }
    setLoading(false);
  }, [isLoaded]);

  useEffect(() => {
    if (clerkId && isLoaded) {
      fetchUserDetail();
    }
  }, [clerkId]);

  useEffect(() => {
    setTotalResumes(userInfo?.resumes);
    setResumeLoading(false);
  }, [userInfo]);

  const fetchUserDetail = async () => {
    try {
      const response = await fetch(
        `${apiUrl}users/get-user?clerkId=${encodeURIComponent(clerkId)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch user details. Status: ${response.status}`
        );
      }
      const userDetails = await response.json();
      setUserInfo(userDetails.userData);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const onNewResume = () => {
    setLoading(true);
    router.push("/dashboard/create-new-resume");
  };
  return (
    <div className="ml-5">
      <h2 className="text-4xl font-bold mx-1  tracking-wider">Dashboard</h2>
      <div className="flex justify-between items-center mx-1">
        <h2 className="text-lg font-semibold text-gray-500 tracking-wider">
          Create a new resume
        </h2>
      </div>
      <div className="grid gap-2 md:gap-0 lg:w-[900px] justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <button onClick={onNewResume} className="w-52 h-36">
          <Card className="flex items-center border w-full h-full group rounded-2xl mt-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-all">
            <div className="flex items-center group-hover:text-gray-500 mx-auto">
              <span>
                {" "}
                {loading ? (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Plus className="group-hover:text-gray-500" />
                )}
              </span>
              <h2 className="text-xl font-medium tracking-wider group-shover:text-gray-500">
                New Resume
              </h2>
            </div>
          </Card>
        </button>
        {resumeLoading ? (
          <LoadingResumeCard />
        ) : (
          totalResume?.map((resume, i) => (
            <ResumeCards key={i} resume={resume} />
          ))
        )}
      </div>
    </div>
  );
}

export default Workspace;
