import React from "react";
export const runtime = "edge";
const layout = ({ children }) => {
  return (
    <div className="lg:ml-5">
      <div>{children}</div>
    </div>
  );
};

export default layout;
