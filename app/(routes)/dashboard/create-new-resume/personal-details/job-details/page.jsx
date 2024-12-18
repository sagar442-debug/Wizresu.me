"use client";
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
import { ReloadIcon } from "@radix-ui/react-icons";
export const runtime = "edge";

const page = () => {
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
  const [addMoreJob, setAddMoreJob] = useState(2);
  const jobTitle2 = useStore((state) => state.jobTitle);
  const loadingChat = useStore((state) => state.loadingChat);

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

  useEffect(() => {
    if (jobExperience && jobExperience.length > 0) {
      setLoading(true);
      generateData();
      setLoading(false);
    }
  }, [jobExperience]);

  useEffect(() => {
    setLoading(false);
  }, []);

  const onAddMore = (e) => {
    e.preventDefault();
    setAddMore(true);
    setJobExperience({
      jobTitle,
      jobCompany,
      jobStartDate,
      jobEndDate,
      jobDescription,
    });
    setAddMoreJob(2);
  };

  const onMoreJob = (e) => {
    setAddMoreJob(3);
    setJobExperience({
      jobTitle,
      jobCompany,
      jobStartDate,
      jobEndDate,
      jobDescription,
    });
  };

  const onAddeJob4 = () => {
    setAddMoreJob(4);
    setJobExperience({
      jobTitle,
      jobCompany,
      jobStartDate,
      jobEndDate,
      jobDescription,
    });
  };
  const onAddeJob5 = () => {
    setAddMoreJob(5);
    setJobExperience({
      jobTitle,
      jobCompany,
      jobStartDate,
      jobEndDate,
      jobDescription,
    });
  };

  return (
    <div>
      <div className="rounded min-w-[40rem] min-h-[80vh]">
        <Card>
          <CardHeader>
            <CardTitle>Previous Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 ">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  Email
                </label>
                <textarea
                  className="w-full rounded-lg border resize-none border-gray-200 p-3 text-sm"
                  placeholder="Job Description"
                  rows="10"
                  id="Job Description"
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
              </div>
            </form>
            <Button
              onClick={onAddMore}
              className={`hover:bg-gray-100 gap-2 ${addMore ? "hidden" : ""}`}
            >
              <IoAddCircleOutline className="text-lg" />
              <span>Add More</span>
            </Button>
            {/* Experience 2 */}
            <form action="#" className={`space-y-4 ${addMore ? "" : "hidden"}`}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Job Title/ Project title 2
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Job title"
                    type="text"
                    id="full-name"
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Company Name 2
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Company Name 2"
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
                  Email
                </label>
                <textarea
                  className="w-full rounded-lg border resize-none border-gray-200 p-3 text-sm"
                  placeholder="Job Description"
                  rows="10"
                  id="Job Description"
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
              </div>
            </form>
            <Button
              onClick={onMoreJob}
              className={`hover:bg-gray-100 gap-2 ${
                addMoreJob == 2 && addMore == true ? "" : "hidden"
              }`}
            >
              <IoAddCircleOutline className="text-lg" />
              <span>Add More</span>
            </Button>
            <form
              action="#"
              className={`space-y-4 ${addMoreJob > 2 ? "" : "hidden"}`}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Job Title/ Project title 3
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Job title"
                    type="text"
                    id="full-name"
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Company Name 3
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Company Name 2"
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
                  Email
                </label>
                <textarea
                  className="w-full rounded-lg border resize-none border-gray-200 p-3 text-sm"
                  placeholder="Job Description"
                  rows="10"
                  id="Job Description"
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
              </div>
            </form>
            <Button
              onClick={onAddeJob4}
              className={`hover:bg-gray-100 gap-2 ${
                addMoreJob == 3 && addMore == true ? "" : "hidden"
              }`}
            >
              <IoAddCircleOutline className="text-lg" />
              <span>Add More 4</span>
            </Button>
            <form
              action="#"
              className={`space-y-4 ${addMoreJob > 3 ? "" : "hidden"}`}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Job Title/ Project title 3
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Job title"
                    type="text"
                    id="full-name"
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Company Name 3
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Company Name 2"
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
                  Email
                </label>
                <textarea
                  className="w-full rounded-lg border resize-none border-gray-200 p-3 text-sm"
                  placeholder="Job Description"
                  rows="10"
                  id="Job Description"
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
              </div>
            </form>
            <Button
              onClick={onAddeJob5}
              className={`hover:bg-gray-100 gap-2 ${
                addMoreJob == 4 && addMore == true ? "" : "hidden"
              }`}
            >
              <IoAddCircleOutline className="text-lg" />
              <span>Add More 4</span>
            </Button>
            <form
              action="#"
              className={`space-y-4 ${addMoreJob > 4 ? "" : "hidden"}`}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Job Title/ Project title 3
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Job title"
                    type="text"
                    id="full-name"
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Company Name 3
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Company Name 2"
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
                  Email
                </label>
                <textarea
                  className="w-full rounded-lg border resize-none border-gray-200 p-3 text-sm"
                  placeholder="Job Description"
                  rows="10"
                  id="Job Description"
                  onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Link
              onClick={onJobExperienceSubmit}
              href="/dashboard/create-new-resume/personal-details/job-details/download-resume"
              className={`${
                loading || loadingChat || jobExperience.length < 1
                  ? "cursor-not-allowed opacity-50" // Disabled appearance
                  : "cursor-pointer" // Active appearance
              }`}
            >
              <Button
                onClick={onJobExperienceSubmit}
                className=" hover:bg-blue-400 rounded hover:text-white shadow border "
                variant="ghost"
                disabled={loading || loadingChat || jobExperience.length < 1}
              >
                {loading || loadingChat ? (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  ""
                )}
                Proceed
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
