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

const JobInfo = ({ jobData, save }) => {
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);
  const router = useRouter();
  const pathname = usePathname();
  const { generateData } = useDataGenerator();
  const setJobExperience = useStore((state) => state.setJobExperience);
  const jobExperience = useStore((state) => state.jobExperience);
  const [jobDetails, setJobDetails] = useState([]);

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
    setJobExperience(jobData);
  }, []);

  useEffect(() => {
    if (save == true) {
      whenSave();
    }
  }, [save]);

  const whenSave = () => {
    setJobExperience(jobDetails);
  };

  return (
    <div className="mt-4">
      <CardTitle className="mb-4">Job Experience</CardTitle>
      {jobDetails?.map((data, index) => (
        <form className="space-y-4" key={index}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
            <div>
              <label className="sr-only" htmlFor={`jobTitle-${index}`}>
                Job Title/Project Title
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Job Title"
                type="text"
                id={`jobTitle-${index}`}
                value={data.jobTitle || ""}
                onChange={(e) =>
                  setJobDetails((prev) =>
                    prev.map((job, jobIndex) =>
                      jobIndex === index
                        ? { ...job, jobTitle: e.target.value }
                        : job
                    )
                  )
                }
              />
            </div>
            <div>
              <label className="sr-only" htmlFor={`jobCompany-${index}`}>
                Company Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Company Name"
                type="text"
                id={`jobCompany-${index}`}
                value={data.companyName || ""}
                onChange={(e) =>
                  setJobDetails((prev) =>
                    prev.map((job, jobIndex) =>
                      jobIndex === index
                        ? { ...job, companyName: e.target.value }
                        : job
                    )
                  )
                }
              />
            </div>
            <div>
              <label className="sr-only" htmlFor={`jobStartDate-${index}`}>
                Start Date
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Start Date"
                type="text"
                id={`jobStartDate-${index}`}
                value={data.startDate || ""}
                onChange={(e) =>
                  setJobDetails((prev) =>
                    prev.map((job, jobIndex) =>
                      jobIndex === index
                        ? { ...job, startDate: e.target.value }
                        : job
                    )
                  )
                }
              />
            </div>
            <div>
              <label className="sr-only" htmlFor={`jobEndDate-${index}`}>
                End Date
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="End Date"
                type="text"
                id={`jobEndDate-${index}`}
                value={data.endDate || ""}
                onChange={(e) =>
                  setJobDetails((prev) =>
                    prev.map((job, jobIndex) =>
                      jobIndex === index
                        ? { ...job, endDate: e.target.value }
                        : job
                    )
                  )
                }
              />
            </div>
          </div>
          <div>
            <label className="sr-only" htmlFor={`jobDescription-${index}`}>
              Job Description
            </label>
            {data.userRoleDescription?.map((desc, descIndex) => (
              <div className="flex items-center my-2 space-x-2" key={descIndex}>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Description Line"
                  type="text"
                  value={desc || ""}
                  onChange={(e) =>
                    setJobDetails((prev) =>
                      prev.map((job, jobIndex) =>
                        jobIndex === index
                          ? {
                              ...job,
                              userRoleDescription: job.userRoleDescription.map(
                                (d, i) => (i === descIndex ? e.target.value : d)
                              ),
                            }
                          : job
                      )
                    )
                  }
                />
                <button
                  type="button"
                  className="bg-[#3b82f6] text-sm flex items-center duration-100 transition-all group p-3 text-white hover:bg-[#5b9aff]"
                  onClick={() =>
                    setJobDetails((prev) =>
                      prev.map((job, jobIndex) =>
                        jobIndex === index
                          ? {
                              ...job,
                              jobDescription: job.userRoleDescription.filter(
                                (_, i) => i !== descIndex
                              ),
                            }
                          : job
                      )
                    )
                  }
                >
                  <Settings className="group-hover:rotate-90 duration-200" />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-[#3b82f6] text-sm flex items-center gap-x-2 duration-100 transition-all group p-2 text-white hover:bg-[#5b9aff]"
            >
              <Settings className="group-hover:rotate-90 duration-200" />
              <span>Regenerate</span>
            </button>
          </div>
        </form>
      ))}
    </div>
  );
};

export default JobInfo;
