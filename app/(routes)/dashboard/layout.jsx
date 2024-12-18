import React from "react";

import SideNav from "./_components/SideNav"; // Adjust the import path as needed

export const metadata = {
  title: "Dashboard",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <div className="ml-10  lg:ml-10 xl:ml-64 mx-auto block w-full pt-5 pl-10 overflow-x-hidden pb-10">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
