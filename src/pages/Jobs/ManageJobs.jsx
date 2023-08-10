import { Table } from '@mantine/core';
import React from 'react'

export default function ManageJobs() {
  const elements = [
    {id:1, job_id: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    {id:2, job_id: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    {id:3, job_id: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    {id:4, job_id: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    {id:5, job_id: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.job_id}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  return (
    <main className='m-5 bg-white rounded'>
    <div>
    <h4 className="p-5 border-b">Manage Jobs</h4>
    </div>
    <section className='px-5'>
    <Table verticalSpacing={"md"}>
      <thead >
        <tr >
          <th>No</th>
          <th>Job ID</th>
          <th>Position</th>
          <th>Company</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    </section>
    </main>
  )
}
