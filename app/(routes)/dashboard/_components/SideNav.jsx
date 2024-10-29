"use client";
import Logo from "@/app/(components)/Logo";
import Link from "next/link";
import React from "react";
import { House } from "lucide-react";
import { Blocks } from "lucide-react";
import { History } from "lucide-react";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { Wand } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

function SideNav() {
  const params = useParams();
  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="fixed">
      <div className="lg:w-64 xl:w-80 bg-[#f1f1f1] h-[100vh] shadow-2xl flex flex-col">
        <Link href={"/dashboard"} className="py-4 px-10">
          <Logo />
          <hr className=" mt-2 border " />
        </Link>
        <div className="px-10 ">
          <div className="my-2 flex flex-col">
            <Link
              href={"/dashboard"}
              className="relative flex lg:gap-1 xl:gap-3 hover:shadow-md transition-all p-4 font-medium items-center hover:bg-blue-400 rounded bg-blue-500 text-white overflow-hidden"
            >
              <Wand width={30} className="animate-pulse lg:w-8" />
              <span className="lg:text-base xl:text-lg font-semibold">
                Quick Build
              </span>

              {/* Shine effect */}
              <span className="shine-effect"></span>
            </Link>
            <Link
              href={"/dashboard"}
              className={`flex gap-3 hover:shadow-md transition-all p-4 ${
                pathname.startsWith("/dashboard/create-new-resume")
                  ? "font-bold"
                  : "font-medium"
              } items-center text-[#555] hover:bg-[#dfdfdf] rounded`}
            >
              <House width={30} className="" />
              <span className="lg:text-base xl:text-xl">Home</span>
            </Link>
            <Link
              href={"/dashboard/resumes"}
              className="flex gap-3 hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#dfdfdf] rounded"
            >
              <Blocks width={30} className="" />
              <span className="lg:text-base xl:text-xl">Resumes</span>
            </Link>
            <Link
              href={"/dashboard"}
              className="flex gap-3  hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#dfdfdf] rounded"
            >
              <History width={30} className="" />
              <span className="lg:text-base xl:text-xl">History</span>
            </Link>
          </div>
        </div>
        <div className="absolute left-3  bottom-10 lg:w-60 xl:w-72 flex gap-1 items-center cursor-pointer">
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
