import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        className="md:w-10 xl:w-10"
        src={"/Favicon.png"}
        height={48}
        width={48}
        alt="wizresu-logo"
      />
    </div>
  );
};

export default Logo;
