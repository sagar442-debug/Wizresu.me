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
    <div id="pricing" className="mt-36 my-10">
      <h1 className="font-semibold text-center text-5xl">Pricing</h1>
      <div className="mt-28 flex justify-center space-x-12">
        <BasicCard />
        <Premium />
        <Exclusive />
      </div>
    </div>
  );
};

export default ThirdPartLanding;
