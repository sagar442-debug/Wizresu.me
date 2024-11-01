import React from "react";
import { Wand } from "lucide-react";
import { PiNotepadFill } from "react-icons/pi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import { RiFileDownloadFill } from "react-icons/ri";

function SecondPartLanding() {
  return (
    <div
      className="mt-10 lg:mt-20 flex-col md:space-y-16 lg:space-y-56 text-center items-center "
      id="how-it-works"
    >
      <div className="flex justify-center items-center">
        <Wand
          height={100}
          width={100}
          color="#2a2663"
          className="h-10 w-10 md:w-16 md:h-16 lg:w-28 lg:h-28 -rotate-90 "
        />
        <h1 className="text-2xl lg:text-5xl font-bold text-[#2a2663]">
          How's The Magic Done?
        </h1>
      </div>
      <div className="">
        <div className="relative">
          <div className="">
            <div className="flex flex-col ml-28 md:ml-60 lg:ml-0 items-center lg:items-start lg:flex lg:flex-row lg:justify-between ">
              <div className="paper lg:flex lg:flex-col justify-center">
                <div className="p-3 rounded-full w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-[#fafafa] z-10 relative">
                  <PiNotepadFill className="text-2xl lg:text-5xl text-white" />
                </div>
                <div className="w-40 bg-[#7FA9C4] mt-2 ml-10 md:ml-20 lg:ml-10 md:w-56 rounded-r-[50px] p-4 xl:w-60 xl:h-28 lg:w-52 lg:h-24  rounded-bl-[50px] rounded-tl-[5px]">
                  <h1 className="xl:text-lg lg:text-base font-semibold text-white  ">
                    Upload job description and your details
                  </h1>
                </div>
              </div>
              <div className="scan-paper lg:flex-col">
                <div className="p-3 rounded-full w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-[#fafafa] z-10 relative">
                  <MdOutlineDocumentScanner className="text-2xl lg:text-5xl text-white" />
                </div>
                <div className="w-40 bg-[#7FA9C4]  xl:ml-10 ml-10 md:ml-20 lg:ml-14 xl:-mt-56 lg:-mt-48 lg:rounded-r-[50px] p-4 xl:w-60 xl:h-28 md:w-56 lg:w-52 lg:h-24 lg:rounded-tl-[50px] lg:rounded-bl-[5px] rounded-bl-[50px] rounded-r-[50px]">
                  <h1 className="xl:text-lg lg:text-base font-semibold text-white ">
                    We scan the hidden gems in the rough
                  </h1>
                </div>
              </div>
              <div className="suggestions flex-col">
                <div className="p-3 rounded-full w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-[#fafafa] z-10 relative">
                  <HiOutlineSparkles className="text-2xl lg:text-5xl text-white" />
                </div>
                <div className="w-40 p-4 bg-[#7FA9C4] xl:mt-2 ml-10 md:ml-20 lg:mt-2 lg:ml-10 lg:rounded-r-[50px] md:p-3 xl:w-60 xl:h-28 lg:w-52 md:w-56 lg:h-24 lg:rounded-bl-[50px] lg:rounded-tl-[5px] rounded-bl-[50px] rounded-r-[50px]">
                  <h1 className="xl:text-lg lg:text-base font-semibold text-white ">
                    We provide exceptional Suggestions with AI
                  </h1>
                </div>
              </div>
              <div className="download flex-col">
                <div className="p-3 rounded-full  w-fit bg-gradient-to-r from-[#7EA8C4] to-[#BAC56A] border-8 border-[#fafafa] z-10 relative ">
                  <RiFileDownloadFill className="text-2xl lg:text-5xl text-white" />
                </div>
                <div className="w-40 md:w-56 bg-[#7FA9C4] ml-10 md:ml-20  lg:ml-16 xl:ml-10 lg:rounded-r-[50px] xl:w-60 xl:h-28 lg:w-52 lg:h-24  lg:rounded-bl-[5px] lg:rounded-tl-[50px] lg:-translate-x-12 xl:-translate-x-0  xl:-mt-56 lg:-mt-48 rounded-bl-[50px] rounded-r-[50px]">
                  <h1 className="xl:text-lg lg:text-base font-semibold text-white p-3 ">
                    One Click Download, One Step Closer to Your Dream Job
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden lg:block lg:min-w-[800px] xl:w-[1000px] bg-[#7FA9C4] h-3 rounded-2xl absolute top-10 transform lg:-translate-y-1/2 "></div>
          <div className="-ml-[2rem] md:ml-0 flex justify-center lg:hidden">
            <div className="lg:hidden h-[590px] md:h-[450px] bg-[#7FA9C4] w-3 rounded-2xl absolute top-0 transform "></div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:mt-0">
        <h1 className="font-semibold   text-xl text-[#2a2663] ">
          Embrace the AI era and simplify your job search. Let us handle the
          details and help you achieve top-quality results effortlessly!
        </h1>
      </div>
    </div>
  );
}

export default SecondPartLanding;
