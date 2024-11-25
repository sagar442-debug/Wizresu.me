import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useStore from "@/store/useStore";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDataGenerator } from "@/app/_utils/dataGenerator";
import { useRouter, usePathname } from "next/navigation";
import { Settings } from "lucide-react";

const JobInfo = ({ jobData }) => {
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);
  const router = useRouter();
  const pathname = usePathname();
  const { generateData } = useDataGenerator();
  const setJobExperience = useStore((state) => state.setJobExperience);
  const jobExperience = useStore((state) => state.jobExperience);
  const [jobTitle, setJobTitle] = useState("");
  const [jobCompany, setJobCompany] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [addMore, setAddMore] = useState(false);
  const jobTitle2 = useStore((state) => state.jobTitle);
  const [jobDetails, setJobDetails] = useState([]);

  const onJobExperienceSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setJobExperience({
      jobTitle,
      jobCompany,
      jobStartDate,
      jobEndDate,
      jobDescription,
    });
    router.push(`${pathname}/download-resume`);
  };

  // Run generateData whenever jobExperience changes
  useEffect(() => {
    if (jobExperience && jobExperience.length > 0) {
      generateData();
    }
  }, [jobExperience]);
  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(jobData);
    setJobDetails(jobData);
  }, []);

  return (
    <div className="mt-4">
      <CardTitle className="mb-4">Job Experience</CardTitle>
      {jobDetails?.map((data) => (
        <form className="space-y-4 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Job Title/ Project title 1
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Job title 1"
                type="text"
                id="full-name"
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Company Name 1
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Company Name 1"
                type="text"
                id="full-name"
                onChange={(e) => setJobCompany(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Start Date
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Start Date"
                type="text"
                id="full-name"
                onChange={(e) => setJobStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                End Date
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="End Date"
                type="text"
                id="full-name"
                onChange={(e) => setJobEndDate(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="sr-only" htmlFor="email">
              Job Description
            </label>
            {data?.jobDescription?.map((item) => (
              <div className="flex items-center my-2">
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm "
                  placeholder="Description Line"
                  type="text"
                />
                <button className="bg-[#3b82f6] text-sm flex items-center duration-100 transition-all group p-3 text-white   hover:bg-[#5b9aff]">
                  <Settings className="group-hover:rotate-90 duration-200" />
                </button>
              </div>
            ))}
            <button className="bg-[#3b82f6] text-sm flex items-center gap-x-2 duration-100 transition-all group p-3 text-white   hover:bg-[#5b9aff]">
              <Settings className="group-hover:rotate-90 duration-200" />
              <span>Regenerate All</span>
            </button>
          </div>
        </form>
      ))}
    </div>
  );
};

export default JobInfo;
