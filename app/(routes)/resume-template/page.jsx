import React from "react";
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

const Page = () => {
  return (
    <div className="px-5 flex flex-1 flex-col overflow-y-hidden">
      <header className="py-3 flex items-center justify-between border-b">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
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
        </div>
      </header>

      <div className="flex">
        <div className="flex flex-col text-sm space-y-5 items-center py-4 px-2 border-r">
          <button className="text-center flex flex-col items-center">
            <FaEdit className="text-lg" />
            Edit
          </button>
          <button className="text-center flex flex-col items-center">
            <MdOutlineContactPage className="text-lg" />
            Templates
          </button>
        </div>
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
                  <ExperienceInput />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <EducationInput />
          </div>
          <div>
            <SkillsInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
