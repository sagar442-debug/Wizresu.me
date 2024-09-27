import React from "react";
import { AlignJustify } from "lucide-react";
import { Grid2X2 } from "lucide-react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

function Workspace() {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold mx-1 ">Hello Sagar</h2>
      <div className="flex justify-between items-center mt-4 mx-1">
        <h2 className="font-semibold text-xl">Your Workspace</h2>
        <div className="flex gap-2">
          <AlignJustify className="hover:bg-[#dfdfdf] rounded cursor-pointer transition-all" />
          <Grid2X2 className="hover:bg-[#dfdfdf] rounded cursor-pointer transition-all" />
        </div>
      </div>
      <Link href={"/dashboard/create-new-resume"}>
        <Card className="flex items-center border w-60 h-40 rounded-2xl mt-10 shadow-lg cursor-pointer hover:bg-gray-50 transition-all">
          <div className="flex items-center mx-auto">
            <span>
              {" "}
              <Plus />
            </span>
            <h2 className="text-xl font-medium">New Resume</h2>
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default Workspace;
