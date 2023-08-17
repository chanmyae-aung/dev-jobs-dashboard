import React, { useState } from "react";
import ConfirmBox from "../components/ComfirmBox";
import { Table } from "@mantine/core";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
  BiShowAlt,
} from "react-icons/bi";
import {
  MdOutlineDeleteOutline,
  MdOutlineEdit,
  MdViewInAr,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDeleteJobMutation, useGetJobQuery } from "../api/jobApi";
import Cookies from "js-cookie";
import { useGetApplicantDetailQuery } from "../api/userApi";

export default function AppliedTable({ title, id }) {
  const token = Cookies.get("token");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: job } = useGetJobQuery({ token, currentPage });
  const jobs = job?.data.data;
  const nav = useNavigate();
  const { data, isFetching } = useGetApplicantDetailQuery({ id, token });
  console.log(data);

  const rows = data?.map((el, index) => (
    <tr key={el.id} className=" text-slate-700 hover:bg-blue-50">
      <td>{index + 1}</td>
      <td className="truncate font-semibold">{el.position}</td>
      <td className="truncate">{el.job.company.name}</td>
      <td>{el.job_id}</td>
      <td>
        <a target="_blank"
          className="border rounded border-blue-200 hover:bg-blue-200 px-3 py-1"
          href={el.cv}
          download={true}
        >
          download cv
        </a>
      </td>
    </tr>
  ));
  return (
    <main className={`${title ? "" : "m-5 border"} bg-white  rounded`}>
      <div>
        <h4 className={`p-5 border-b`}>{title ? title : "Manage Jobs"}</h4>
      </div>
      <section className="px-5 h-[27.5rem] relative overflow-y-scroll">
        <Table verticalSpacing={"lg"}>
          <thead className="sticky top-0 bg-white">
            <tr>
              <th>No.</th>
              <th>Position</th>
              <th>Company</th>
              <th>Job ID</th>
              <th>Download CV</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        {/* <footer className=" border-t py-5 flex items-center justify-end w-full">
          <div className="flex items-center border rounded ">
            <BiChevronsLeft
              onClick={() =>  currentPage > 1 && setCurrentPage(1)}
              className={`${currentPage === 1 && "text-slate-200"} cursor-pointer  w-8 h-7 p-1`}
            />
            <BiChevronLeft
              onClick={() => currentPage > 1 && setCurrentPage((prevPage) =>  prevPage - 1)}
              className={`${currentPage === 1 && "text-slate-200"} cursor-pointer border-x w-8 h-7 p-1`}
            />
            <p className=" px-5">{`${currentPage}  -  ${data?.data.last_page}`}</p>
            <BiChevronRight
              onClick={() =>  currentPage < data?.data.last_page && setCurrentPage((prevPage) => prevPage + 1)}
              className={`${currentPage === data?.data.last_page && "text-slate-200"} cursor-pointer border-x w-8 h-7 p-1`}
            />
            <BiChevronsRight
              onClick={() =>  currentPage < data?.data.last_page && setCurrentPage(data?.data.last_page)}
              className={`${currentPage === data?.data.last_page && "text-slate-200"} cursor-pointer  w-8 h-7 p-1`}
            />
          </div>
        </footer> */}
      </section>
    </main>
  );
}
