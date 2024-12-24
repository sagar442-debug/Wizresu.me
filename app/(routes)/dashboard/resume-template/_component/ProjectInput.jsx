"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "@/features/projectDataSlice";

const ProjectInput = ({ val }) => {
  const [automatedCheck, setAutomatedCheck] = useState(false);
  const [bulletPoints, setBulletPoints] = useState([""]);
  const projects = useSelector((state) => state.projectData.projects);
  const dispatch = useDispatch();
  const [projectDetail, setProjectDetail] = useState({});

  const handleAutomatedCheck = (e) => {
    setAutomatedCheck(e.target.checked);
  };

  const handleBulletPointChange = (index, e, field) => {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints[index] = [e.target.value];
    setBulletPoints(newBulletPoints);

    if (!newBulletPoints[index]) {
      newBulletPoints[index] = e.target.value;
    } else {
      newBulletPoints[index] = e.target.value;
    }

    setProjectDetail((prevDetail) => ({
      ...prevDetail,
      [field]: newBulletPoints,
    }));
    dispatch(updateProject({ val, field, value: newBulletPoints }));
  };

  const handleAddBulletPoint = () => {
    setBulletPoints([...bulletPoints, ""]);
  };

  const handleRemoveBulletPoints = (index) => {
    const newBulletPoints = bulletPoints.filter((_, i) => i !== index);
    setBulletPoints(newBulletPoints);

    setProjectDetail((prevDetail) => ({
      ...prevDetail,
      [field]: [...newBulletPoints],
    }));

    dispatch(updateProject({ val, field, value: newBulletPoints }));
  };

  const onProjectDetailChange = (e, field) => {
    const value = e.target.value;

    setProjectDetail((prevDetail) => ({
      ...prevDetail,
      [field]: e.target.value,
    }));
    dispatch(updateProject({ val, field, value }));
  };

  return (
    <Accordion className="" type="single" collapsible>
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="text-xs flex justify-between">
          Project {val + 1}
        </AccordionTrigger>
        <AccordionContent>
          <section className="bg-white">
            <main className="">
              <div className="">
                <form action="#" className="mt-2 grid grid-cols-4 gap-6">
                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="ProjectName"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Project Name
                    </label>

                    <input
                      type="text"
                      id="ProjectName"
                      name="ProjectName"
                      placeholder="Project Name"
                      onChange={(e) => onProjectDetailChange(e, "projectName")}
                      value={projectDetail.projectName || ""}
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm "
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-2">
                    <label
                      htmlFor="Role"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Role
                    </label>

                    <input
                      type="text"
                      id="Role"
                      name="Role"
                      placeholder="Your Role"
                      onChange={(e) => onProjectDetailChange(e, "projectRole")}
                      value={projectDetail.projectRole || ""}
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
                      onChange={(e) => onProjectDetailChange(e, "startDate")}
                      value={projectDetail.startDate || ""}
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
                      onChange={(e) => onProjectDetailChange(e, "endDate")}
                      value={projectDetail.endDate || ""}
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2 md:col-span-4">
                    <label
                      htmlFor="location"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Url (optional)
                    </label>

                    <input
                      type="text"
                      id="url"
                      name="url"
                      placeholder="Add your project link"
                      onChange={(e) => onProjectDetailChange(e, "projectUrl")}
                      value={projectDetail.projectUrl || ""}
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
                        onChange={(e) =>
                          onProjectDetailChange(e, "projectDescription")
                        }
                        value={projectDetail.projectDescription || ""}
                        placeholder="Add Detail About Your Experience!"
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
                              handleBulletPointChange(index, e, "bulletPoints")
                            }
                            className="mt-1 p-2 rounded border-gray-400 bg-gray-100 text-sm text-gray-700 shadow-sm w-full resize-none"
                          />
                          {bulletPoints.length > 1 ? (
                            <button
                              className="text-sm font-medium py-1.5 px-3 border text-white bg-red-500 rounded hover:bg-red-400 mt-2"
                              type="button"
                              onClick={() => handleRemoveBulletPoints(index)}
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

export default ProjectInput;
