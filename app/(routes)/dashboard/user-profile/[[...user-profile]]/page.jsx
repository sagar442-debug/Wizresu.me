"use client";
import React from "react";
import { UserProfile } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
export const runtime = "edge";

const UserProfilePage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  return <div className=" xl:ml-32 mt-10">{user ? <UserProfile /> : ""}</div>;
};

export default UserProfilePage;
