import React, { useState } from "react";
import ConfirmBox from "../components/ComfirmBox";
import { Table } from "@mantine/core";
import { BiChevronLeft, BiChevronRight, BiChevronsLeft, BiChevronsRight, BiShowAlt } from "react-icons/bi";
import { MdOutlineDeleteOutline, MdOutlineEdit, MdViewInAr } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDeleteJobMutation, useGetJobQuery } from "../api/jobApi";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { firstPage, lastPage, nextPage, prevPage } from "../features/authSlice";

export default function JobTable({title}) {
  const token = Cookies.get("token")
  const [confirm, setConfirm] = useState(false)
  const [id, setId] = useState(null)
  const dispatch = useDispatch()
  // const [currentPage, setCurrentPage] = useState(1)
  const currentPage = useSelector(state => (state.authSlice.currentPage))
  const [deleteJob] = useDeleteJobMutation()
  const {data} = useGetJobQuery({token, currentPage})
  const jobs = data?.data.data
  const nav = useNavigate();

  const handleDelete = async () => {
    const {data} = await deleteJob({token, id})
  }
  
  const rows = jobs?.map((el, index) => (
    <tr key={el.id} className="cursor-pointer text-slate-700 hover:bg-blue-50">
      <td>{index +1}</td>
      <td className="truncate font-semibold">{el.position}</td>
      <td className="truncate">{el.company.name}</td>
      <td>{el.id}</td>
      <td>{el.shift === 0 ? "Part Time" : "Full Time"}</td>
      <td>{el.candidates}</td>
      <td className="flex gap-5">
        <BiShowAlt onClick={() => nav(`/job-details/${el.id}`)} className="text-3xl bg-green-50 text-blue-500 rounded-full hover:bg-blue-500 hover:text-blue-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineEdit onClick={() => nav(`/edit-job/${el.id}`)} className="text-3xl bg-green-50 text-green-500 rounded-full hover:bg-green-500 hover:text-green-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineDeleteOutline onClick={() => {
            setId(el.id);
            setConfirm(true);
          }} className="text-3xl bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-red-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
      </td>
    </tr>
  ));
  return (
    <main className={`${title ? "" : "m-5 border"} bg-white  rounded`}>
      <div>
        {confirm && (
          <ConfirmBox
            confirm={confirm}
            setConfirm={setConfirm}
            deleteJob={handleDelete}
          />
        )}
      </div>
      <div>
        <h4 className={`p-5 border-b`}>{title ? title : "Manage Jobs"}</h4>
      </div>
      <section className="px-5">
        <Table verticalSpacing={"lg"}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Position</th>
              <th>Company</th>
              <th>Job ID</th>
              <th>Type</th>
              <th>Posts</th>
              <th>More Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <footer className=" border-t py-5 flex items-center justify-end w-full">
          <div className="flex items-center border rounded ">
            <BiChevronsLeft
              onClick={() =>  currentPage > 1 && dispatch(firstPage())}
              className={`${currentPage === 1 && "text-slate-200"} cursor-pointer  w-8 h-7 p-1`}
            />
            <BiChevronLeft
              onClick={() => currentPage > 1 && dispatch(prevPage())}
              className={`${currentPage === 1 && "text-slate-200"} cursor-pointer border-x w-8 h-7 p-1`}
            />
            <p className=" px-5">{`${currentPage}  -  ${data?.data.last_page}`}</p>
            <BiChevronRight
              onClick={() =>  currentPage < data?.data.last_page && dispatch(nextPage())}
              className={`${currentPage === data?.data.last_page && "text-slate-200"} cursor-pointer border-x w-8 h-7 p-1`}
            />
            <BiChevronsRight
              onClick={() =>  currentPage < data?.data.last_page && dispatch(lastPage({currentPage: data?.data.last_page}))}
              className={`${currentPage === data?.data.last_page && "text-slate-200"} cursor-pointer  w-8 h-7 p-1`}
            />
          </div>
        </footer>
      </section>
    </main>
  );
}
