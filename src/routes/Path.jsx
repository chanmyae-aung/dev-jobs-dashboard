
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import { ClipLoader } from "react-spinners";
import Home from "../pages/Home";
import CreateJob from "../pages/CreateJob";
import JobLists from "../pages/JobLists";
import CompanyLists from "../pages/CompanyLists";
import CreateCompany from "../pages/CreateCompany";
import AllUser from "../pages/AllUser";
import Applicants from "../pages/Applicants";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const Path = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <ClipLoader size={40} color='#00BAC7'/>
      </div>
    );
  }
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard/>}/>
          <Route path="create-job" element={<CreateJob/>}/>
          <Route path="job-lists" element={<JobLists/>}/>
          <Route path="create-company" element={<CreateCompany/>}/>
          <Route path="company-lists" element={<CompanyLists/>}/>
          <Route path="all-user" element={<AllUser/>}/>
          <Route path="applicants" element={<Applicants/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Path;
