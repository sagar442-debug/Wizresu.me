import React from "react";
import { UserProfile } from "@clerk/nextjs";
export const runtime = "edge";

const UserProfilePage = () => {
  return (
    <div className=" xl:ml-32 mt-10">
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
