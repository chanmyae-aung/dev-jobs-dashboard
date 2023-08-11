import React from "react";
import { PiSun, PiMoon } from "react-icons/pi";
import { TbSunMoon } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { darkMode, lightMode } from "../../features/themeSlice";
import Cookies from "js-cookie";


const Theme = () => {
  const dispatch = useDispatch()
  const dark = Cookies.get("dark")
  return (
    <div
      className={`shadow-lg flex flex-col mt-3 justify-center py-2 w-40 rounded-lg bg-white ${dark && "dark"}`}
    >
      <button onClick={() => dispatch(lightMode())} className={`nav-dropdown ${dark && "hover:bg-gray-500"}`}>
        <PiSun /> Light mode
      </button>
      <button onClick={() => dispatch(darkMode())} className={`nav-dropdown ${dark && "hover:bg-gray-500"}`}>
        <PiMoon /> Dark mode
      </button>
      <button className={`nav-dropdown ${dark && "hover:bg-gray-500"}`}>
        <TbSunMoon /> Auto
      </button>
    </div>
  );
};

export default Theme;
