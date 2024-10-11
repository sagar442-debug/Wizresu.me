import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Exclusive = () => {
  return (
    <div className="flex-col px-12 py-6 space-y-5 bg-[#49305e] text-white  w-[400px] rounded-xl shadow-xl ">
      <div>
        <h1 className="text-xl font-semibold">Exclusive</h1>
        <p>For Professionals</p>
        <h1 className="text-3xl font-semibold mt-5">
          $4.99 <span className="opacity-70 text-sm">/ month</span>
        </h1>
      </div>
      <div className="">
        <ul className="space-y-3 mt-10">
          <li className="flex gap-2">
            <FaCheckCircle className="mt-1" />
            <span>Unlimited resumes.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Unlimited personal resume upload.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Daily limitations on multiple jobs.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Unlimited text regeneration.</span>
          </li>
          <li className="flex gap-2 ">
            <FaCheckCircle className="mt-1" />
            <span>Unlimited resume saves.</span>
          </li>
        </ul>
      </div>
      <div className="button text-center">
        <button className=" p-2 mt-10 rounded-2xl text-xl text-[#49305e] px-10 bg-[white]  font-semibold hover:bg-gray-300 transition-all duration-200">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Exclusive;
