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
import { ClipLoader } from "react-spinners";
export const runtime = "edge";
const page = () => {
  const atsScore = useStore((state) => state.atsScore);
  const { generateAtsScore, geminiData } = useAtsCalculator();
  const setAtsScore = useStore((state) => state.setAtsScore);
  const setResumeScanData = useStore((state) => state.setResumeScanData);
  const resumeScanData = useStore((state) => state.resumeScanData);
  const [atsPercent, setAtsPercent] = useState(0);
  const [scanLoader, setScanLoader] = useState(false);
  const [atsData, setAtsData] = useState({});
  const colors = ["#ff0000", "#e0a500", , "#01dd6f", "#0000ff"]; // red, blue, yellow, green
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through the colors
    }, 1000); // Change color every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [colors.length]);

  const onScan = async () => {
    setScanLoader(true);
    const response = await generateAtsScore();
    setResumeScanData(response);
    setAtsData(response);
    const score = Math.round(response.percentageMatch);
    setAtsPercent(score);
    console.log("This is gemini data", response);
    setScanLoader(false);
  };

  const onClicking = () => {
    console.log(atsData.recommendedKeywords);
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
            <div className="text-center space-x-2">
              <button
                disabled={scanLoader}
                onClick={onScan}
                className={`${
                  scanLoader ? "bg-gray-400" : "bg-blue-500"
                } max-w-[120px] text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300`}
              >
                Upload your resume!
              </button>
              <button
                disabled={scanLoader}
                onClick={onScan}
                className={`${
                  scanLoader ? "bg-gray-400" : "bg-gray-500"
                } max-w-[120px] bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-300`}
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
        <Card className="min-w-[350px]">
          <CardHeader>
            <CardTitle>Suggestions</CardTitle>
          </CardHeader>
          {scanLoader ? (
            <div className="flex items-center justify-center mt-32 w-full ">
              <ClipLoader
                className="transition-all duration-75"
                color={colors[currentColorIndex]}
                size={100}
              />
            </div>
          ) : (
            ""
          )}

          {atsData && Object.keys(atsData).length > 0 ? (
            <CardContent>
              <CardDescription className="font-semibold ">
                Keywords:
              </CardDescription>
              <div className="grid grid-cols-3 text-sm text-center gap-3 text-white mt-2">
                {atsData.recommendedKeywords.map((keyword) => (
                  <h1 className="px-2 py-1 min-w-20 bg-[#5abe70fb] rounded-xl hover:bg-[#4caa60fb] duration-200 transition-all ">
                    {keyword}
                  </h1>
                ))}
              </div>
            </CardContent>
          ) : (
            ""
          )}
          {atsData && Object.keys(atsData).length > 0 ? (
            <CardContent>
              <CardDescription className="font-semibold ">
                Phrases:
              </CardDescription>
              <div className="space-y-2 text-sm text-white mt-2">
                {atsData.recommendedSentences.map((sentence) => (
                  <h1 className="px-2 py-1 bg-[#50af7ffb] hover:bg-[#409c6efb] rounded-xl duration-200 transition-all">
                    {sentence}
                  </h1>
                ))}
              </div>
            </CardContent>
          ) : (
            ""
          )}
        </Card>
      </div>
    </div>
  );
};

export default page;
