"use client";
import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/features/personalDataSlice";

const PersonalData = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.personalData.firstName);
  const emailAddress = useSelector((state) => state.personalData.emailAddress);
  const linkedInProfile = useSelector(
    (state) => state.personalData.linkedInProfile
  );
  const phoneNumber = useSelector((state) => state.personalData.phoneNumber);
  const portfolioWebsite = useSelector(
    (state) => state.personalData.portfolioWebsite
  );
  const githubProfile = useSelector(
    (state) => state.personalData.githubProfile
  );
  const additionalLink = useSelector(
    (state) => state.personalData.additionalLink
  );

  const handlePersonalDetail = (e, field) => {
    dispatch(updateField({ field, value: e.target.value }));
  };

  return (
    <Accordion className="mx-10 " type="single" collapsible>
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="text-sm flex justify-between">
          Personal Info
        </AccordionTrigger>
        <AccordionContent>
          <section className="bg-white">
            <main className="">
              <div className="">
                <form action="#" className="mt-2 grid grid-cols-4 gap-6">
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="FirstName"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      onChange={(e) => handlePersonalDetail(e, "firstName")}
                      value={firstName}
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm "
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={(e) => handlePersonalDetail(e, "emailAddress")}
                      value={emailAddress}
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="linkedIn"
                      className="block text-xs font-medium text-gray-700"
                    >
                      LinkedIn Profile
                    </label>

                    <input
                      type="text"
                      id="linkedIn"
                      name="linkedIn"
                      onChange={(e) =>
                        handlePersonalDetail(e, "linkedInProfile")
                      }
                      value={linkedInProfile}
                      placeholder="LinkedIn Profile (if any)"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="phone_number"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      onChange={(e) => handlePersonalDetail(e, "phoneNumber")}
                      value={phoneNumber}
                      placeholder="Phone Number (if any)"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="Portfolio_Website"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Portfolio Website
                    </label>

                    <input
                      type="text"
                      id="portfolio"
                      name="portfolio"
                      onChange={(e) =>
                        handlePersonalDetail(e, "portfolioWebsite")
                      }
                      value={portfolioWebsite}
                      placeholder="Portfolio Website (if any)"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="Github_Profile"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Github Profile
                    </label>

                    <input
                      type="text"
                      id="portfolio"
                      name="portfolio"
                      placeholder="Github Profile (if any)"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  {/* <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="Additional_Link"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Additional Link
                    </label>

                    <input
                      type="text"
                      id="additional_link"
                      name="additional_link"
                      placeholder="Additional Link"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2 md:col-span-4">
                    <label
                      htmlFor="Additional_Link"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Summary
                    </label>

                    <textarea
                      type="text"
                      id="additional_link"
                      name="additional_link"
                      placeholder="Add a personal summary or you can leave for automatic generation!"
                      className="mt-1 p-2 rounded border-gray-400 bg-gray-100 text-sm text-gray-700 shadow-sm w-full"
                    />
                  </div> */}
                </form>
              </div>
            </main>
          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PersonalData;
