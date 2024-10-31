import React from "react";

const ThemeButton = ({ text }) => {
  return (
    <div>
      <button className="font-semibold duration-200 rounded-full sm:text-sm lg:text-xl px-4 py-1 lg:py-1 bg-gradient-to-r from-[#7DA7C5] to-[#949C5C] text-white hover:shadow-md  ">
        {text}
      </button>
    </div>
  );
};

export default ThemeButton;
