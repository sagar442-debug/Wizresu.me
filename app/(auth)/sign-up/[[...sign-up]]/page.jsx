import { SignUp } from "@clerk/nextjs";
import React from "react";
export const runtime = "edge";

const page = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default page;
