"use client";
import { PDFViewer } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import DefaultTemplate from "./DefaultTemplate";

const PDFView = ({ data }) => {
  return (
    <PDFViewer showToolbar={false} style={{ width: 900 }}>
      <DefaultTemplate data={data} />
    </PDFViewer>
  );
};

export default PDFView;
