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

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { user, isLoaded, isSignedIn } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [frameworks, setFrameWorks] = useState([]);

  useEffect(() => {
    if (user) {
      setFrameWorks([]);
      extractResumes();
    }
  }, [user]);

  useEffect(() => {
    console.log(value);
  }, [setValue]);

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
        if (
          prevFrameworks.some((item) => item.value === resumeInfo.resumeTitle)
        ) {
          return prevFrameworks; // Return the previous state if duplicate
        }
        return [
          ...prevFrameworks,
          {
            value: resumeInfo.resumeTitle,
            label: resumeInfo.resumeTitle,
          },
        ];
      });
    } catch (error) {
      console.error("Error fetching resume details:", error);
    }
  };

  return (
    <div className="mt-10 ml-10">
      <div>
        <h1 className="text-2xl font-bold  tracking-wider">
          Select your saved resume!
        </h1>
        <p className="text-sm font-semibold text-gray-500 tracking-wider">
          {/* Who has time to tweak their resume every time they apply for a job?
          Let’s face it—your dream role won’t wait while you wrestle with bullet
          points. Create a resume on the go and focus on landing the gig, not
          formatting the doc! */}
          Build Resume In One Click
        </p>
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
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue); // Toggle value
                          setOpen(false);
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
      </div>
    </div>
  );
};

export default page;
