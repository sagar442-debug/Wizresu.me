import React from "react";
import { PiNotepadFill } from "react-icons/pi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import { RiFileDownloadFill } from "react-icons/ri";
import BasicCard from "./BasicCard";
import Premium from "./Premium";
import Exclusive from "./Exclusive";

const ThirdPartLanding = () => {
  return (
    <div id="pricing" className="mt-24 md:mt-36 md:my-10">
      <h1 className="font-semibold text-center text-5xl">Pricing</h1>
      <div className="flex justify-center lg:block ">
        <div className="mt-28 grid grid-cols-1 md:grid-cols-1 mx-auto gap-10 lg:flex lg:justify-center ">
          <BasicCard />
          <Premium />
        </div>
      </div>
    </div>
  );
};

export default ThirdPartLanding;
