import React from "react";
import Tabel from "../components/Dashboard/Tabel";
import StackedBar from "../components/Dashboard/StackedBar";
import Cards from "../components/Dashboard/Cards";
import UserTable from "../components/UserTable";

export default function Dashboard() {
  return (
    <div className="flex flex-col ">
      <Cards />
      <section className="flex justify-between items-center mx-5 gap-5 ">
        <div className="w-[40%]">
          <Tabel />
        </div>
        <div className="w-[60%]">
          <StackedBar />
        </div>
      </section>
      <UserTable shadow={"shadow"} title={"Users"} />
    </div>
  );
}
