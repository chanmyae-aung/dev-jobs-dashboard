
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import CreateJob from "../pages/Jobs/CreateJob";
import CreateCompany from "../pages/Company/CreateCompany";
import AllUser from "../pages/User/AllUser";
import Applicants from "../pages/User/Applicants";
import Profile from "../pages/Admin/Profile";
import ManageJobs from "../pages/Jobs/ManageJobs";
import ManageCompanies from "../pages/Company/ManageCompanies";
import CompanyInfo from "../pages/Company/CompanyInfo";
import UserDetail from "../pages/User/UserDetail";

const Path = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="w-full h-screen flex justify-center items-center">
  //       <ClipLoader size={40} color='#00BAC7'/>
  //     </div>
  //   );
  // }
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard/>}/>
          <Route path="create-job" element={<CreateJob/>}/>
          <Route path="manage-jobs" element={<ManageJobs/>}/>
          <Route path="create-company" element={<CreateCompany/>}/>
          <Route path="manage-companies" element={<ManageCompanies/>}/>
          <Route path="company-info" element={<CompanyInfo/>}/>
          <Route path="all-user" element={<AllUser/>}/>
          <Route path="user-detail" element={<UserDetail/>}/>
          <Route path="applicants" element={<Applicants/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Path;
