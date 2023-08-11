import { Table } from '@mantine/core';
import React from 'react'
import { MdOutlineDeleteOutline, MdOutlineEdit, MdViewInAr } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function CompanyTable() {
    const nav = useNavigate()
  const elements = [
    {id:1, job_id: 6, applicants: 12, email: 'C', jobs: 10, name: 'Carbon' },
    {id:2, job_id: 7, applicants: 14, email: 'N', jobs: 10, name: 'Nitrogen' },
    {id:3, job_id: 39, applicants: 8, email: 'Y', jobs: 10, name: 'Yttrium' },
    {id:4, job_id: 56, applicants: 13, email: 'Ba', jobs: 10, name: 'Barium' },
    {id:5, job_id: 58, applicants: 14, email: 'Ce', jobs: 10, name: 'Cerium' },
  ];
  const rows = elements.map((element) => (
    <tr onClick={() => nav("/company-info")} className='cursor-pointer hover:bg-blue-50' key={element.id}>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.email}</td>
      <td>{element.job_id}</td>
      <td>{element.jobs}</td>
      <td>{element.applicants}</td>
      <td className="flex gap-5">
        <MdViewInAr className="text-3xl bg-green-50 text-blue-500 rounded-full hover:bg-blue-500 hover:text-blue-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineEdit className="text-3xl bg-blue-50 text-green-500 rounded-full hover:bg-green-500 hover:text-green-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineDeleteOutline className="text-3xl bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-red-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
      </td>
    </tr>
  ));
  return (
    <main className='m-5 bg-white border rounded'>
    <div>
    <h4 className="p-5 border-b">Manage Companies</h4>
    </div>
    <section className='px-5'>
    <Table verticalSpacing={"md"}>
      <thead >
        <tr >
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
    </section>
    </main>
  )
}
