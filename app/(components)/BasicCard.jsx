"use client";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const BasicCard = () => {
  return (
    <div className="px-12 py-6 space-y-5 bg-white w-[400px] md:rounded-xl shadow-xl ">
      <div>
        <h1 className="text-xl font-semibold">Basic</h1>
        <p>For Starters</p>
        <h1 className="text-3xl font-semibold mt-5">$0</h1>
      </div>
      <div className="">
        <ul className="space-y-3 mt-10">
          <li className="flex gap-2">
            <FaCheckCircle className="mt-1" />
            <span>Max 14 resumes per week.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Max 3 resumes uploads.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Daily limitations on multiple jobs.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>ATS calculator.</span>
          </li>
        </ul>
      </div>
      <div className="button text-center">
        <Link href={"/sign-in"}>
          <button className=" p-2 mt-10 rounded-2xl hover:shadow-[10px_8px_0px_0px_rgba(36,40,66,0.4)] text-xl text-[#49305e] border-2 border-[#49305e] hover:bg-[#49305e] hover:text-white px-10 bg-[white]  font-semibold transition-all duration-200">
            Subscribe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BasicCard;
