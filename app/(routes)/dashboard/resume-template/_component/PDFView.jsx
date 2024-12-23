"use client";
import { PDFViewer } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import DefaultTemplate from "./DefaultTemplate";

const PDFView = ({ name }) => {
  return (
    <PDFViewer showToolbar={false} style={{ width: 900 }}>
      <DefaultTemplate name={name} />
    </PDFViewer>
  );
};

export default PDFView;
