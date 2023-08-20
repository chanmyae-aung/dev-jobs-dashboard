import React, { useState } from 'react'
import UserTable from '../../components/UserTable'
import Cookies from 'js-cookie'
import { useGetAllApplicantsQuery } from '../../api/userApi';

export default function Applicants() {
  const token = Cookies.get("token");
  const [currentPage, setCurrentPage] = useState(1)
  const {data} = useGetAllApplicantsQuery({token, currentPage})
  console.log(data)
  const applicants = data?.data
  return (
    <div>
      <UserTable lastpage ={data?.meta.last_page} applicants={applicants} name={"Applicant Name"} title={"Manage Applicants"}/>
    </div>
  )
}
