import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { VscDebugRestart } from "react-icons/vsc";

const ResumeCards = () => {
  return (
    <button className="relative group flex md:items-center md:justify-center">
      <div className="absolute z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-xl font-semibold tracking-widest">
        <div className="flex gap-2 items-center ">
          <span className="transform transition-transform duration-500 delay-100 group-hover:-rotate-90">
            <VscDebugRestart />
          </span>
          <h1>Software</h1>
        </div>
      </div>
      <div className="group w-60 h-40">
        <Card className="flex items-center border w-60 h-40  group rounded-2xl mt-2 shadow-lg cursor-pointer  transition-all">
          <div className="flex justify-center w-full ">
            <Image
              src={
                "https://cdn-blog.novoresume.com/articles/modern-resume-templates/modern-resume-templates.png"
              }
              height={400}
              width={250}
              className="h-36 w-24 group-hover:blur-xs duration-200"
            />
          </div>
        </Card>
      </div>
    </button>
  );
};

export default ResumeCards;
