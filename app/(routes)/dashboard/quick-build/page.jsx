"use client";
import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUser } from "@clerk/nextjs";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import JobDetail from "./(component)/JobDetail";
import { ReloadIcon } from "@radix-ui/react-icons";
import useStore from "@/store/useStore";
import { useDataGenerator } from "@/app/_utils/dataGenerator";
import { useRouter } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { user, isLoaded, isSignedIn } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [frameworks, setFrameWorks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { generateData } = useDataGenerator();
  const router = useRouter();
  const setObjective = useStore((state) => state.setObjective);
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
  const [noResume, setNoResume] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setObjective("");
    setJobDescription("");
    setUserDegree([]);
    setUserFullName("");
    setUserEmailAddress("");
    setUserPhoneNumber("");
    setUserWebsite("");
    setUserAddress("");
    setSkills([]);
    setUserLanguage([]);
  }, []);

  useEffect(() => {
    if (user) {
      setFrameWorks([]);
      extractResumes();
    }
  }, [user]);

  const extractResumes = async () => {
    try {
      const response = await fetch(
        `${apiUrl}users/get-user?clerkId=${encodeURIComponent(user.id)}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch user details. Status: ${response.status}`
        );
      }
      const userDetails = await response.json();
      const resumeList = userDetails.userData.resumes;
      if (resumeList.length == 0) {
        setNoResume(true);
      }
      await Promise.all(resumeList.map((item) => fetchResumeDetails(item)));
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const fetchResumeDetails = async (id) => {
    try {
      const response = await fetch(
        `${apiUrl}resume/detail?resumeId=${id}&clerkId=${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch resume details");
      }
      const data = await response.json();
      if (data.message !== "Resume found!!") {
        throw new Error(data.message || "Unknown error");
      }
      const resumeInfo = data.resumeDetails;
      setFrameWorks((prevFrameworks) => {
        if (prevFrameworks.some((item) => item.value === resumeInfo._id)) {
          return prevFrameworks; // Return the previous state if duplicate
        }
        return [
          ...prevFrameworks,
          {
            value: resumeInfo._id,
            label: resumeInfo.resumeTitle,
          },
        ];
      });
    } catch (error) {
      console.error("Error fetching resume details:", error);
    }
  };

  const onQuickBuild = async () => {
    setLoading(true);
    try {
      await generateData();
      const response = await fetch(`${apiUrl}resume/update-quick-builds`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clerkId: user.id,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        setErrorMessage(data.message || "An error occurred.");
        return;
      }
      router.push(
        "/dashboard/create-new-resume/personal-details/job-details/download-resume"
      );
    } catch (error) {
      setLoading(false);
      console.error("Error fetching resume details:", error);
    }
  };

  const onSelectingResume = async (currentValue) => {
    try {
      const response = await fetch(
        `${apiUrl}resume/detail?resumeId=${currentValue}&clerkId=${user.id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch resume details");
      }
      const data = await response.json();
      const resumeInfo = data.resumeDetails;
      setObjective(resumeInfo.objective);
      setUserFullName(resumeInfo.userFullName);
      setUserEmailAddress(resumeInfo.userEmailAddress);
      setUserPhoneNumber(resumeInfo.userPhoneNumber);
      setUserWebsite(resumeInfo?.userWebsite);
      setUserAddress(resumeInfo.userAddress);
      resumeInfo.userDegree.forEach((degree) => {
        setUserDegree({
          degreeName: degree.degreeName,
          degreeInstitution: degree.degreeInstitution,
          degreeEndDate: degree.degreeEndDate,
          shortDesc: degree.shortDesc,
        });
      });
      setSkills(resumeInfo.skills);
      resumeInfo.userLanguage.forEach((language) => {
        setUserLanguage({
          languageName: language.languageName,
          languagePercentage: language.languagePercentage,
        });
      });
      resumeInfo.jobExperience.forEach((job) => {
        setJobExperience({
          jobTitle: job.jobTitle,
          jobCompany: job.companyName,
          jobStartDate: job.startDate,
          jobEndDate: job.endDate,
          jobDescription: job.userRoleDescription,
        });
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching resume details:", error);
    }
  };

  return (
    <div className="mt-10 ml-10">
      <div>
        <h1 className="text-2xl font-bold  tracking-wider">
          Select your saved resume!
        </h1>
        <p className="text-xs font-semibold text-gray-500 tracking-wider">
          {/* Who has time to tweak their resume every time they apply for a job?
          Let’s face it—your dream role won’t wait while you wrestle with bullet
          points. Create a resume on the go and focus on landing the gig, not
          formatting the doc! */}
          This is a premium feature from Wizresume
        </p>
        <p className="text-lg font-semibold text-gray-500 mt-4 tracking-wider">
          {/* Who has time to tweak their resume every time they apply for a job?
          Let’s face it—your dream role won’t wait while you wrestle with bullet
          points. Create a resume on the go and focus on landing the gig, not
          formatting the doc! */}
          Build Resume In One Click
        </p>

        {noResume ? (
          <p className="text-sm font-semibold text-red-500 tracking-wider">
            You need to create at least one resume to use this feature!
          </p>
        ) : (
          ""
        )}

        {errorMessage.length > 1 ? (
          <p className="text-sm font-semibold text-red-500 tracking-wider">
            {errorMessage}
          </p>
        ) : (
          ""
        )}

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              role="combobox"
              aria-expanded={open}
              className="w-[300px] justify-between mt-5 shadow-md border"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select resume..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput
                placeholder="Search resume..."
                onChange={(e) => setSearchQuery(e.target.value)} // Track search input
              />
              <CommandList>
                <CommandEmpty>No resume found.</CommandEmpty>
                <CommandGroup>
                  {frameworks
                    .filter((framework) =>
                      framework.label
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    ) // Filter by label
                    .map((framework) => (
                      <CommandItem
                        className="cursor-pointer"
                        key={framework.value}
                        value={framework.value}
                        onSelect={async (currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                          await onSelectingResume(currentValue);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <div className="mt-10">
          <Card className="border-none shadow-none max-w-[300px]">
            <CardHeader className="p-0">
              <CardTitle className="text-xl">Job Details</CardTitle>
            </CardHeader>
            <JobDetail noChange={true} />
            <Button
              disabled={loading || value.length == 0}
              onClick={onQuickBuild}
              className="mt-6 hover:bg-blue-400 rounded hover:text-white shadow border"
              variant="ghost"
            >
              {loading ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                ""
              )}
              One Click Build
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
