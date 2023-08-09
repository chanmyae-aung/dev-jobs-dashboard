import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";

export default function Home() {
  return (
    <div className="w-screen flex">
      <div className="w-[18%]">
        <SideBar />
      </div>
      <div className="w-[82%] h-screen overflow-y-scroll bg-slate-100">
        <div className="sticky top-0">
        <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
