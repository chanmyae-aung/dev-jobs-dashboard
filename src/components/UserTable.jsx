import { Table } from "@mantine/core";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllUsersQuery } from "../api/userApi";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
  BiShowAlt,
} from "react-icons/bi";

export default function ManageTable({ title, name, shadow, applicants }) {
  const dark = Cookies.get("dark");
  const token = Cookies.get("token");
  const nav = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useGetAllUsersQuery({ token, currentPage });
  const users = applicants ? applicants : data?.data;
  console.log(data);
  const rows = users?.map((el) => (
    <tr
      // onClick={() => nav("/user-detail/${el.id}")}
      key={el.id}
      className={`cursor-pointer text-slate-700 ${
        dark ? "hover:bg-gray-500" : "hover:bg-blue-50"
      }`}
    >
      <td>{el.id}</td>
      <td className="font-semibold">{el.name}</td>
      <td>{el.email}</td>
      <td>{el.id}</td>
      <td>{el.jobs_count}</td>
      {/* <td>{el.applicants}</td> */}
      <td className="flex gap-5">
        {el.jobs_count ? <BiShowAlt onClick={() => nav(`/user-detail/${el.id}`)}
          className="text-3xl bg-green-50 text-blue-500 rounded-full hover:bg-blue-500 hover:text-blue-50 p-1.5 cursor-pointer transition-all duration-200 ease-in"
        /> : ""}
      </td>
    </tr>
  ));
  return (
    <main className={`${shadow} ${dark && "dark"} m-5 bg-white border rounded`}>
      <div>
        <h4 className="p-5 border-b">{title}</h4>
      </div>
      <section className="px-5">
        <Table sx={dark && { color: "#F1F5F9" }} verticalSpacing={"lg"}>
          <thead>
            <tr>
              <th style={dark && { color: "#F1F5F9" }}>No.</th>
              <th style={dark && { color: "#F1F5F9" }}>
                {name ? name : "User Name"}
              </th>
              <th style={dark && { color: "#F1F5F9" }}>Email</th>
              <th style={dark && { color: "#F1F5F9" }}>User ID</th>
              <th style={dark && { color: "#F1F5F9" }}>Applied Jobs</th>
              {/* <th>Applicants</th> */}
              <th style={dark && { color: "#F1F5F9" }}>More Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <footer className=" border-t py-5 flex items-center justify-end w-full">
          <div className="flex items-center border rounded ">
            <BiChevronsLeft
              onClick={() => currentPage > 1 && setCurrentPage(1)}
              className={`${
                currentPage === 1 && "text-slate-200"
              } cursor-pointer  w-8 h-7 p-1`}
            />
            <BiChevronLeft
              onClick={() =>
                currentPage > 1 && setCurrentPage((prevPage) => prevPage - 1)
              }
              className={`${
                currentPage === 1 && "text-slate-200"
              } cursor-pointer border-x w-8 h-7 p-1`}
            />
            <p className=" px-5">{`${currentPage}  -  ${data?.meta.last_page}`}</p>
            <BiChevronRight
              onClick={() =>
                currentPage < data?.last_page &&
                setCurrentPage((prevPage) => prevPage + 1)
              }
              className={`${
                currentPage === data?.meta.last_page && "text-slate-200"
              } cursor-pointer border-x w-8 h-7 p-1`}
            />
            <BiChevronsRight
              onClick={() =>
                currentPage < data?.meta.last_page &&
                setCurrentPage(data?.meta.last_page)
              }
              className={`${
                currentPage === data?.meta.last_page && "text-slate-200"
              } cursor-pointer  w-8 h-7 p-1`}
            />
          </div>
        </footer>
      </section>
    </main>
  );
}
