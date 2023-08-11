import React, { useState } from "react";
import { MdAdminPanelSettings, MdDashboard, MdWork } from "react-icons/md";
import { FaAngleDown, FaUser } from "react-icons/fa";
import { SiOnlyoffice } from "react-icons/si";
import { Link, NavLink, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

export default function SideBar() {
  const dark = Cookies.get("dark")
  const location = useLocation();
  const [showJobs, setShowJobs] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <main id="sidebar" className={`${dark && "dark"} h-screen`}>
      <div className="flex items-center gap-2 border-b py-3 px-8">
        <img className="w-10"
          src="https://img.icons8.com/?size=512&id=sFFBQN8kzSOS&format=png"
          alt=""
        />
        <h1 className=" font-bold text-xl text-blue-500 text-center">devjobs</h1>
      </div>
      <div className="mt-7">
      <section id="dashboard">
        <NavLink to={"/"} className="px-8 flex items-center gap-3 py-3">
          <MdDashboard className="text-xl" />
          <h4>Dashboard</h4>
        </NavLink>
      </section>
      <section id="jobs">
        <div
          className={`${active && "dropdown"}`}
          onClick={() => setShowJobs(!showJobs)}
        >
          <div
            className={` flex items-center justify-between px-8 rounded-e-full cursor-pointer`}
          >
            <div className=" flex items-center gap-3 py-3">
              <MdWork className="text-xl" />
              <h4>Jobs</h4>
            </div>
            <FaAngleDown
              className={`${showJobs && "-rotate-180"} duration-300`}
            />
          </div>
          <ul
            onClick={(e) => e.stopPropagation()}
            className={`${
              showJobs ? "min-h-max opacity-100" : "h-0 opacity-0 hidden"
            } duration-10 ms-8 text-sm cursor-pointer`}
          >
            <NavLink
              to={"create-job"}
              className={`px-8 flex items-center gap-3 py-3`}
            >
              <h5>Create Job</h5>
            </NavLink>
            <NavLink
              to={"manage-jobs"}
              className={`px-8 flex items-center gap-3 py-3`}
            >
              <h5>Manage Jobs</h5>
            </NavLink>
          </ul>
        </div>
      </section>
      <section id="company">
        <div
          className={`${active && "dropdown"}`}
          onClick={() => setShowCompany(!showCompany)}
        >
          <div
            className={` flex items-center justify-between px-8 rounded-e-full cursor-pointer`}
          >
            <div className=" flex items-center gap-3 py-3">
              <SiOnlyoffice className="text-xl" />
              <h4>Company</h4>
            </div>
            <FaAngleDown
              className={`${showCompany && "-rotate-180"} duration-300`}
            />
          </div>
          <ul
            onClick={(e) => e.stopPropagation()}
            className={`${
              showCompany ? "min-h-max opacity-100" : "h-0 opacity-0 hidden"
            } duration-10 ms-8 text-sm cursor-pointer`}
          >
            <NavLink
              to={"create-company"}
              className={`px-8 flex items-center gap-3 py-3`}
            >
              <h5>Create Company</h5>
            </NavLink>
            <NavLink
              to={"manage-companies"}
              className={`px-8 flex items-center gap-3 py-3`}
            >
              <h5>Manage Company</h5>
            </NavLink>
          </ul>
        </div>
      </section>
      <section id="user">
        <div
          className={`${active && "dropdown"}`}
          onClick={() => setShowUser(!showUser)}
        >
          <div
            className={` flex items-center justify-between px-8 rounded-e-full cursor-pointer`}
          >
            <div className=" flex items-center gap-3 py-3">
              <FaUser className="text-xl" />
              <h4>User</h4>
            </div>
            <FaAngleDown
              className={`${showUser && "-rotate-180"} duration-300`}
            />
          </div>
          <ul
            onClick={(e) => e.stopPropagation()}
            className={`${
              showUser ? "min-h-max opacity-100" : "h-0 opacity-0 hidden"
            } duration-10 ms-8 text-sm cursor-pointer`}
          >
            <NavLink
              to={"all-user"}
              className={`px-8 flex items-center gap-3 py-3`}
            >
              <h5>All User</h5>
            </NavLink>
            <NavLink
              to={"applicants"}
              className={`px-8 flex items-center gap-3 py-3`}
            >
              <h5>Applicants</h5>
            </NavLink>
          </ul>
        </div>
      </section>
      <section id="admin">
        <NavLink to={"/profile"} className="px-8 flex items-center gap-3 py-3">
          <MdAdminPanelSettings className="text-xl" />
          <h4>Admin</h4>
        </NavLink>
      </section>
      </div>
    </main>
  );
}
