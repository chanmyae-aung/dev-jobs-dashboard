import React from "react";
import { PiSun, PiMoon } from "react-icons/pi";
import { TbSunMoon } from "react-icons/tb";


const Theme = () => {
  return (
    <div
      className={`shadow-lg flex flex-col mt-3 justify-center py-2 w-40 rounded-lg bg-white`}
    >
      <button className="nav-dropdown">
        <PiSun /> Light mode
      </button>
      <button className="nav-dropdown">
        <PiMoon /> Dark mode
      </button>
      <button className="nav-dropdown">
        <TbSunMoon /> Auto
      </button>
    </div>
  );
};

export default Theme;
