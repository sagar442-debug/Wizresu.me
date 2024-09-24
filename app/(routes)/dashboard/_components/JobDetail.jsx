import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";

const JobDetail = () => {
  return (
    <div className="border rounded min-w-[40rem] min-h-[80vh] p-5">
      <div className=" ">
        <form action="">
          <label htmlFor="">Job title:</label>
          <input
            type="text"
            placeholder="Enter the job title "
            className="focus:outline-none border ml-2 py-1 px-2  w-[30rem] border-[#d1d1d1]"
          />
          <br />
          <br />
          <label className="" htmlFor="">
            Job Description:
          </label>
          <br />
          <Textarea rows={30} className="border-[#d1d1d1] mt-1 resize-none " />
          <Button
            className="mt-6 hover:bg-blue-400 rounded hover:text-white shadow-lg"
            variant="ghost"
          >
            <Link href={"/"}>Quick Generate</Link>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default JobDetail;
