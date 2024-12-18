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

const Page = () => {
  return (
    <div className="px-5">
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
        <div className="flex flex-col text-sm space-y-5 items-center py-4 px-2 border-r h-full">
          <button className="text-center flex flex-col items-center">
            <FaEdit className="text-lg" />
            Edit
          </button>
          <button className="text-center flex flex-col items-center">
            <MdOutlineContactPage className="text-lg" />
            Templates
          </button>
        </div>
        <div>
          <div className="px-6 py-4 flex items-center gap-1 shadow border-b">
            <h1 className="flex-1 font-semibold">Content</h1>
            <button className="flex items-center rounded text-blue-500 text-sm font-medium px-2 py-1">
              Collapse All
            </button>
          </div>
          <div class="py-2">
            <div class="flex gap-1 items-center h-12 focus:outline-none">
              <div class="flex min-w-0 items-center flex-1 leading-none font-medium text-base">
                Personal Information
              </div>
              <div class="flex-none"></div>
              <button class="hover:bg-gray-200 flex-none rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
