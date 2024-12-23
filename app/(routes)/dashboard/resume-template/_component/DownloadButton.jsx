import React from "react";
import DefaultTemplate from "./DefaultTemplate";
import { PDFDownloadLink } from "@react-pdf/renderer";

const DownloadButton = () => {
  return (
    <PDFDownloadLink
      className="inline-flex items-center gap-2 px-4 py-1.5 font-semibold text-sm border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer"
      document={<DefaultTemplate />}
      fileName="resume.pdf"
    >
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  );
};

export default DownloadButton;
