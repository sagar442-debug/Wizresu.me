"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import useStore from "@/store/useStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const JobDetail = () => {
  const jobTitle = useStore((state) => state.jobTitle);
  const jobDescription = useStore((state) => state.jobDescription);
  const setJobTitle = useStore((state) => state.setJobTitle);
  const setJobDescription = useStore((state) => state.setJobDescription);
  const setPreviousPage = useStore((state) => state.setPreviousPage);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setPreviousPage("/dashboard/");
  }, []);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobTitle.trim() === "" && jobDescription.trim() === "") {
      toast.error("Please fill in all the fields", {
        style: {
          background: "red",
          border: "none",
          color: "#fff",
          boxShadow: "0 5px 10px #00000040",
        },
        className: "class",
      });
    } else if (jobTitle.length < 3) {
      toast.error("Job Title should be more than 3 characters", {
        style: {
          background: "red",
          border: "none",
          color: "#fff",
          boxShadow: "0 5px 10px #00000040",
        },
        className: "class",
      });
    } else if (jobDescription.length < 100) {
      toast.error("Job Description should be more than 100 characters", {
        style: {
          background: "red",
          border: "none",
          color: "#fff",
          boxShadow: "0 5px 10px #00000040",
        },
        className: "class",
      });
    } else {
      router.push("/dashboard/create-new-resume/personal-details");
    }
  };
  return (
    <div className=" min-w-[40rem]  p-5">
      <div className=" ">
        <section className="">
          <form action="#" className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Job Title
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Job Title"
                type="text"
                id="name"
                onChange={(e) => setJobTitle(e.target.value)}
                value={jobTitle}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Job Description
              </label>

              <textarea
                className="w-full rounded-lg border resize-none border-gray-200 p-3 text-sm"
                placeholder="Job Description"
                rows="20"
                id="Job Description"
                onChange={(e) => setJobDescription(e.target.value)}
                value={jobDescription}
              ></textarea>
            </div>
            <Button
              className="mt-6 hover:bg-blue-400 rounded hover:text-white shadow border"
              variant="ghost"
              onClick={handleSubmit}
            >
              Proceed
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default JobDetail;
