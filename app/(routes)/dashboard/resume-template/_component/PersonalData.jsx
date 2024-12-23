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

  useEffect(() => {
    handleNameChange();
  }, []);

  const handleNameChange = (e) => {
    dispatch(updateField({ field: "firstName", value: "Sagar" }));
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
                      First Name
                    </label>

                    <input
                      type="text"
                      id="FirstName"
                      name="first_name"
                      placeholder="First Name"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm "
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="LastName"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      name="last_name"
                      placeholder="Last Name"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
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
                  <div className="col-span-2 sm:col-span-2">
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
                  </div>
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
