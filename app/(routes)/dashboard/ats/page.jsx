"use client";
import React, { useEffect, useState } from "react";
import { useAtsCalculator } from "@/app/_utils/atsCalculator";
import useStore from "@/store/useStore";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedProgressProvider from "../_components/AnimatedProgressProvider";
import ChangingProgressProvider from "../_components/ChangingProgressProvider";
export const runtime = "edge";
const page = () => {
  const atsScore = useStore((state) => state.atsScore);
  const { generateAtsScore, geminiData } = useAtsCalculator();
  const setAtsScore = useStore((state) => state.setAtsScore);
  const setResumeScanData = useStore((state) => state.setResumeScanData);
  const resumeScanData = useStore((state) => state.resumeScanData);
  const [atsPercent, setAtsPercent] = useState(0);
  const [scanLoader, setScanLoader] = useState(false);

  const onScan = async () => {
    setScanLoader(true);
    await generateAtsScore();
    console.log("This is gemini data", geminiData);
    setScanLoader(false);
  };
  const value = 50;
  return (
    <div className="ml-10">
      <div className="flex gap-10">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center tracking-wider ">
              Calculate you ATS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-x-4">
              <button
                disabled={scanLoader}
                onClick={onScan}
                class="max-w-[120px] bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Upload your resume!
              </button>
              <button
                disabled={scanLoader}
                onClick={onScan}
                class="max-w-[120px] bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
              >
                Select your resume
              </button>
            </div>
          </CardContent>
          <CardContent>
            <ChangingProgressProvider value={atsPercent} interval={10}>
              {(percentage) => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathTransitionDuration: 0.15,
                  })}
                />
              )}
            </ChangingProgressProvider>
          </CardContent>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="font-semibold ">
              Keywords:
            </CardDescription>
            <div className="grid grid-cols-4 text-sm text-center gap-3 text-white mt-2">
              <h1 className="px-2 py-1 bg-[#5abe70fb] rounded-xl hover:bg-[#4caa60fb] duration-200 transition-all ">
                Svelte
              </h1>
              <h1 className="px-2 py-1 bg-[#5abe70fb] rounded-xl hover:bg-[#4caa60fb] duration-200 transition-all">
                Svelte
              </h1>
              <h1 className="px-2 py-1 bg-[#5abe70fb] rounded-xl hover:bg-[#4caa60fb] duration-200 transition-all">
                Svelte
              </h1>
              <h1 className="px-2 py-1 bg-[#5abe70fb] rounded-xl hover:bg-[#4caa60fb] duration-200 transition-all">
                Svelte
              </h1>
            </div>
          </CardContent>
          <CardContent>
            <CardDescription className="font-semibold ">
              Phrases:
            </CardDescription>
            <div className="space-y-2 text-sm text-white mt-2">
              <h1 className="px-2 py-1 bg-[#50af7ffb] hover:bg-[#409c6efb] rounded-xl duration-200 transition-all">
                Gained proficiency in Svelte framework.
              </h1>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
