"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { updateExperience } from "@/features/experienceDataSlice";

const ExperienceInput = ({ num }) => {
  const [automatedCheck, setAutomatedCheck] = useState(false);
  const [bulletPoints, setBulletPoints] = useState([""]);
  const [experienceDetail, setExperienceDetail] = useState({});
  const experience = useSelector((state) => state.experienceData.experience);
  const dispatch = useDispatch();

  const handleAutomatedCheck = (e) => {
    setAutomatedCheck(e.target.checked);
  };

  const handleBulletPointChange = (index, e, field) => {
    const newBulletPoints = [...bulletPoints];

    // Ensure the index exists in the bulletPoints array
    if (!newBulletPoints[index]) {
      newBulletPoints[index] = e.target.value; // Initialize with the new bullet point
    } else {
      newBulletPoints[index] = e.target.value; // Update the existing bullet point
    }

    setBulletPoints(newBulletPoints);

    setExperienceDetail((prevDetail) => ({
      ...prevDetail,
      [field]: newBulletPoints,
    }));

    dispatch(updateExperience({ num, field, value: newBulletPoints }));
  };

  const handleAddBulletPoint = () => {
    setBulletPoints([...bulletPoints, ""]);
  };

  const handleRemoveBulletPoints = (index, field) => {
    // Create a new array with the bullet point removed
    const newBulletPoints = bulletPoints.filter((_, i) => i !== index);

    // Update local state
    setBulletPoints(newBulletPoints);

    // Update the field in the experienceDetail state
    setExperienceDetail((prevDetail) => ({
      ...prevDetail,
      [field]: [...newBulletPoints], // Assuming field is an array of bullet points
    }));

    // Dispatch the updated bullet points to Redux store
    dispatch(updateExperience({ num, field, value: newBulletPoints }));
  };

  const onExperienceDetailChange = (e, field) => {
    const value = e.target.value;
    setExperienceDetail((prevDetail) => ({
      ...prevDetail,
      [field]: e.target.value,
    }));
    dispatch(updateExperience({ num, field, value }));
  };

  useEffect(() => {
    console.log(experience);
  }, [experience]);

  return (
    <Accordion className="" type="single" collapsible>
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="text-xs flex justify-between">
          Experience {num + 1}
        </AccordionTrigger>
        <AccordionContent>
          <section className="bg-white">
            <main className="">
              <div className="">
                <form action="#" className="mt-2 grid grid-cols-4 gap-6">
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="CompanyName"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Company Name
                    </label>

                    <input
                      type="text"
                      id="CompanyName"
                      name="CompanyName"
                      placeholder="Company Name"
                      onChange={(e) =>
                        onExperienceDetailChange(e, "companyName")
                      }
                      value={experienceDetail.companyName || ""}
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm "
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="Position"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Position
                    </label>

                    <input
                      type="text"
                      id="Position"
                      name="Position"
                      placeholder="Your Position"
                      onChange={(e) => onExperienceDetailChange(e, "position")}
                      value={experienceDetail.position || ""}
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
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
                      placeholder="Start Date"
                      onChange={(e) => onExperienceDetailChange(e, "startDate")}
                      value={experienceDetail.startDate || ""}
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
                      placeholder="End Date"
                      onChange={(e) => onExperienceDetailChange(e, "endDate")}
                      value={experienceDetail.endDate || ""}
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2 md:col-span-4">
                    <label
                      htmlFor="location"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Location
                    </label>

                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Location"
                      onChange={(e) =>
                        onExperienceDetailChange(e, "companyLocation")
                      }
                      value={experienceDetail.companyLocation || ""}
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-4">
                    <label
                      htmlFor="MarketingAccept"
                      className="flex gap-2 items-center"
                    >
                      <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        checked={automatedCheck}
                        onChange={handleAutomatedCheck}
                        className="size-4 rounded-md border-gray-200 bg-white shadow-sm"
                      />

                      <span className="text-xs text-gray-700">
                        Check this box for automated description generation.
                      </span>
                    </label>
                  </div>

                  {automatedCheck ? (
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
                        placeholder="Add Detail About Your Experience!"
                        onChange={(e) =>
                          onExperienceDetailChange(e, "summaryDescription")
                        }
                        value={experienceDetail.summaryDescription || ""}
                        className="mt-1 p-2 rounded border-gray-400 bg-gray-100 text-sm text-gray-700 shadow-sm w-full"
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  {automatedCheck ? (
                    ""
                  ) : (
                    <>
                      {bulletPoints.map((bulletPoint, index) => (
                        <div
                          className="col-span-2 sm:col-span-2 md:col-span-4"
                          key={index}
                        >
                          <label
                            htmlFor={`description-${index}`}
                            className="block text-xs font-medium text-gray-700"
                          >
                            Bullet Points
                          </label>
                          <input
                            type="text"
                            id={`description-${index}`}
                            name={`description-${index}`}
                            placeholder="Add Detail About Your Experience!"
                            value={bulletPoint}
                            onChange={(e) =>
                              handleBulletPointChange(index, e, "bulletPoint")
                            }
                            className="mt-1 p-2 rounded border-gray-400 bg-gray-100 text-sm text-gray-700 shadow-sm w-full resize-none"
                          />
                          {bulletPoints.length > 1 ? (
                            <button
                              className="text-sm font-medium py-1.5 px-3 border text-white bg-red-500 rounded hover:bg-red-400 mt-2"
                              type="button"
                              onClick={() =>
                                handleRemoveBulletPoints(index, "bulletPoint")
                              }
                            >
                              <IoIosRemoveCircle />
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                      <div className="col-span-4 space-x-4">
                        <button
                          className="text-xs font-medium py-1.5 px-3 border rounded hover:bg-gray-100"
                          type="button"
                          onClick={handleAddBulletPoint}
                        >
                          + Add bullet point
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </main>
          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ExperienceInput;
