import { Table } from "@mantine/core";
import React from "react";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ManageTable() {
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
    <tr key={element.id} className="cursor-pointer hover:bg-blue-50">
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.user_id}</td>
      <td>{element.applied}</td>
      <td>{element.applicants}</td>
      <td className="flex gap-5">
        <MdOutlineEdit className="text-3xl bg-green-50 text-green-500 rounded-full hover:bg-green-500 hover:text-green-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineDeleteOutline className="text-3xl bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-red-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
      </td>
    </tr>
  ));
  return (
    <main className="m-5 bg-white rounded">
      <div>
        <h4 className="p-5 border-b">Manage Jobs</h4>
      </div>
      <section className="px-5">
        <Table verticalSpacing={"sm"}>
          <thead>
            <tr>
              <th>No.</th>
              <th>User's Name</th>
              <th>Email</th>
              <th>User ID</th>
              <th>Applied Jobs</th>
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
