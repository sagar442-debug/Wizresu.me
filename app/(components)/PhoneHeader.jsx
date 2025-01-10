import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const PhoneHeader = () => {
  return (
    <div className="md:hidden mb-8 pb-5 border-b border-[#2a26633b]">
      <div className="flex justify-center items-center mb-6">
        <Logo />
        <h1 className="text-[#2a2663] font-semibold text-lg">Wizresu.me</h1>
      </div>
      <nav className=" flex space-x-5 justify-center items-center">
        <Link
          className="bg-[#2a2663] py-1 px-2 rounded font-semibold text-white"
          href={"/sign-in"}
        >
          Login
        </Link>
        <Link className="underline" href={"/sign-up"}>
          Sign Up
        </Link>
      </nav>
    </div>
  );
};

export default PhoneHeader;
