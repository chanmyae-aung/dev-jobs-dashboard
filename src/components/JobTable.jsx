import { Table } from "@mantine/core";
import React from "react";
import { MdOutlineDeleteOutline, MdOutlineEdit, MdViewInAr } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function JobTable({title}) {
  const nav = useNavigate();
  const elements = [
    {
      id: 1,
      job_id: 6,
      type: "Full Time",
      symbol: "C",
      applicants: 5,
      name: "Carbon",
    },
    {
      id: 2,
      job_id: 7,
      type: "Full Time",
      symbol: "N",
      applicants: 5,
      name: "Nitrogen",
    },
    {
      id: 3,
      job_id: 39,
      type: "Full Time",
      symbol: "Y",
      applicants: 5,
      name: "Yttrium",
    },
    {
      id: 4,
      job_id: 56,
      type: "Full Time",
      symbol: "Ba",
      applicants: 5,
      name: "Barium",
    },
    {
      id: 5,
      job_id: 58,
      type: "Full Time",
      symbol: "Ce",
      applicants: 5,
      name: "Cerium",
    },
  ];
  const rows = elements.map((element) => (
    <tr key={element.id} className="cursor-pointer hover:bg-blue-50">
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.job_id}</td>
      <td>{element.type}</td>
      <td>{element.applicants}</td>
      <td className="flex gap-5">
        <MdViewInAr className="text-3xl bg-green-50 text-blue-500 rounded-full hover:bg-blue-500 hover:text-blue-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineEdit className="text-3xl bg-green-50 text-green-500 rounded-full hover:bg-green-500 hover:text-green-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineDeleteOutline className="text-3xl bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-red-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
      </td>
    </tr>
  ));
  return (
    <main className={`${title ? "" : "m-5 border"} bg-white  rounded`}>
      <div>
        <h4 className={`p-5 border-b`}>{title ? title : "Manage Jobs"}</h4>
      </div>
      <section className="px-5">
        <Table verticalSpacing={"sm"}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Position</th>
              <th>Company</th>
              <th>Job ID</th>
              <th>Type</th>
              <th>Applicants</th>
              <th>More Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </section>
    </main>
  );
}
