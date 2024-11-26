"use client";
import React, { useState } from "react";
import ResumeTemplatePage from "./_components/ResumeTemplatePage";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div>
      <Link href={"/dashboard/resumes"} className="hover:underline">
        Go Back
      </Link>
      <div className="flex space-x-10  ">
        <div>{children}</div>
        <Card>
          <ResumeTemplatePage />
        </Card>
      </div>
    </div>
  );
};

export default layout;
