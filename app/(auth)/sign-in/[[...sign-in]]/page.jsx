import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <SignIn />
    </div>
  );
};

export default page;
