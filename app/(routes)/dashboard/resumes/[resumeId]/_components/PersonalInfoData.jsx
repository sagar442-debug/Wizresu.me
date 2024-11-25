"use client";
import { CardTitle } from "@/components/ui/card";
import useStore from "@/store/useStore";
import React from "react";

const PersonalInfoData = () => {
  const setUserFullName = useStore((state) => state.setUserFullName);
  const setUserEmailAddress = useStore((state) => state.setUserEmailAddress);
  const setUserPhoneNumber = useStore((state) => state.setUserPhoneNumber);
  const setUserWebsite = useStore((state) => state.setUserWebsite);
  const setUserAddress = useStore((state) => state.setUserAddress);

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
                onChange={(e) => setUserWebsite(e.target.value)}
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
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PersonalInfoData;
