"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import JobDetail from "../_components/JobDetail";
import ResumeTemplate from "../_components/ResumeTemplate";

function page() {
  return (
    <div className=" ">
      <Link className="flex w-24  pb-4 group " href={"/dashboard"}>
        <ChevronLeft className="group-hover:text-blue-600" />
        <span className="group-hover:underline group-hover:text-blue-600">
          Go Back
        </span>
      </Link>
      <div className="flex items-center justify-center">
        <div className="flex gap-10 ">
          <JobDetail />
          <div className="border rounded w-[40rem] text-center p-5">
            <ResumeTemplate />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
