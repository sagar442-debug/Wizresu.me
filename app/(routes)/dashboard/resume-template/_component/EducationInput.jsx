"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDispatch, useSelector } from "react-redux";
import {
  addEducation,
  removeEducation,
  educationChange,
} from "@/features/educationSlice";

const EducationInput = ({ val }) => {
  const education = useSelector((state) => state.educationData.education);
  const dispatch = useDispatch();

  const handleEducationChange = (e, field) => {
    if (education[val]) {
      dispatch(educationChange({ val, field, value: e.target.value }));
    }
    console.log(education);
  };

  return (
    <Accordion className="" type="single" collapsible>
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="text-xs flex justify-between">
          Education Info {val + 1}
        </AccordionTrigger>
        <AccordionContent>
          <section className="bg-white">
            <main className="">
              <div className="">
                <form action="#" className="mt-2 grid grid-cols-4 gap-6">
                  <div className="col-span-2 sm:col-span-2 md:col-span-4">
                    <label
                      htmlFor="Institution Name"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Institution Name
                    </label>

                    <input
                      type="text"
                      id="institutionName"
                      name="institutionName"
                      value={education[val]?.institution || ""}
                      onChange={(e) => handleEducationChange(e, "institution")}
                      placeholder="Institution Name"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm "
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="startDate"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Start Date
                    </label>

                    <input
                      type="text"
                      id="startDate"
                      name="startDate"
                      value={education[val]?.startYear || ""}
                      onChange={(e) => handleEducationChange(e, "startYear")}
                      placeholder="Start Date"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="endDate"
                      className="block text-xs font-medium text-gray-700"
                    >
                      End Date
                    </label>

                    <input
                      type="text"
                      id="endDate"
                      name="endDate"
                      value={education[val]?.endYear || ""}
                      onChange={(e) => handleEducationChange(e, "endYear")}
                      placeholder="End Date"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2 md:col-span-4">
                    <label
                      htmlFor="degree"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Degree
                    </label>

                    <input
                      type="text"
                      id="degree"
                      name="degree"
                      value={education[val]?.degree || ""}
                      onChange={(e) => handleEducationChange(e, "degree")}
                      placeholder="degree"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2 md:col-span-4">
                    <label
                      htmlFor="description"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Description
                    </label>

                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Add relevant coursework, projects, or thesis"
                      value={education[val]?.summary || ""}
                      onChange={(e) => handleEducationChange(e, "summary")}
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
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

export default EducationInput;
