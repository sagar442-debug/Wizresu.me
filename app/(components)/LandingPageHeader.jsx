"use client";
import React from "react";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
// #2a2663

const LandingPageHeader = () => {
  const { isLoggenIn, user } = useUser();
  return (
    <div className="relative max-w-7xl  md:mx-auto">
      <div className="absolute -z-10 bg-[#F3C168] sm:-left-[40rem] sm:-top-[150rem] lg:-top-[155rem] xl:-top-[150rem] xl:-left-[50rem] md:-top-[155rem] md:-left-[60rem] rounded-full h-[200rem] w-[200rem] "></div>

      <div className="flex justify-between items-center py-8 xl:px-0 sm:px-10  ">
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
          <ul className="text-[#2a2663] flex items-center gap-8 sm:gap-4 md:gap-8 md:text-xl">
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
            className="underline sm:text-base md:text-lg font-medium text-[#2a2663]"
            href={"/"}
          >
            Exclusive Access!
          </Link>
        </div>
      </div>
      <div className="flex lg:justify-between  mt-10 md:px-10 xl:px-0 sm:px-10 sm:items-center md:items-start">
        <div className="w-[40rem]">
          <h1 className="md:mt-20 sm:mt-10 sm:text-3xl md:text-5xl font-bold  text-[#2a2663]">
            Optimize Your Resume In Seconds!
          </h1>
          <p className="text-[#2a2663] sm:text-lg my-5 leading-10 md:text-xl">
            Simply provide the job description and upload your old resume or
            provide your details, and we'll craft the perfect match—maximizing
            your <strong>ATS</strong> score to help you land the job."
          </p>

          <Link
            href={"/dashboard"}
            className="font-semibold hover:shadow-lg md:text-2xl  px-4 py-2 rounded-full text-white bg-gradient-to-r from-[#7DA7C5] duration-200
     to-[#949C5C] bg-[length:200%_200%] bg-left transition-all  ease-out hover:bg-right"
          >
            Get Started Here
          </Link>
        </div>
        <Image
          src={"/resume6.jpg"}
          height={500}
          width={500}
          className="sm:h-64  sm:w-64 md:h-[30rem] md:w-[30rem]"
        />
      </div>
    </div>
  );
};

export default LandingPageHeader;
