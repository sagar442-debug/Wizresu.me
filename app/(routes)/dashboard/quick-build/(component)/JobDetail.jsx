"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import useStore from "@/store/useStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";

const JobDetail = ({ noChange }) => {
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);
  const jobTitle = useStore((state) => state.jobTitle);
  const jobDescription = useStore((state) => state.jobDescription);
  const setJobTitle = useStore((state) => state.setJobTitle);
  const setJobDescription = useStore((state) => state.setJobDescription);
  const setPreviousPage = useStore((state) => state.setPreviousPage);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setLoading(false);
    setPreviousPage("/dashboard/");
  }, []);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
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
      setLoading(false);
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
      setLoading(false);
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
      setLoading(false);
    } else {
      router.push("/dashboard/create-new-resume/personal-details");
    }
  };
  return (
    <div
      className={`${
        noChange
          ? "p-0 lg:min-w-[25rem] xl:min-w-[40rem]"
          : "lg:min-w-[25rem] xl:min-w-[30rem]  p-5"
      } `}
    >
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
          </form>
        </section>
      </div>
    </div>
  );
};

export default JobDetail;
