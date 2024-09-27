"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import JobDetail from "../_components/JobDetail";
import ResumeTemplate from "../_components/ResumeTemplate";
import ReactToPrint from "react-to-print";
import { Button } from "@/components/ui/button";
import { MdDownloadForOffline } from "react-icons/md";
import useStore from "@/store/useStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function page() {
  const count = useStore((state) => state.count);
  const componentRef = useRef();
  return (
    <div>
      <Card>
        <JobDetail />
      </Card>
    </div>
  );
}

export default page;

{
  /* <div className="border rounded w-[40rem] text-center p-5 ">
            <ResumeTemplate ref={componentRef} />
            <ReactToPrint
              trigger={() => (
                <Button variant="secondary" className="gap-2">
                  <MdDownloadForOffline className="" />
                  <span>Download</span>
                </Button>
              )}
              content={() => componentRef.current}
            />
          </div> */
}
