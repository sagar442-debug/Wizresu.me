import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const ResumePDF = dynamic(() => import("./PDFView"), {
  ssr: false,
});

const ShowPDF = () => {
  const firstName = useSelector((state) => state.personalData.firstName);
  const emailAddress = useSelector((state) => state.personalData.emailAddress);
  const linkedInProfile = useSelector(
    (state) => state.personalData.linkedInProfile
  );
  const phoneNumber = useSelector((state) => state.personalData.phoneNumber);
  const portfolioWebsite = useSelector(
    (state) => state.personalData.portfolioWebsite
  );
  const githubProfile = useSelector(
    (state) => state.personalData.githubProfile
  );
  const additionalLink = useSelector(
    (state) => state.personalData.additionalLink
  );
  const experience = useSelector((state) => state.experienceData.experience);
  const projects = useSelector((state) => state.projectData.projects);
  const noProject = useSelector((state) => state.wizresumeData.noProject);
  const noExperience = useSelector((state) => state.wizresumeData.noExperience);
  const skills = useSelector((state) => state.skillData.skills);
  const data = {
    firstName,
    emailAddress,
    portfolioWebsite,
    linkedInProfile,
    phoneNumber,
    githubProfile,
    additionalLink,
    experience,
    projects,
    noProject,
    noExperience,
    skills,
  };
  return <ResumePDF data={data} />;
};

export default ShowPDF;
