import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ResumeCards = () => {
  return (
    <button className="group w-60 h-40">
      <Card className="flex items-center border w-60 h-40  group rounded-2xl mt-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-all">
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
    </button>
  );
};

export default ResumeCards;
