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
    await html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 page width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, null, "FAST");

      pdf.save("resume.pdf");
    });
    setInitialTap(false);
  };
  // const handleDownloadPdf = async (e) => {
  //   const input = resumeRef.current; // Get the reference to the resume

  //   if (!input) {
  //     console.error("resumeRef is not set or is invalid.");
  //     return;
  //   }

  //   const printWindow = window.open("", "_blank"); // Open a new window
  //   printWindow.document.write("<html><head><title>Print Resume</title>");

  //   // Include any styles you need
  //   printWindow.document.write(`
  //   <style>
  //     body {
  //       font-family: Arial, sans-serif;
  //     }
  //     /* Add more styles here as needed */
  //   </style>
  // `);

  //   // Write the content to the new window
  //   printWindow.document.write('<body onload="window.print()">');
  //   printWindow.document.write(input.innerHTML); // Use innerHTML of the resumeRef
  //   printWindow.document.write("</body></html>");

  //   printWindow.document.close(); // Close the document to trigger loading
  //   printWindow.focus(); // Focus on the new window
  // };
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
