import React from "react";
import { PiNotepadFill } from "react-icons/pi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import { RiFileDownloadFill } from "react-icons/ri";

const ThirdPartLanding = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <div className="">
            <div className="flex justify-between">
              <div className="paper flex-col">
                <div className="p-3 rounded-full w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-white z-10 relative">
                  <PiNotepadFill className="text-5xl text-white" />
                </div>
                <div className="bg-[#7FA9C4] mt-2 rounded-r-[50px]  rounded-bl-[50px] rounded-tl-[5px]">
                  <h1 className="text-xl font-semibold text-white p-4 w-60 h-28 ">
                    Upload your resume and job description
                  </h1>
                </div>
              </div>
              <div className="scan-paper flex-col">
                <div className="p-3 rounded-full w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-white z-10 relative">
                  <MdOutlineDocumentScanner className="text-5xl text-white" />
                </div>
                <div className="bg-[#7FA9C4] mt-2 rounded-r-[50px]  rounded-bl-[50px] rounded-tl-[5px]">
                  <h1 className="text-xl font-semibold text-white p-4 w-60 h-28">
                    We scan the hidden gems in the rough.
                  </h1>
                </div>
              </div>
              <div className="suggestions flex-col">
                <div className="p-3 rounded-full w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-white z-10 relative">
                  <HiOutlineSparkles className="text-5xl text-white" />
                </div>
                <div className="bg-[#7FA9C4] mt-2 rounded-r-[50px]  rounded-bl-[50px] rounded-tl-[5px]">
                  <h1 className="text-xl font-semibold text-white p-3 w-60 h-28">
                    We provide exceptional Suggestions
                  </h1>
                </div>
              </div>
              <div className="download flex-col">
                <div className="p-3 rounded-full w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-white z-10 relative">
                  <RiFileDownloadFill className="text-5xl text-white" />
                </div>
                <div className="bg-[#7FA9C4] mt-2 rounded-r-[50px]  rounded-bl-[50px] rounded-tl-[5px]">
                  <h1 className="text-xl font-semibold text-white p-3 w-60 h-28">
                    One Click Download, One Step Closer to Your Dream Job
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[58vw] bg-[#7FA9C4] h-3 rounded-2xl absolute top-10 transform -translate-y-1/2 "></div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-xl text-[#2a2663]">
          Embrace the AI era and simplify your job search. Let us handle the
          details and help you achieve top-quality results effortlessly!
        </h1>
      </div>
    </div>
  );
};

export default ThirdPartLanding;
