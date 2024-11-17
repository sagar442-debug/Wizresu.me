import React from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Card } from "@/components/ui/card";
const LoadingResumeCard = () => {
  return (
    <button className="w-52 h-36 text-gray-600 opacity-25 animate-pulse">
      <Card className="flex items-center border w-full h-full group rounded-2xl mt-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-all">
        <div className="flex items-center group-hover:text-gray-500 mx-auto">
          <span>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          </span>
          <h2 className="text-xl font-medium tracking-wider group-shover:text-gray-500 ">
            Loading...
          </h2>
        </div>
      </Card>
    </button>
  );
};

export default LoadingResumeCard;
