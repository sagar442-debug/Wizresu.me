import React from "react";
import { Wand } from "lucide-react";
import { PiNotepadFill } from "react-icons/pi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import { RiFileDownloadFill } from "react-icons/ri";

function SecondPartLanding() {
  return (
    <div className="h-[100vh] mt-20 flex-col space-y-56 text-center items-center px-8">
      <div className="flex justify-center items-center">
        <Wand
          height={100}
          width={100}
          color="#2a2663"
          className="-rotate-90 "
        />
        <h1 className="text-5xl font-bold text-[#2a2663]">
          How's The Magic Done?
        </h1>
      </div>
      <div className="">
        <div className="relative">
          <div className="">
            <div className="flex justify-between">
              <div className="paper flex-col">
                <div className="p-3 rounded-full w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-[#fafafa] z-10 relative">
                  <PiNotepadFill className="text-5xl text-white" />
                </div>
                <div className="bg-[#7FA9C4] mt-2 ml-10 rounded-r-[50px] p-4 w-60 h-28 rounded-bl-[50px] rounded-tl-[5px]">
                  <h1 className="text-lg font-semibold text-white  ">
                    Upload job description and your details
                  </h1>
                </div>
              </div>
              <div className="scan-paper flex-col">
                <div className="p-3 rounded-full w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-[#fafafa] z-10 relative">
                  <MdOutlineDocumentScanner className="text-5xl text-white" />
                </div>
                <div className="bg-[#7FA9C4] -mt-56 ml-10 rounded-r-[50px] p-4 w-60 h-28 rounded-tl-[50px] rounded-bl-[5px]">
                  <h1 className="text-lg font-semibold text-white ">
                    We scan the hidden gems in the rough
                  </h1>
                </div>
              </div>
              <div className="suggestions flex-col">
                <div className="p-3 rounded-full w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-[#fafafa] z-10 relative">
                  <HiOutlineSparkles className="text-5xl text-white" />
                </div>
                <div className="bg-[#7FA9C4] mt-2 ml-10 rounded-r-[50px] p-3 w-60 h-28 rounded-bl-[50px] rounded-tl-[5px]">
                  <h1 className="text-lg font-semibold text-white ">
                    We provide exceptional Suggestions with AI
                  </h1>
                </div>
              </div>
              <div className="download flex-col">
                <div className="p-3 rounded-full  w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-[#fafafa] z-10 relative">
                  <RiFileDownloadFill className="text-5xl text-white" />
                </div>
                <div className="bg-[#7FA9C4] -mt-56 ml-10 rounded-r-[50px] w-60 h-28  rounded-bl-[5px] rounded-tl-[50px]">
                  <h1 className="text-lg font-semibold text-white p-3 ">
                    One Click Download, One Step Closer to Your Dream Job
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[50vw] bg-[#7FA9C4] h-3 rounded-2xl absolute top-10 transform -translate-y-1/2 "></div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-xl text-[#2a2663] ">
          Embrace the AI era and simplify your job search. Let us handle the
          details and help you achieve top-quality results effortlessly!
        </h1>
      </div>
    </div>
  );
}

export default SecondPartLanding;
