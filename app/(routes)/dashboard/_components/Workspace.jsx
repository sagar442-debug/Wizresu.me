import React from "react";
import { AlignJustify } from "lucide-react";
import { Grid2X2 } from "lucide-react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

function Workspace() {
  return (
    <div className="">
      <h2 className="text-4xl font-bold mx-1  tracking-wider">Dashboard</h2>
      <div className="flex justify-between items-center mx-1">
        <h2 className="text-lg font-semibold text-gray-500 tracking-wider">
          Create a new resume
        </h2>
      </div>
      <div className="w-60 h-40">
        <Link href={"/dashboard/create-new-resume"}>
          <Card className="flex items-center border w-full h-full group rounded-2xl mt-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-all">
            <div className="flex items-center group-hover:text-gray-500 mx-auto">
              <span>
                {" "}
                <Plus className="group-hover:text-gray-500" />
              </span>
              <h2 className="text-xl font-medium tracking-wider group-shover:text-gray-500">
                New Resume
              </h2>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default Workspace;
