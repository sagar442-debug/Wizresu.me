import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        className="md:w-5 lg:w-8 xl:w-10"
        src={"/Favicon.png"}
        height={30}
        width={30}
        alt="wizresu-logo"
      />
    </div>
  );
};

export default Logo;
