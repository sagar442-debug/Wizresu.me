import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#242842] px-8 ">
      <div className="text-white mx-auto max-w-7xl">
        <div className="pt-10 flex flex-col items-center md:items-start md:flex-row md:flex md:justify-between">
          <div className="">
            <Link href={"/"}>
              <div className="logo flex gap-2 items-center ">
                <Image
                  src={"/Favicon.png"}
                  height={36}
                  width={36}
                  alt="wizresu-logo"
                />
                <h1 className="text-xl font-semibold ">WizResu.me</h1>
              </div>
            </Link>
            <div className="mt-2 w-72 text-sm text-gray-300">
              <p>
                WizResume is a web app that lets you create and customize
                resumes quickly. Easily adjust your resume for different job
                applications in minutes, without the hassle of editing a Word
                document each time.
              </p>
            </div>
          </div>
          <div className="right-side flex w-full justify-center gap-16 md:w-auto md:pt-0 pt-10 md:gap-5">
            <div>
              <h1 className="text-xl font-semibold">Links</h1>
              <ul className="mt-5 space-y-2 text-gray-300">
                <li className="hover:underline">
                  <Link href="#pricing">Pricing</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#pricing">Support</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Legal</h1>
              <ul className="mt-5 space-y-2 text-gray-300">
                <li className="hover:underline">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/terms&conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <h1 className="tracking-wider text-sm  py-4 lg:py-0">
            &copy;2024 WizResume. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
