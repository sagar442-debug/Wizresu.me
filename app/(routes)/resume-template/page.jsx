"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaEdit } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import PersonalData from "./_component/PersonalData";
import ExperienceInput from "./_component/ExperienceInput";
import EducationInput from "./_component/EducationInput";
import SkillsInput from "./_component/SkillsInput";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RxCross2 } from "react-icons/rx";
import ProjectInput from "./_component/ProjectInput";
import { MdOutlineEdit } from "react-icons/md";
import DefaultTemplate from "./_component/DefaultTemplate";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Page = () => {
  const [experienceCount, setExperienceCount] = useState([]);
  const [educationCount, setEducationCount] = useState([]);
  const [projectCount, setProjectCount] = useState([]);
  const [resumeTitle, setResumeTitle] = useState("Resume");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setResumeTitle(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (resumeTitle.trim().length < 3) {
      setError("Text must be at least 3 characters long.");
      setResumeTitle("Resume");
      return;
    }
    setIsEditing(false); // Exit edit mode when valid
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  const addProject = () => {
    setProjectCount([...projectCount, ""]);
  };

  const removeProject = (index) => {
    let newProject = projectCount.filter((_, i) => i !== index);
    setProjectCount(newProject);
  };

  const addEducation = () => {
    setEducationCount([...educationCount, ""]);
  };

  const removeEducation = (index) => {
    let newEducation = educationCount.filter((_, i) => i !== index);
    setEducationCount(newEducation);
  };

  const addExperience = () => {
    setExperienceCount([...experienceCount, ""]);
  };

  const removeExperience = (index) => {
    let newExperience = experienceCount.filter((_, i) => i !== index);
    setExperienceCount(newExperience);
  };

  const [view, setView] = useState("edit");

  const onEditTap = () => {
    setView("edit");
  };

  const onTemplatesTap = () => {
    setView("templates");
  };

  return (
    <div className=" flex flex-1 flex-col overflow-y-hidden">
      <header className="border-b px-5">
        <div className="py-3 flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/">create-new-resume</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isEditing ? (
                  <input
                    type="text"
                    value={resumeTitle}
                    onChange={handleChange}
                    onBlur={handleSave}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="border px-2 py-1 text-sm rounded"
                  />
                ) : (
                  <BreadcrumbPage
                    onClick={handleEditClick}
                    className="cursor-pointer hover:underline flex gap-1 items-center"
                  >
                    <MdOutlineEdit />
                    {resumeTitle}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-2">
            <button className="inline-flex items-center gap-2 px-4 py-1.5 font-semibold text-sm border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer">
              Save
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-1.5 font-semibold text-sm border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer">
              Download PDF
            </button>
            <PDFDownloadLink
              document={<DefaultTemplate />} // The document to generate
              fileName="sample-resume.pdf" // The name of the generated file
            >
              {({ loading }) =>
                loading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink>
          </div>
        </div>
      </header>

      <div className="flex">
        <div className="flex flex-col text-sm space-y-5 items-center py-4 px-2 border-r">
          <button
            onClick={onEditTap}
            className={`text-center flex flex-col items-center ${
              view == "edit" && "text-blue-500"
            }`}
          >
            <FaEdit className="text-lg" />
            Edit
          </button>
          <button
            onClick={onTemplatesTap}
            className={`text-center flex flex-col items-center ${
              view == "templates" && "text-blue-500"
            }`}
          >
            <MdOutlineContactPage className="text-lg" />
            Templates
          </button>
        </div>

        {view == "edit" && (
          <div className="w-[30rem] h-[92vh] overflow-y-scroll">
            <div className=" py-4 flex items-center gap-4 shadow border-b">
              <h1 className="flex-1 font-semibold text-center">Content</h1>
            </div>
            <div>
              <PersonalData />
            </div>
            <div>
              <Accordion className="mx-10 " type="single" collapsible>
                <AccordionItem className="border-none" value="item-1">
                  <AccordionTrigger className="text-sm flex justify-between">
                    Experience
                  </AccordionTrigger>
                  <AccordionContent>
                    {experienceCount.map((item, i) => (
                      <div className="px-2" key={i}>
                        <ExperienceInput num={i} />
                        <button
                          className="text-sm font-medium py-1.5 px-3 border text-white bg-red-500 rounded hover:bg-red-400 -mt-4 mb-2"
                          type="button"
                          onClick={() => removeExperience(i)}
                        >
                          <RxCross2 className="text-xs" />
                        </button>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="text-xs font-semibold py-1.5 px-3 border rounded hover:bg-gray-100"
                      onClick={addExperience}
                    >
                      + Add
                    </button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Accordion className="mx-10 " type="single" collapsible>
                <AccordionItem className="border-none" value="item-1">
                  <AccordionTrigger className="text-sm flex justify-between">
                    Education Info
                  </AccordionTrigger>
                  <AccordionContent>
                    {educationCount.map((item, i) => (
                      <div className="px-2" key={i}>
                        <EducationInput val={i} />
                        <button
                          className="text-sm font-medium py-1.5 px-3 border text-white bg-red-500 rounded hover:bg-red-400 -mt-4 mb-2"
                          type="button"
                          onClick={() => removeEducation(i)}
                        >
                          <RxCross2 />
                        </button>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="text-xs font-semibold py-1.5 px-3 border rounded hover:bg-gray-100"
                      onClick={addEducation}
                    >
                      + Add
                    </button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <SkillsInput />
            </div>
            <div>
              <Accordion className="mx-10 " type="single" collapsible>
                <AccordionItem className="border-none" value="item-1">
                  <AccordionTrigger className="text-sm flex justify-between">
                    Projects
                  </AccordionTrigger>
                  <AccordionContent>
                    {projectCount.map((item, i) => (
                      <div className="px-2" key={i}>
                        <ProjectInput val={i} />
                        <button
                          className="text-sm font-medium py-1.5 px-3 border text-white bg-red-500 rounded hover:bg-red-400 -mt-4 mb-2"
                          type="button"
                          onClick={() => removeProject(i)}
                        >
                          <RxCross2 />
                        </button>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="text-xs font-semibold py-1.5 px-3 border rounded hover:bg-gray-100"
                      onClick={addProject}
                    >
                      + Add
                    </button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        )}

        {view == "templates" && (
          <div className="w-[30rem] h-[92vh] overflow-y-scroll">
            <div className=" py-4 flex items-center gap-4 shadow border-b">
              <h1 className="flex-1 font-semibold text-center">Templates</h1>
            </div>
          </div>
        )}
        <div className="flex justify-center  w-full">
          <DefaultTemplate />
        </div>
      </div>
    </div>
  );
};

export default Page;
