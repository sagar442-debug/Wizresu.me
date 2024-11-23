"use client";
import Logo from "@/app/(components)/Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { House } from "lucide-react";
import { Blocks } from "lucide-react";
import { History } from "lucide-react";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { Wand } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import Image from "next/image";
import { CircleUser } from "lucide-react";
import { ScanText } from "lucide-react";

import { ReloadIcon } from "@radix-ui/react-icons";

function SideNav() {
  const { signOut } = useClerk();
  const params = useParams();
  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();
  const [lgScreen, setLgScreen] = useState(false);
  const [route, setRoute] = useState("");
  useEffect(() => {
    setRoute("");
  }, [pathname]);

  const onResize = () => {
    setLgScreen(window.innerWidth <= 1440);
  };
  const onResizeBack = () => {
    setLgScreen(false);
  };

  const signningOut = () => {
    setRoute("signout");
    signOut({ redirectUrl: "/" });
  };

  const onRouting = (routeName) => {
    if (pathname !== `${routeName}`) {
      setRoute(routeName);
      console.log(routeName);
    } else {
      setRoute("");
    }
  };

  return (
    <div className="fixed z-50">
      <div
        className={`${
          lgScreen ? "w-16" : "w-60 lg:w-64"
        } transition-all duration-500   xl:w-72 bg-[#f1f1f1] h-[100vh] shadow-2xl flex flex-col`}
      >
        <div
          className={`${
            lgScreen ? "gap-0 flex-col mt-2 space-y-2" : "gap-4 py-4"
          } flex justify-center items-center  `}
        >
          <button
            className={`${!lgScreen ? "hidden" : ""}`}
            onClick={onResizeBack}
          >
            <GiHamburgerMenu className="text-xl mt-1 text-[#555]" />
          </button>
          <Link className="flex gap-2 items-center" href={"/dashboard"}>
            <Logo />
            <h1
              className={`${
                lgScreen ? "hidden" : ""
              } font-bold sm:text-xl xl:text-2xl lg:text-xl text-[#2a2663]`}
            >
              WizResu.me
            </h1>
          </Link>
          <div className="lg:block xl:hidden ">
            <button
              className={`${lgScreen ? "hidden" : ""}`}
              onClick={onResize}
            >
              <RxCross1 className="text-xl mt-1 text-[#2a2663]" />
            </button>
          </div>
        </div>

        <div
          className={`${
            lgScreen ? "lg:px-2" : "lg:px-10"
          } px-6 sm:px-8 lg:px-10 xl:px-10 `}
        >
          <div
            className={`${lgScreen ? "items-center" : ""} my-2 flex flex-col`}
          >
            <Link
              href={"/dashboard"}
              onClick={() => onRouting("/dashboard")}
              className={`${
                lgScreen ? "p-2 lg:w-10" : "lg:p-4 "
              } relative flex lg:gap-0 xl:gap-3 p-2 sm:p-2 hover:shadow-md transition-all xl:p-4 font-medium items-center hover:bg-blue-400 rounded bg-blue-500 text-white overflow-hidden`}
            >
              <Wand className="animate-pulse lg:w-8" />

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                }  lg:text-base xl:text-lg font-semibold`}
              >
                Quick Build
              </span>

              {/* Shine effect */}
              <span className="shine-effect"></span>
            </Link>
            <Link
              href={"/dashboard"}
              onClick={() => onRouting("/dashboard")}
              className={`flex gap-3 hover:shadow-md transition-all p-4 ${
                pathname.startsWith("/dashboard/create-new-resume")
                  ? "font-bold"
                  : "font-medium"
              } items-center text-[#555] hover:bg-[#dfdfdf] rounded`}
            >
              {route == "dashboard" ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <House width={30} className="" />
              )}

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                } lg:text-base xl:text-xl`}
              >
                Home
              </span>
            </Link>
            <Link
              onClick={() => onRouting("/dashboard/resumes")}
              href={"/dashboard/resumes"}
              className="flex gap-3 hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#dfdfdf] rounded"
            >
              {route == "/dashboard/resumes" ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Blocks width={30} className="" />
              )}

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                } lg:text-base xl:text-xl`}
              >
                Resumes
              </span>
            </Link>
            <Link
              href={"/dashboard/ats"}
              className="flex gap-3  hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#dfdfdf] rounded"
            >
              <ScanText width={30} className="" />
              <span
                className={`${
                  lgScreen ? "hidden" : ""
                } lg:text-base xl:text-xl`}
              >
                ATS
              </span>
            </Link>
            <Link
              href={"/dashboard/user-profile"}
              className="flex gap-3  hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#dfdfdf] rounded"
            >
              {/* <CircleUser width={24} height={30} /> */}
              {user ? (
                <Image
                  className="rounded-full h-[30px] w-[30px] p-0 "
                  height={30}
                  width={30}
                  src={user?.imageUrl}
                  alt="profile-picture"
                />
              ) : (
                <CircleUser width={24} height={30} />
              )}

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                } lg:text-base xl:text-xl`}
              >
                Profile
              </span>
            </Link>

            <button
              onClick={() => signningOut()}
              className="flex gap-3 hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#dfdfdf] rounded"
            >
              {route == "signout" ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <LogOut width={32} />
              )}

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                } lg:text-base xl:text-xl`}
              >
                Sign Out
              </span>
            </button>
          </div>
        </div>
        <div
          className={`absolute ${
            lgScreen ? "lg:left-6" : "lg:left-4"
          } xl:left-3 bottom-10 lg:w-60 xl:w-60 flex gap-1 items-center cursor-pointer`}
        >
          <ChartNoAxesColumnIncreasing color="#4e2ec2" />
          <h1
            className={`${
              lgScreen ? "hidden" : ""
            } transition-all duration-500 underline text-[#4e2ec2] text-sm `}
          >
            Upgrade for more premium features
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SideNav;

export function smallScreenNav() {
  const pathname = usePathname();
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
            <SignOutButton />
          </div>
        </div>
        <div className="absolute left-3  bottom-10 lg:w-60 xl:w-60 flex gap-1 items-center cursor-pointer">
          <ChartNoAxesColumnIncreasing color="#4e2ec2" />
          <h1 className="underline text-[#4e2ec2] text-[8px] ">
            Upgrade for more premium features
          </h1>
        </div>
      </div>
    </div>
  );
}
