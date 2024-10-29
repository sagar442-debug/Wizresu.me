import React from "react";

import SideNav from "./_components/SideNav"; // Adjust the import path as needed

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <div className="lg:ml-12 xl:ml-80 mx-auto block w-full py-10 pl-10 overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
