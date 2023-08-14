import { Table } from "@mantine/core";
import React, { useState } from "react";
import ConfirmBox from "../components/ComfirmBox";
import {
  MdOutlineDeleteOutline,
  MdOutlineEdit,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  useDeleteCompanyMutation,
  useGetCompanyQuery,
} from "../api/companyApi";
import Cookies from "js-cookie";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
  BiShowAlt,
} from "react-icons/bi";

export default function CompanyTable() {
  const nav = useNavigate();
  const token = Cookies.get("token");
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetCompanyQuery({ token, currentPage });
  console.log(data);
  const [id, setId] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [deleteCompany] = useDeleteCompanyMutation();

  const handleDelete = async (e) => {
    const { data } = await deleteCompany({ token, id });
    console.log(data);
  };

  const rows = data?.data.map((el, index) => (
    <tr className="cursor-pointer hover:bg-blue-50" key={el.id}>
      <td>{index + 1}</td>
      <td className="font-semibold">{el.name.toUpperCase()}</td>
      <td>{el.email}</td>
      <td>{el.id}</td>
      <td>{el.jobs}</td>
      <td>{el.applicants}</td>
      <td className="flex gap-5">
        <BiShowAlt
          onClick={() => nav(`/company-detail/${el.id}`)}
          className="text-3xl bg-green-50 text-blue-500 rounded-full hover:bg-blue-500 hover:text-blue-50 p-1.5 cursor-pointer transition-all duration-200 ease-in"
        />
        <MdOutlineEdit
          onClick={() => nav(`/edit-company/${el.id}`)}
          className="text-3xl bg-blue-50 text-green-500 rounded-full hover:bg-green-500 hover:text-green-50 p-1.5 cursor-pointer transition-all duration-200 ease-in"
        />
        <MdOutlineDeleteOutline
          onClick={() => {
            setId(el.id);
            setConfirm(true);
          }}
          className="text-3xl bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-red-50 p-1.5 cursor-pointer transition-all duration-200 ease-in"
        />
      </td>
    </tr>
  ));

  return (
    <main className="m-5 bg-white border rounded">
      <div>
        {confirm && (
          <ConfirmBox
            confirm={confirm}
            setConfirm={setConfirm}
            deleteCompany={handleDelete}
          />
        )}
      </div>
      <div>
        <h4 className="p-5 border-b">Manage Companies</h4>
      </div>
      <section className="px-5">
        <Table verticalSpacing={"md"}>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company ID</th>
              <th>Posted Jobs</th>
              <th>Applicants</th>
              <th>More Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <footer className=" border-t py-5 flex items-center justify-end w-full">
          <div className="flex items-center border rounded ">
            <BiChevronsLeft
              onClick={() =>  currentPage > 1 && setCurrentPage(1)}
              className={`${currentPage === 1 && "text-slate-200"} cursor-pointer  w-8 h-7 p-1`}
            />
            <BiChevronLeft
              onClick={() => currentPage > 1 && setCurrentPage((prevPage) =>  prevPage - 1)}
              className={`${currentPage === 1 && "text-slate-200"} cursor-pointer border-x w-8 h-7 p-1`}
            />
            <p className=" px-5">{`${currentPage}  -  ${data?.last_page}`}</p>
            <BiChevronRight
              onClick={() =>  currentPage < data?.last_page && setCurrentPage((prevPage) => prevPage + 1)}
              className={`${currentPage === data?.last_page && "text-slate-200"} cursor-pointer border-x w-8 h-7 p-1`}
            />
            <BiChevronsRight
              onClick={() =>  currentPage < data?.last_page && setCurrentPage(data?.last_page)}
              className={`${currentPage === data?.last_page && "text-slate-200"} cursor-pointer  w-8 h-7 p-1`}
            />
          </div>
        </footer>
      </section>
    </main>
  );
}
