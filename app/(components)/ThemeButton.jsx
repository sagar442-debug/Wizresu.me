import React from "react";

const ThemeButton = ({ text }) => {
  return (
    <div>
      <button className="font-semibold rounded-full sm:text-lg md:text-xl px-4 py-2 bg-gradient-to-r from-[#7DA7C5] to-[#949C5C] text-white hover:shadow-md  ">
        {text}
      </button>
    </div>
  );
};

export default ThemeButton;
