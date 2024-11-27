"use client";
import { CardTitle } from "@/components/ui/card";
import useStore from "@/store/useStore";
import { Wand } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Settings } from "lucide-react";

const apiUrl = process.env.NEXT_BACKEND_URL;

const PersonalInfoData = ({
  fullName,
  emailAddress,
  phoneNumber,
  address,
  website,
  objectiveText,
  save,
}) => {
  const userFullName = useStore((state) => state.userFullName);
  const userEmailAddress = useStore((state) => state.userEmailAddress);
  const userPhoneNumber = useStore((state) => state.userPhoneNumber);
  const userWebsite = useStore((state) => state.userWebsite);
  const userAddress = useStore((state) => state.userAddress);

  const setUserFullName = useStore((state) => state.setUserFullName);
  const setUserEmailAddress = useStore((state) => state.setUserEmailAddress);
  const setUserPhoneNumber = useStore((state) => state.setUserPhoneNumber);
  const setUserWebsite = useStore((state) => state.setUserWebsite);
  const setUserAddress = useStore((state) => state.setUserAddress);
  const objective = useStore((state) => state.objective);
  const setObjective = useStore((state) => state.setObjective);

  useEffect(() => {
    setUserFullName(fullName);
    setUserEmailAddress(emailAddress);
    setUserPhoneNumber(phoneNumber);
    setUserAddress(address);
    setUserWebsite(website);
    setObjective(objectiveText);
  }, []);

  return (
    <div>
      <CardTitle className="mb-4">Personal Details</CardTitle>
      <section className="">
        <form className="space-y-4">
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
                onChange={(e) => setUserFullName(e.target.value)}
                value={userFullName}
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
                onChange={(e) => setUserEmailAddress(e.target.value)}
                value={userEmailAddress}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm no-spinner"
                placeholder="Phone Number"
                type="text"
                id="phone"
                onChange={(e) => setUserPhoneNumber(e.target.value)}
                value={userPhoneNumber}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">
                Website
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Website"
                type="tel"
                id="phone"
                onChange={(e) => setUserWebsite(e.target.value)}
                value={userWebsite}
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
                onChange={(e) => setUserAddress(e.target.value)}
                value={userAddress}
              />
            </div>
            <div></div>
            <div className="col-span-2">
              <label className="sr-only" htmlFor="phone">
                Objective
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Objective"
                type="tel"
                id="phone"
                onChange={(e) => setObjective(e.target.value)}
                value={objective}
              />
              <button className="bg-[#3b82f6]  text-sm flex gap-2 items-center duration-100 transition-all group p-2 text-white mt-2  hover:bg-[#5b9aff]">
                <Settings className="group-hover:rotate-90 duration-200" />
                <span>Regenerate Objective</span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PersonalInfoData;
