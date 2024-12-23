import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ResumePDF = dynamic(() => import("./PDFView"), {
  ssr: false,
});

const ShowPDF = ({ name }) => {
  return <ResumePDF name={name} />;
};

export default ShowPDF;
