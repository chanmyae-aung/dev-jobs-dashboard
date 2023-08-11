import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import Cookies from "js-cookie";

export default function Home() {
  const dark = Cookies.get("dark")
  return (
    <div className={`flex h-screen overflow-hidden `}>
      <div className="w-[18%]">
        <SideBar />
      </div>
      <div className={`w-[82%] h-screen overflow-y-scroll bg-slate-100 ${dark && "body-dark"}`}>
        <div className={`sticky z-50 top-0 `}>
        <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
