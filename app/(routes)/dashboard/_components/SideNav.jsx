import Logo from "@/app/(components)/Logo";
import Link from "next/link";
import React from "react";
import { House } from "lucide-react";
import { Blocks } from "lucide-react";
import { History } from "lucide-react";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

function SideNav() {
  return (
    <div className="fixed">
      <div className="w-80 bg-[#f1f1f1] h-[100vh] shadow-2xl flex flex-col">
        <Link href={"/"} className="py-4 px-10">
          <Logo />
          <hr className=" mt-2 border " />
        </Link>
        <div className="px-10 ">
          <h1 className="text-2xl font-light px-5 text-[#363636] pt-5 ">
            Dashboard
          </h1>
          <div className="my-2 flex flex-col">
            <Link
              href={"/dashboard"}
              className="flex gap-3 hover:shadow-md transition-all p-4 font-medium items-center text-[#555] hover:bg-[#dfdfdf] rounded"
            >
              <House width={30} className="" />
              <span className="text-lg">Home</span>
            </Link>
            <Link
              href={"/dashboard/resumes"}
              className="flex gap-3 hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#dfdfdf] rounded"
            >
              <Blocks width={30} className="" />
              <span className="text-lg">Resumes</span>
            </Link>
            <Link
              href={"/dashboard"}
              className="flex gap-3  hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#dfdfdf] rounded"
            >
              <History width={30} className="" />
              <span className="text-lg">History</span>
            </Link>
          </div>
        </div>
        <div className="absolute left-3  bottom-10 w-72 flex gap-1 items-center cursor-pointer">
          <ChartNoAxesColumnIncreasing color="#4e2ec2" />
          <h1 className="underline text-[#4e2ec2] text-sm ">
            Upgrade for more premium features
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
