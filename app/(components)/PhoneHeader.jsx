import Link from "next/link";
import React from "react";

const PhoneHeader = () => {
  return (
    <nav className="md:hidden flex space-x-5 justify-center items-center pb-8">
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
  );
};

export default PhoneHeader;
