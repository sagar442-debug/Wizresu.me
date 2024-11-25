import React from "react";

const layout = ({ children }) => {
  return (
    <div className="lg:ml-10">
      <div>{children}</div>
    </div>
  );
};

export default layout;
