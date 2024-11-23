import { SignIn } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
export const runtime = "edge";

const page = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] flex-col">
      <Link className="flex w-24  pb-4 group " href={"/"}>
        <ChevronLeft className="group-hover:text-blue-600" />
        <span className="group-hover:underline group-hover:text-blue-600">
          Go Back
        </span>
      </Link>
      <SignIn />
    </div>
  );
};

export default page;
