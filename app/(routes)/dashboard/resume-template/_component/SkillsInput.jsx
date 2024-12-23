"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoIosRemoveCircle } from "react-icons/io";

const SkillsInput = () => {
  const [totalSkills, setTotalSkills] = useState([""]);

  const onSkillChange = (e, index) => {
    let newSkillTitle = [...totalSkills];
    newSkillTitle[index] = [e.target.value];
    setTotalSkills(newSkillTitle);
  };

  const onAddSkill = () => {
    setTotalSkills([...totalSkills, ""]);
  };

  const removeSkill = (index) => {
    const newSkills = totalSkills.filter((_, i) => i !== index);
    setTotalSkills(newSkills);
  };

  return (
    <Accordion className="mx-10 " type="single" collapsible>
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="text-sm flex justify-between">
          Skills
        </AccordionTrigger>
        <AccordionContent>
          <section className="bg-white">
            <main className="">
              <div className="">
                <form className="">
                  {totalSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="mt-2 grid grid-cols-4 gap-2 items-end"
                    >
                      <div className="col-span-2 sm:col-span-2 md:col-span-1">
                        <label
                          htmlFor="Institution Name"
                          className="block text-xs font-medium text-gray-700"
                        >
                          Skills Title
                        </label>
                        <input
                          type="text"
                          id="skill"
                          name="skill"
                          onChange={() => onSkillChange(index)}
                          placeholder="Tools:"
                          className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm "
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-2 md:col-span-2">
                        <label
                          htmlFor="Institution Name"
                          className="block text-xs font-medium text-gray-700"
                        >
                          Skills
                        </label>
                        <input
                          type="text"
                          id="skill"
                          name="skill"
                          placeholder="Git, MS Word, MS Excel, MS Project"
                          className="mt-1 p-2 w-full rounded border-gray-400  bg-gray-100 text-sm text-gray-700 shadow-sm "
                        />
                      </div>
                      <div className="col-span-1">
                        <button
                          className="text-sm mt-2 py-[0.7rem] px-3 border text-white bg-red-500  rounded hover:bg-red-400"
                          type="button"
                          onClick={() => removeSkill(index)}
                        >
                          <IoIosRemoveCircle />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="col-span-4">
                    <button
                      className="text-sm mt-2 py-1.5 px-3 border rounded hover:bg-gray-100"
                      type="button"
                      onClick={onAddSkill}
                    >
                      + Add Skill
                    </button>
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

export default SkillsInput;
