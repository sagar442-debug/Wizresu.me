import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#242842] px-8 h-[40vh]">
      <div className="text-white mx-auto max-w-7xl">
        <div className="pt-10 flex justify-between">
          <div className="">
            <div className="logo flex gap-2 items-center ">
              <Image
                src={"/Favicon.png"}
                height={48}
                width={48}
                alt="wizresu-logo"
              />
              <h1 className="text-2xl font-semibold text-gray-300">
                WizResume
              </h1>
            </div>
            <div className="mt-2 w-72 text-sm text-gray-300">
              <p>
                WizResume is a web app that lets you create and customize
                resumes quickly. Easily adjust your resume for different job
                applications in minutes, without the hassle of editing a Word
                document each time.
              </p>
            </div>
          </div>
          <div className="right-side flex gap-5">
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
                  <Link href="#pricing">Privacy Policy</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#pricing">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="tracking-wider">
            &copy;2024 WizResume. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
