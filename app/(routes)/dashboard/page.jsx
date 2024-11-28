"use client";
import React, { useEffect } from "react";
import Workspace from "./_components/Workspace";
import useStore from "@/store/useStore";
export const runtime = "edge";

const Dashboard = () => {
  const setInitialTap = useStore((state) => state.setInitialTap);
  const setResumeRef = useStore((state) => state.setResumeRef);
  const setLoading = useStore((state) => state.setLoading);
  const setJobTitle = useStore((state) => state.setJobTitle);
  const setObjective = useStore((state) => state.setObjective);
  const setResumeScanData = useStore((state) => state.setResumeScanData);
  const setJobDescription = useStore((state) => state.setJobDescription);
  const setUserFullName = useStore((state) => state.setUserFullName);
  const setUserEmailAddress = useStore((state) => state.setUserEmailAddress);
  const setUserPhoneNumber = useStore((state) => state.setUserPhoneNumber);
  const setUserWebsite = useStore((state) => state.setUserWebsite);
  const setUserAddress = useStore((state) => state.setUserAddress);
  const setUserDegree = useStore((state) => state.setUserDegree);
  const setSkills = useStore((state) => state.setSkills);
  const setUserLanguage = useStore((state) => state.setUserLanguage);
  const setJobExperience = useStore((state) => state.setJobExperience);
  const setChatOutput = useStore((state) => state.setChatOutput);

  const resetAllState = () => {
    setInitialTap(null);
    setResumeRef(null);
    setLoading(false);
    setJobTitle("");
    setObjective("");
    setResumeScanData(null);
    setJobDescription("");
    setUserFullName("");
    setUserEmailAddress("");
    setUserPhoneNumber("");
    setUserWebsite("");
    setUserAddress("");
    setSkills([]);
  };

  useEffect(() => {
    resetAllState();
  }, []);

  return (
    <div className="">
      <Workspace />
    </div>
  );
};

export default Dashboard;
