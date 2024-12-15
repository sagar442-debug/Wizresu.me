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

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
function SideNav() {
  const { signOut } = useClerk();
  const params = useParams();
  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();
  const [lgScreen, setLgScreen] = useState(false);
  const [premium, setPremium] = useState(false);
  const [route, setRoute] = useState("");
  const [quickBuild, setQuickBuild] = useState(false);
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
    } else {
      setRoute("");
    }
  };

  const onQuickBuild = (routeName) => {
    setQuickBuild(true);
    if (pathname !== `${routeName}`) {
      setRoute(routeName);
    } else {
      setRoute("");
    }
  };

  useEffect(() => {
    setQuickBuild(false);
  });

  useEffect(() => {
    fetchUserDetails();
  }, [isSignedIn]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(
        `${apiUrl}users/get-user?clerkId=${encodeURIComponent(user.id)}`
      );
      const userData = await response.json();
      const subscription = userData.userData.subscription;
      if (
        subscription == process.env.NEXT_PUBLIC_PREMIUM_PRICE ||
        subscription == process.env.NEXT_PUBLIC_PROFESSIONAL_PRICE
      ) {
        setPremium(true);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <div className="fixed z-50">
      <div
        className={`${
          lgScreen ? "w-16" : "w-60 lg:w-64"
        } transition-all duration-500 xl:w-72 bg-[#272b46] h-[100vh] shadow-gray-950 shadow-md flex flex-col `}
      >
        <div
          className={`${
            lgScreen ? "gap-0 flex-col mt-2 space-y-2" : "gap-4 py-4"
          } flex justify-center items-center  `}
        >
          <button
            className={`${!lgScreen ? "hidden" : ""} group`}
            onClick={onResizeBack}
          >
            <GiHamburgerMenu className="text-xl mt-1 text-white " />
          </button>
          <Link className="flex gap-2 items-center" href={"/dashboard"}>
            <Logo />
            <h1
              className={`${
                lgScreen ? "hidden" : ""
              } font-bold sm:text-xl xl:text-2xl lg:text-xl text-[#fff]`}
            >
              WizResu.me
            </h1>
          </Link>
          <div className="lg:block xl:hidden ">
            <button
              className={`${lgScreen ? "hidden" : ""}`}
              onClick={onResize}
            >
              <RxCross1 className="text-xl mt-1 text-white" />
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
              href={"/dashboard/quick-build"}
              onClick={() => onQuickBuild("/dashboard/quick-build")}
              className={`${
                lgScreen ? "p-2 lg:w-10" : "lg:p-4 "
              } relative flex cursor-pointer gap-2  lg:gap-0 xl:gap-2 p-2 sm:p-2 shadow-lg transition-all xl:p-4 font-medium items-center hover:bg-blue-400 rounded bg-blue-500 text-white overflow-hidden`}
            >
              {quickBuild ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin group-hover:text-black  text-white" />
              ) : (
                <Wand className="animate-pulse lg:w-8" />
              )}

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                }  lg:text-base xl:text-lg font-semibold tracking-wider`}
              >
                Quick Build
              </span>

              {/* Shine effect */}
              <span className="shine-effect"></span>
            </Link>
            <Link
              href={"/dashboard"}
              onClick={() => onRouting("/dashboard")}
              className={`flex gap-3 hover:shadow-md transition-all p-4 group ${
                pathname.startsWith("/dashboard/create-new-resume")
                  ? "font-bold"
                  : "font-medium"
              } items-center text-[#555] hover:bg-[#fff] hover:text-black rounded`}
            >
              {route == "/dashboard" ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin group-hover:text-black  text-white" />
              ) : (
                <House
                  width={30}
                  className="text-white group-hover:text-black"
                />
              )}

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                } lg:text-base xl:text-lg text-white group-hover:text-black  tracking-wider`}
              >
                Home
              </span>
            </Link>
            <Link
              onClick={() => onRouting("/dashboard/resumes")}
              href={"/dashboard/resumes"}
              className="flex gap-3 hover:shadow-md group transition-all font-medium p-4 items-center text-[#555] hover:bg-[#fff] rounded"
            >
              {route == "/dashboard/resumes" ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin group-hover:text-black  text-white" />
              ) : (
                <Blocks
                  width={30}
                  className="text-white group-hover:text-black"
                />
              )}

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                } lg:text-base xl:text-lg text-white group-hover:text-black tracking-wider`}
              >
                Resumes
              </span>
            </Link>
            <Link
              onClick={() => onRouting("/dashboard/ats")}
              href={"/dashboard/ats"}
              className="flex gap-3 group hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#fff] rounded"
            >
              {route == "/dashboard/ats" ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin group-hover:text-black  text-white" />
              ) : (
                <ScanText
                  width={30}
                  className="text-white group-hover:text-black"
                />
              )}

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                } lg:text-base xl:text-lg text-white group-hover:text-black tracking-wider`}
              >
                ATS
              </span>

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                } lg:text-base xl:text-lg`}
              ></span>
            </Link>
            <Link
              onClick={() => onRouting("/dashboard/user-profile")}
              href={"/dashboard/user-profile"}
              className="flex gap-3 group hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#fff] rounded"
            >
              {route == "/dashboard/user-profile" ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin group-hover:text-black  text-white" />
              ) : (
                <div className="flex gap-3 items-center w-[30px]">
                  {user ? (
                    <Image
                      className="rounded-full h-[30px] w-[30px] p-0"
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
                    } lg:text-base xl:text-lg text-white group-hover:text-black tracking-wider`}
                  >
                    Profile
                  </span>
                </div>
              )}
            </Link>

            <button
              onClick={() => signningOut()}
              className="flex gap-3 group hover:shadow-md transition-all font-medium p-4 items-center text-[#555] hover:bg-[#fff] rounded"
            >
              {route == "signout" ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin group-hover:text-black  text-white" />
              ) : (
                <LogOut
                  width={32}
                  className="text-white group-hover:text-black"
                />
              )}

              <span
                className={`${
                  lgScreen ? "hidden" : ""
                } lg:text-base xl:text-lg text-white group-hover:text-black tracking-wider`}
              >
                Sign Out
              </span>
            </button>
          </div>
        </div>
        {premium ? (
          ""
        ) : (
          <div
            className={`absolute ${
              lgScreen ? "lg:left-6" : "lg:left-4"
            } xl:left-3 bottom-10 lg:w-60 xl:w-60 flex gap-1 items-center cursor-pointer`}
          >
            <Link className="flex" href={"/#pricing"}>
              <ChartNoAxesColumnIncreasing color="#fff" />

              <h1
                className={`${
                  lgScreen ? "hidden" : ""
                } transition-all duration-500 underline text-[#fff] text-sm `}
              >
                Upgrade for more premium features
              </h1>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideNav;
