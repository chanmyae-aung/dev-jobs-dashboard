import React from "react";
import { Route, Routes } from "react-router-dom";
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
import LoginGuard from "../components/RouteGuard/LoginGuard";
import Login from "../pages/Login";
import RouteGuard from "../components/RouteGuard/RouteGuard";
import ErrorPage from "../components/RouteGuard/ErrorPage";
import EditCompany from "../pages/Company/EditCompany";
import JobDetails from "../pages/Jobs/JobDetails";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <RouteGuard>
              <Login />
            </RouteGuard>
          }
        />
        <Route
          path="/"
          element={
            <LoginGuard>
              <Home />
            </LoginGuard>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="create-job" element={<CreateJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="job-details/:id" element={<JobDetails />} />
          <Route path="create-company" element={<CreateCompany />} />
          <Route path="edit-company/:id" element={<EditCompany />} />
          <Route path="manage-companies" element={<ManageCompanies />} />
          <Route path="company-detail/:id" element={<CompanyInfo />} />
          <Route path="all-user" element={<AllUser />} />
          <Route path="user-detail" element={<UserDetail />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="profile" element={<Profile />} />
        </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Path;
