import React from "react";
import Tabel from "../components/Dashboard/Tabel";
import StackedBar from "../components/Dashboard/StackedBar";
import Users from "../components/Dashboard/Users";
import Cards from "../components/Dashboard/Cards";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-7 p-10">
      <Cards />
      <section className="flex justify-between items-center gap-7 w-full">
        <Tabel />
        <StackedBar />
      </section>
      <Users />
    </div>
  );
}
