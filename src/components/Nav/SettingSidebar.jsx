import { Switch } from "@mantine/core";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import {
  PiArrowCounterClockwise,
  PiArrowsHorizontalBold,
  PiMoon,
  PiSun,
} from "react-icons/pi";
import { TbArrowBarLeft, TbSunMoon } from "react-icons/tb";
import { stateContextCustom } from "../../context/StateContext";

const SettingSidebar = () => {
  const { toggleSetting } = stateContextCustom();
  const [select, setSelect] = useState(false)

  const navigation = document.querySelectorAll(".navigation");
  const colorScheme = document.querySelectorAll(".colorScheme");
  const behaviour = document.querySelectorAll(".behaviour");

  const handleNavigationActive = (e) => {
    // const activeClass = e.target.classList;
    // activeClass.contains("active") ? activeClass.remove("active") : activeClass.add("active")
    setSelect(!select)
    navigation.forEach((i) => {
      i.classList.remove("selected");
      e.target.classList.add("selected");
    });

  };
  const handleColorActive = (e) => {
    setSelect(!select)
    colorScheme.forEach((i) => {
        i.classList.remove("selected");
        e.target.classList.add("selected");
      }); 
  }
  const handleBehaviourActive = (e) => {
    setSelect(!select)
    behaviour.forEach((i) => {
        i.classList.remove("selected");
        e.target.classList.add("selected");
      }); 
  }

  return (
    <div className="px-8 shadow-2xl">
      <CgClose
        onClick={toggleSetting}
        className="cursor-pointer text-xl ml-auto my-4"
      />
      <img
        className="mx-auto"
        src="https://d33wubrfki0l68.cloudfront.net/0e108d71de2aec22aae71d891ecabd0ec28dc2bb/8484b/assets/images/illustrations/customization-illustration.svg"
        alt=""
      />
      <div className="flex items-center text-center flex-col py-5 border-b">
        <h2 className="font-bold">Make Dashly Your Own</h2>
        <p className="text-sm text-[#334457]">
          Set preferences that will be cookied for your live preview
          demonstration
        </p>
      </div>
      <div className="py-5">
        <h4 className="text-sm font-bold ">Color Scheme</h4>
        <p className="text-xs text-[#7E8790]">
          Overall light or dark presentation.
        </p>
        <div className="flex mt-4" onClick={handleColorActive}>
          <button  className=" colorScheme selected flex items-center px-3 py-2 gap-3 cursor-pointer select-none active justify-center w-[109px] text-[#00BAC7] text-sm font-semibold  border rounded-l-full border-[#00BAC7]">
            <PiSun className="text-lg" /> Light
          </button>
          <button  className=" colorScheme flex items-center px-3 py-2 gap-3 cursor-pointer select-none justify-center w-[109px] text-[#00BAC7] text-sm font-semibold border-y border-[#00BAC7]">
            <PiMoon className="text-lg" /> Dark
          </button>
          <button  className=" colorScheme flex items-center px-3 py-2 gap-3 cursor-pointer select-none justify-center w-[109px] text-[#00BAC7] text-sm font-semibold border rounded-r-full border-[#00BAC7]">
            <TbSunMoon className="text-lg" /> Auto
          </button>
        </div>
      </div>
      <div className="py-5">
        <h4 className="text-sm font-bold ">Navigation Color</h4>
        <p className="text-xs text-[#7E8790]">
          Usually dictated by the color scheme, but can be overriden.
        </p>
        <div className="flex mt-4 " onClick={handleNavigationActive}>
          <button
            className={`navigation selected flex items-center px-3 py-2 gap-3 cursor-pointer select-none justify-center w-full text-[#00BAC7] text-sm font-semibold  border rounded-l-full border-[#00BAC7]`}
          >
            Default
          </button>
          <button
            className={`navigation flex items-center px-3 py-2 gap-3 cursor-pointer select-none justify-center w-full text-[#00BAC7] text-sm font-semibold  border rounded-r-full border-[#00BAC7]`}
          >
            Inverted
          </button>
        </div>
      </div>
      <div className="py-5">
        <h4 className="text-sm font-bold">Sidebar behaviour</h4>
        <p className="text-xs text-[#7E8790]">
          Standard navigation sizing or minified icons with dropdowns.
        </p>
        <div onClick={handleBehaviourActive} className="flex mt-4">
          <button className="behaviour selected flex items-center px-3 py-2 gap-3 cursor-pointer select-none justify-center w-[109px] text-[#00BAC7] text-sm font-semibold  border rounded-l-full border-[#00BAC7]">
            Fixed
          </button>
          <button className="behaviour flex items-center px-3 py-2 gap-3 cursor-pointer select-none justify-center w-[109px] text-[#00BAC7] text-sm font-semibold border-y border-[#00BAC7]">
            Condensed
          </button>
          <button className="behaviour flex items-center px-3 py-2 gap-3 cursor-pointer select-none justify-center w-[109px] text-[#00BAC7] text-sm font-semibold border rounded-r-full border-[#00BAC7]">
            Scrollable
          </button>
        </div>
      </div>
      <div className="py-5 flex justify-between items-center">
        <div>
          <h4 className="text-sm font-bold flex items-center gap-2">
            <PiArrowsHorizontalBold className="text-xl" />
            Fluid layout
          </h4>
          <p className="text-xs text-[#7E8790]">
            Toggle container layout system
          </p>
        </div>
        <Switch />
      </div>
      <div className="py-5 border-b flex justify-between items-center">
        <div>
          <h4 className="text-sm font-bold flex items-center gap-2">
            <TbArrowBarLeft className="text-xl" />
            RTL Mode
          </h4>
          <p className="text-xs text-[#7E8790]">
            Switch your language direction
          </p>
        </div>
        <Switch />
      </div>
      <div className="flex gap-3 py-4 ">
        <button className="flex footer-active items-center px-3 py-2 gap-3 cursor-pointer select-none justify-center w-full text-sm font-semibold  border rounded-full">
          <PiArrowCounterClockwise /> Reset
        </button>
        <button className="flex items-center px-3 py-2 gap-3 cursor-pointer select-none justify-center w-full text-sm font-semibold border rounded-full">
          Preview
        </button>
      </div>
    </div>
  );
};

export default SettingSidebar;
