import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const ResumePDF = dynamic(() => import("./PDFView"), {
  ssr: false,
});

const ShowPDF = () => {
  const firstName = useSelector((state) => state.personalData.firstName);
  return <ResumePDF data={{ firstName: firstName }} />;
};

export default ShowPDF;
