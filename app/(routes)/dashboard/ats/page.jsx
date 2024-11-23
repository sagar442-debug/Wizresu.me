"use client";
import React, { useEffect } from "react";
import { useAtsCalculator } from "@/app/_utils/atsCalculator";
import useStore from "@/store/useStore";
const page = () => {
  const atsScore = useStore((state) => state.atsScore);
  const { generateAtsScore, geminiData } = useAtsCalculator();
  const setAtsScore = useStore((state) => state.setAtsScore);
  useEffect(() => {
    generateAtsScore();
  }, []);

  return (
    <div className="ml-10">
      <h1>This is ats score page!</h1>
    </div>
  );
};

export default page;
