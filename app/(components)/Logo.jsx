import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image src={"/Favicon.png"} height={48} width={48} alt="wizresu-logo" />
      <h1 className="font-bold sm:text-xl xl:text-2xl lg:text-xl text-[#2a2663]">
        WizResu.me
      </h1>
    </div>
  );
};

export default Logo;
