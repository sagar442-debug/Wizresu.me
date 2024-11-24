"use client";
import React, { useEffect } from "react";
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
  useEffect(() => {
    generateAtsScore();
    console.log(atsScore);
  }, []);
  const value = 50;
  return (
    <div className="ml-10">
      <h1>This is ats score page!</h1>
      <div className="flex gap-10">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Calculate you ATS</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Upload your resume</CardDescription>
            <CardDescription>Select your resume!</CardDescription>
          </CardContent>
          <CardContent>
            <ChangingProgressProvider value={78} interval={10}>
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
            <CardDescription>Skills</CardDescription>
            <CardDescription>Phrases</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
