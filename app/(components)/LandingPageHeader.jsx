"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Loader from "../(routes)/dashboard/_components/Loader";
import PhoneHeader from "./PhoneHeader";
// #2a2663

const LandingPageHeader = () => {
  const { isLoggenIn, user } = useUser();
  const [loading, setLoading] = useState(false);

  const onDashboardClick = () => {
    setLoading(true);
  };
  return (
    <div className="relative max-w-7xl  md:mx-auto px-5 pt-10 pb-20 lg:p-0 md:px-0 bg-[#F3C168] lg:bg-transparent mb:pb-5 lg:pb-0">
      <div className="absolute hidden lg:block -z-10 bg-[#F3C168] sm:-left-[40rem] sm:-top-[150rem] lg:-top-[155rem] xl:-top-[150rem] xl:-left-[50rem] md:-top-[155rem] md:-left-[60rem] rounded-full h-[200rem] w-[200rem] "></div>
      <div className="hidden md:block">
        <div className="flex justify-between items-center py-4 lg:py-8 xl:px-0 sm:px-10 md:space-x-2 lg:space-x-0 ">
          <div className="logo ">
            <Link className="flex gap-2 items-center" href={"/"}>
              <Logo />
              <h1
                className={` font-bold sm:text-xl xl:text-2xl lg:text-xl text-[#2a2663]`}
              >
                WizResu.me
              </h1>
            </Link>
          </div>
          <div>
            <ul className="text-[#2a2663] flex items-center md:justify-between lg:justify-normal lg:gap-8 sm:gap-4 md:gap-4 text-sm lg:text-xl">
              <li>
                <Link
                  className="hover:border-b transition-all hover:border-black"
                  href={"#how-it-works"}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b transition-all hover:border-black"
                  href={"#pricing"}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b transition-all hover:border-black"
                  href={"#faq"}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex sm:gap-2 md:gap-6  items-center">
            {user ? (
              <Link onClick={onDashboardClick} href={"/dashboard"}>
                {/* <Button
                className="rounded hover:text-white shadow-none text-[#2a2663] text-xl "
                variant=""
              >
                Dashboard
              </Button> */}

                <button
                  disabled={loading}
                  className={`font-semibold ${
                    loading ? "opacity-60" : ""
                  } flex items-center duration-200  rounded shadow-md sm:text-sm lg:text-lg px-4 py-1 lg:py-1 bg-gradient-to-r from-[#7DA7C5] to-[#949C5C] text-white hover:shadow-lg`}
                >
                  {loading ? <Loader /> : ""}

                  <span>Dashboard</span>
                </button>
              </Link>
            ) : (
              <Link href={"/sign-in"}>
                <ThemeButton text="Sign In" />
              </Link>
            )}

            <Link
              className="underline text-sm lg:text-lg font-medium text-[#2a2663]"
              href={"/"}
            >
              Exclusive Access!
            </Link>
          </div>
        </div>
      </div>
      <PhoneHeader />
      <div className="flex lg:justify-between md:mt-0 lg:mt-5 md:px-10 xl:px-0 sm:items-center md:items-start">
        <div className="w-[40rem]">
          <h1 className=" sm:block text-center md:mt-20 sm:text-start sm:mt-10 text-xl md:text-2xl lg:text-5xl font-bold  text-[#2a2663]">
            ATS-Friendly Resumes in One Click
          </h1>
          <p className="text-[#2a2663] text-sm text-center sm:text-start sm:text-sm leading-none md:text-lg my-5 lg:leading-10 ">
            Don't waste time customizing your resume for every job. With just
            one click, we create an ATS-optimized resume with score tailored to
            your details—fast, easy, and efficient.
          </p>

          {user ? (
            <Link
              className="flex justify-center sm:block mt-5 sm:mt-0"
              onClick={onDashboardClick}
              href={"/dashboard"}
            >
              <button
                disabled={loading}
                className={`font-semibold ${
                  loading ? "opacity-60" : ""
                } font-semibold flex items-center hover:shadow-lg md:text-lg px-3 py-1 shadow  md:px-4 md:py-1 rounded text-white bg-gradient-to-r from-[#7DA7C5] duration-500
     to-[#949C5C] bg-[length:200%_200%] bg-left transition-all  ease-out hover:bg-right`}
              >
                <button>
                  {loading ? <Loader /> : ""}
                  <span>Go To Dashboard</span>
                </button>
              </button>
            </Link>
          ) : (
            <Link
              href={"/sign-up"}
              className="flex justify-center sm:block mt-5 sm:mt-0"
            >
              <button
                className="font-semibold sm:text-2xl hover:shadow-lg md:text-lg px-3 py-1  md:px-4 md:py-2 rounded text-white bg-gradient-to-r from-[#7DA7C5] duration-500
     to-[#949C5C] bg-[length:200%_200%] bg-left transition-all  ease-out hover:bg-right"
              >
                Get Started Here
              </button>
            </Link>
          )}
        </div>
        <Image
          src={"/resume6.jpg"}
          height={500}
          width={500}
          className="hidden sm:block h-44 w-44 mt-14 md:mt-0 md:h-[25rem] md:w-[25rem] lg:h-[30rem] lg:w-[30rem] xl:h-[35rem] xl:w-[35rem] "
        />
      </div>
    </div>
  );
};

export default LandingPageHeader;

export const leftNav = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center py-8 xl:px-0 sm:px-10 md:space-x-2 lg:space-x-0 ">
        <div className="logo ">
          <Link className="flex gap-2 items-center" href={"/"}>
            <Logo />
            <h1
              className={` font-bold sm:text-xl xl:text-2xl lg:text-xl text-[#2a2663]`}
            >
              WizResu.me
            </h1>
          </Link>
        </div>
        <div>
          <ul className="text-[#2a2663] flex items-center md:justify-between lg:justify-normal lg:gap-8 sm:gap-4 md:gap-4 text-sm lg:text-xl">
            <li>
              <Link
                className="hover:border-b transition-all hover:border-black"
                href={"#how-it-works"}
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-b transition-all hover:border-black"
                href={"#pricing"}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="hover:border-b transition-all hover:border-black"
                href={"#faq"}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex sm:gap-2 md:gap-6  items-center">
          {user ? (
            <Link href={"/dashboard"}>
              {/* <Button
            className="rounded hover:text-white shadow-none text-[#2a2663] text-xl "
            variant=""
          >
            Dashboard
          </Button> */}
              <ThemeButton text="Dashboard" />
            </Link>
          ) : (
            <Link href={"/sign-in"}>
              <ThemeButton text="Sign In" />
            </Link>
          )}

          <Link
            className="underline text-sm lg:text-lg font-medium text-[#2a2663]"
            href={"/"}
          >
            Exclusive Access!
          </Link>
        </div>
      </div>
    </div>
  );
};
