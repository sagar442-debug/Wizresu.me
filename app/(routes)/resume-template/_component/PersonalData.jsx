import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PersonalData = () => {
  return (
    <Accordion className="mx-10 " type="single" collapsible>
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="text-md flex justify-between">
          Personal Info
        </AccordionTrigger>
        <AccordionContent>
          <section class="bg-white">
            <main class="">
              <div class="">
                <form action="#" class="mt-2 grid grid-cols-4 gap-6">
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="FirstName"
                      class="block text-xs font-medium text-gray-700"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      id="FirstName"
                      name="first_name"
                      placeholder="First Name"
                      class="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm "
                    />
                  </div>

                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="LastName"
                      class="block text-xs font-medium text-gray-700"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      name="last_name"
                      placeholder="Last Name"
                      class="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="email"
                      class="block text-xs font-medium text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      class="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="linkedIn"
                      class="block text-xs font-medium text-gray-700"
                    >
                      LinkedIn Profile
                    </label>

                    <input
                      type="text"
                      id="linkedIn"
                      name="linkedIn"
                      placeholder="LinkedIn Profile (if any)"
                      class="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="phone_number"
                      class="block text-xs font-medium text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      placeholder="Phone Number (if any)"
                      class="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="Portfolio_Website"
                      class="block text-xs font-medium text-gray-700"
                    >
                      Portfolio Website
                    </label>

                    <input
                      type="text"
                      id="portfolio"
                      name="portfolio"
                      placeholder="Portfolio Website (if any)"
                      class="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="Github_Profile"
                      class="block text-xs font-medium text-gray-700"
                    >
                      Github Profile
                    </label>

                    <input
                      type="text"
                      id="portfolio"
                      name="portfolio"
                      placeholder="Github Profile (if any)"
                      class="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2">
                    <label
                      for="Additional_Link"
                      class="block text-xs font-medium text-gray-700"
                    >
                      Additional Link
                    </label>

                    <input
                      type="text"
                      id="additional_link"
                      name="additional_link"
                      placeholder="Additional Link"
                      class="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                  <div class="col-span-2 sm:col-span-2 md:col-span-4">
                    <label
                      for="Additional_Link"
                      class="block text-xs font-medium text-gray-700"
                    >
                      Summary
                    </label>

                    <textarea
                      type="text"
                      id="additional_link"
                      name="additional_link"
                      placeholder="Add a personal summary or you can leave for automatic generation!"
                      class="mt-1 p-2 rounded border-gray-400 bg-gray-100 text-sm text-gray-700 shadow-sm w-full"
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
