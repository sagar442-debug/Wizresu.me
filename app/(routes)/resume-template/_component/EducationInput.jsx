import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EducationInput = () => {
  return (
    <Accordion className="mx-10 " type="single" collapsible>
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="text-sm flex justify-between">
          Education Info
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
                      placeholder="End Date"
                      className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2 md:col-span-4">
                    <label
                      htmlFor="Location"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Location
                    </label>

                    <input
                      type="text"
                      id="Location"
                      name="Location"
                      placeholder="Location"
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
                      placeholder="Short Description"
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
