import React from "react";
import ResumeTemplatePage from "./_components/ResumeTemplatePage";
import { Card } from "@/components/ui/card";

const layout = ({ children }) => {
  return (
    <div className="flex space-x-10  ">
      <div>{children}</div>
      <Card>
        <ResumeTemplatePage />
      </Card>
    </div>
  );
};

export default layout;
