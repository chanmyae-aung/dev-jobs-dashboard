import { Table } from "@mantine/core";
import Cookies from "js-cookie";
import React from "react";
import { MdOutlineDeleteOutline, MdOutlineEdit} from "react-icons/md";
import {TbViewfinder} from 'react-icons/tb'
import { useNavigate } from "react-router-dom";

export default function ManageTable({title, name, shadow}) {
  const dark = Cookies.get("dark")
  const nav = useNavigate();
  const elements = [
    {
      id: 1,
      user_id: 6,
      applied: 3,
      symbol: "C",
      applicants: 5,
      name: "Carbon",
    },
    {
      id: 2,
      user_id: 7,
      applied: 3,
      symbol: "N",
      applicants: 5,
      name: "Nitrogen",
    },
    {
      id: 3,
      user_id: 39,
      applied: 3,
      symbol: "Y",
      applicants: 5,
      name: "Yttrium",
    },
    {
      id: 4,
      user_id: 56,
      applied: 3,
      symbol: "Ba",
      applicants: 5,
      name: "Barium",
    },
    {
      id: 5,
      user_id: 58,
      applied: 3,
      symbol: "Ce",
      applicants: 5,
      name: "Cerium",
    },
  ];
  const rows = elements.map((element) => (
    <tr onClick={() => nav("/user-detail")} key={element.id} className={`cursor-pointer ${dark ? "hover:bg-gray-500": "hover:bg-blue-50"}`}>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.user_id}</td>
      <td>{element.applied}</td>
      {/* <td>{element.applicants}</td> */}
      <td className="flex gap-5">
        <TbViewfinder className="text-3xl bg-gray-50 text-blue-500 rounded-full hover:bg-blue-500 hover:text-blue-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineEdit className="text-3xl bg-green-50 text-green-500 rounded-full hover:bg-green-500 hover:text-green-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineDeleteOutline className="text-3xl bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-red-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
      </td>
    </tr>
  ));
  return (
    <main className={`${shadow} ${dark && "dark"} m-5 bg-white border rounded`}>
      <div>
        <h4 className="p-5 border-b">{title}</h4>
      </div>
      <section className="px-5">
        <Table sx={ dark && {color:"#F1F5F9"}} verticalSpacing={"sm"}>
          <thead >
            <tr >
              <th style={dark && {color:"#F1F5F9"}}>No.</th>
              <th style={dark && {color:"#F1F5F9"}}>{name ? name : "User Name"}</th>
              <th style={dark && {color:"#F1F5F9"}}>Email</th>
              <th style={dark && {color:"#F1F5F9"}}>User ID</th>
              <th style={dark && {color:"#F1F5F9"}}>Applied Jobs</th>
              {/* <th>Applicants</th> */}
              <th style={dark && {color:"#F1F5F9"}}>More Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </section>
    </main>
  );
}
