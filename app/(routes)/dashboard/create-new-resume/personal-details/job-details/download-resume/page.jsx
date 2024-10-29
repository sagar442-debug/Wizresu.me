"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useStore from "@/store/useStore";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";

const page = () => {
  const resumeRef = useStore((state) => state.resumeRef);
  console.log(resumeRef);
  const inititalTap = useStore((state) => state.initialTap);
  const setInitialTap = useStore((state) => state.setInitialTap);
  const handleDownloadPdf = async (e) => {
    e.preventDefault();
    setInitialTap(true);
    await new Promise((resolve) => setTimeout(resolve, 200));
    const input = resumeRef.current;
    if (!input) {
      console.error("resumeRef is not set or is invalid.");
      return;
    }
    await html2canvas(input, { scale: 6 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 page width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, null, "FAST");

      pdf.save("resume.pdf");
    });
    setInitialTap(false);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Your Resume is Ready</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <Button
              className="bg-sky-500 text-white hover:text-black rounded-2xl hover:shadow-lg"
              variant="secondary"
              onClick={handleDownloadPdf}
            >
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
