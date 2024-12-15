import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        className="w-8 md:w-8 lg:w-10 xl:w-12"
        src={"/LogoHigh.png"}
        height={120}
        width={120}
        alt="wizresume-logo"
      />
    </div>
  );
};

export default Logo;
