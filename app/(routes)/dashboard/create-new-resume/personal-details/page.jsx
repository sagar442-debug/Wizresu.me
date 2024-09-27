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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IoAddCircleOutline } from "react-icons/io5";

const Page = () => {
  const jobDescription = useStore((state) => state.jobDescription);
  const jobTitle = useStore((state) => state.jobTitle);
  const [secondInstitution, setSecondInstitution] = useState(false);
  const previousPage = useStore((state) => state.previousPage);

  useEffect(() => {
    console.log(previousPage);
  }, []);

  return (
    <div className="rounded min-w-[40rem] min-h-[80vh]">
      <Card>
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="">
            <form action="#" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Full Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Full Name"
                    type="text"
                    id="full-name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm no-spinner"
                    placeholder="Phone Number"
                    type="number"
                    id="phone"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Wesbite
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Website"
                    type="tel"
                    id="phone"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Address
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Address"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
            </form>
          </section>
          <section className="mt-4">
            <form action="#" className="space-y-4">
              <CardTitle>Education</CardTitle>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Degree Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Degree Name"
                    type="text"
                    id="phone"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Institution Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Institution Name"
                    type="text"
                    id="phone"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Completion Date
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Completion Date"
                    type="text"
                    id="phone"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Short Description
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Short Description"
                    type="text"
                    id="phone"
                  />
                </div>
              </div>
              {!secondInstitution && (
                <Button
                  onClick={() => setSecondInstitution(true)}
                  className="hover:bg-gray-100 gap-2"
                >
                  <IoAddCircleOutline className="text-lg" />
                  <span>Add More</span>
                </Button>
              )}
            </form>
          </section>
          <section className={`mt-4 ${secondInstitution ? "" : "hidden"}`}>
            <form action="#" className="space-y-4">
              <CardTitle>Second Education</CardTitle>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Degree Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Degree Name"
                    type="text"
                    id="phone"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Institution Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Institution Name"
                    type="text"
                    id="phone"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Completion Date
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Completion Date"
                    type="text"
                    id="phone"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Short Description
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Short Description"
                    type="text"
                    id="phone"
                  />
                </div>
              </div>
            </form>
            <Button
              onClick={() => setSecondInstitution(false)}
              className="bg-red-600 hover:bg-red-700 text-white gap-2 mt-2"
            >
              <IoAddCircleOutline className="text-lg" />
              <span>Discard</span>
            </Button>
          </section>
          <section className="mt-4">
            <form action="#" className="space-y-4">
              <CardTitle>Languages</CardTitle>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Language 1
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Language 1"
                    type="text"
                    id="full-name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Expertise %
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Expertitse %"
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Language 2
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Language 2"
                    type="text"
                    id="full-name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Expertise %
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Expertitse %"
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Language 3
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Language 3"
                    type="text"
                    id="full-name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Expertise %
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Expertitse %"
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Language 3
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Language 3"
                    type="text"
                    id="full-name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Expertise %
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Expertitse %"
                    type="email"
                    id="email"
                  />
                </div>
              </div>
            </form>
          </section>
        </CardContent>
        <CardFooter>
          <Link href="/dashboard/create-new-resume/personal-detail">
            <Button
              className=" hover:bg-blue-400 rounded hover:text-white shadow border "
              variant="ghost"
            >
              Proceed
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
