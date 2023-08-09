import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { TbMathGreater } from "react-icons/tb";
import Status from "./Status";
import { stateContextCustom } from "../../context/StateContext";

const Profile = () => {
  const {showStatus, toggleStatus} = stateContextCustom()
  return (
    <div
      className={`shadow-lg flex flex-col mt-3 justify-center w-60 rounded-lg bg-white`}
    >
      <div className="flex gap-2 items-center border-b p-4">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
          alt=""
        />
        <div className="text-sm">
          <h4 className="font-bold">Ellie Tucker</h4>
          <p>ellie.tucker@dashly.com</p>
        </div>
      </div>
      <div className="flex flex-col p-2 border-b text-sm relative">
        <div onClick={toggleStatus} className="nav-dropdown">
          <button className="flex items-center gap-3">
            Set status <TbMathGreater className="text-xs" />
          </button>
          <div className={`${!showStatus ? "hidden":"block"} absolute right-[250px] top-0`}>
          <Status />
          </div>
        </div>
        <button className="nav-dropdown">Profile & account</button>
        <button className="nav-dropdown">Settings</button>
      </div>
      <div className="p-2">
        <button className="nav-dropdown w-full text-sm">Sign out</button>
      </div>
    </div>
  );
};

export default Profile;
