import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { PiSunBold, PiBell } from "react-icons/pi";
import Theme from "./Theme";
import NotiSidebar from "./NotiSidebar";
import Profile from "./Profile";
import Cookies from "js-cookie";
import { useGetProfileQuery } from "../../api/authApi";

const Navbar = () => {
  const dark = Cookies.get("dark")
  const token = Cookies.get("token")
  const [show, setShow] = useState(false);
  const [showNoti, setShowNoti] = useState();
  const [showProfile, setShowProfile] = useState(false);
  const {data} = useGetProfileQuery(token)
  const toggleShow = () => {
    setShow(!show);
  };
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };
  const toggleNoti = () => {
    setShowNoti(!showNoti);
  };
  const closeSideBars = () => {
    showNoti && toggleNoti();
    showProfile && toggleProfile();
  };

  return (
    <>
      <main className={`${dark && "dark"} flex bg-white shadow relative w-full items-center justify-center md:justify-between md:px-5 p-3 bg-transparent`}>
        <div className=" flex">
          <input
            type="text"
            className={`${dark && "body-dark border-gray-500"} w-full border-y border-l text-sm py-2 outline-none px-5 rounded-l`}
            placeholder="Search..."
          />
          <button className="bg-blue-500 px-3 p-2 text-white rounded-r">
            <BiSearch className="" />
          </button>
        </div>
        <div className="flex items-center">
          {/* Select Theme */}
          <div className="relative mx-5">
            <button onClick={toggleShow} className={`${dark ? "bg-gray-500 text-slate-100" : "bg-white text-slate-600"} nav-btn `}>
              <PiSunBold className="" />
            </button>
            <div
              onClick={() => setShow(false)}
              className={`${
                !show ? "scale-y-0" : "scale-y-1"
              } transform transition origin-top duration-200 absolute right-0 z-10`}
            >
              <Theme />
            </div>
          </div>
          {/* closed sidebar  */}
          <div
            onClick={closeSideBars}
            className={
              showNoti || showProfile
                ? "w-full h-screen ml-[110px] fixed top-0 right-0 bg-transparent z-10"
                : null
            }
          ></div>
          <div className="flex gap-5 border-x px-5">
            {/* Notification */}
            <div className="relative">
              <button onClick={toggleNoti} className={`${dark ? "bg-gray-500 text-slate-100" : "bg-white text-slate-600"} nav-btn `}>
                <PiBell />
                <span className="text-xs bg-red-500 rounded-full text-white px-1.5 absolute -top-2 -right-3 z-10">
                  20+
                </span>
              </button>
            </div>
            <div
              className={`${
                !showNoti ? "translate-x-[400px]" : "translate-x-0"
              } shadow-lg transition-all ease-linear duration-200 w-[400px] fixed right-0 top-0  h-screen bg-white z-10 overflow-y-scroll `}
            >
              <NotiSidebar toggleNoti={toggleNoti} />
            </div>
          </div>
          {/* Profile */}
          <div className="relative cursor-pointer">
            <div
              onClick={toggleProfile}
              className="w-[40px] h-[40px] p-1 nav-btn flex justify-center items-center  rounded-full overflow-hidden ml-5"
            >
              <img
                className=""
                src={data?.data.image}
                alt=""
              />
            </div>
            <div
              className={`${
                !showProfile ? "scale-y-0" : "scale-y-1"
              } transform transition origin-top duration-200 z-10 absolute right-0`}
            >
              <Profile toggleProfile={toggleProfile} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
