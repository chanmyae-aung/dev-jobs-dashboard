
import Cookies from "js-cookie";
import React from "react";
import { useGetPopularJobsQuery } from "../../api/dashboardApi";
import { Table } from "@mantine/core";

export default function PopularJobs() {
    const token = Cookies.get("token")
    const {data} = useGetPopularJobsQuery(token)
    // console.log(data)
  const elements = data?.data;
  const rows = elements?.map((element, index) => (
    <tr key={element.id} className="text-sm ">
      <td>{index +1}</td>
      <td>{element.position}</td>
      <td>({element.candidates}) posts</td>
    </tr>
  ));

  return (
    <section className="bg-white rounded border h-full">
      <h4 className="p-4 text-sm border-b">Popular Jobs</h4>
      <Table verticalSpacing={"md"}>
        <thead>
          <tr className="text-sm text-slate-700">
            <th>No.</th>
            <th>Position</th>
            <th>Candidates</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </section>
  );
}
