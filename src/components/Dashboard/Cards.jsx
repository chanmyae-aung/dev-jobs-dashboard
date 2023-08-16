import Cookies from "js-cookie";
import React from "react";
import { useGetTotalQuery } from "../../api/dashboardApi";
import { Link } from "react-router-dom";

export default function Cards() {
  const token = Cookies.get("token");
  const { data } = useGetTotalQuery(token);
  console.log(data);
  return (
    <main className="flex justify-between m-5 gap-5">
      <section className="bg-green-50 rounded shadow flex justify-between p-5 w-72">
        <Link className="flex justify-between items-center w-full" to={"/manage-jobs"}>
          <div>
            <h2 className="text-green-500">{data?.data.job_count}</h2>
            <p className="font-semibold">Total Jobs</p>
          </div>
          <img
            className="w-12 h-12"
            src="https://img.icons8.com/?size=512&id=X5pOSTT8dZ7z&format=png"
            alt=""
          />
        </Link>
      </section>
      <section className="bg-orange-50 rounded shadow flex justify-between p-5 w-72">
        <Link className="flex justify-between items-center w-full" to={"/manage-companies"}>
          <div>
            <h2 className="text-[#FF8800]">{data?.data.company_count}</h2>
            <p className="font-semibold">Total Companies</p>
          </div>
          <img
            className="w-12 h-12"
            src="https://img.icons8.com/?size=512&id=LdUk2U3hz8Oj&format=png"
            alt=""
          />
        </Link>
      </section>
      <section className="bg-blue-50 rounded shadow flex justify-between p-5 w-72">
        <Link className="flex justify-between items-center w-full" to={"/all-user"}>
          <div>
            <h2 className="text-blue-500">{data?.data.user_count}</h2>
            <p className="font-semibold">Total Users</p>
          </div>
          <img
            className="w-12 h-12"
            src="https://img.icons8.com/?size=512&id=31eTc5EEf90V&format=png"
            alt=""
          />
        </Link>
      </section>
      <section className="bg-red-50 rounded shadow flex justify-between p-5 w-72">
        <Link className="flex justify-between items-center w-full" to={"/applicants"}>
          <div>
            <h2 className="text-red-500">{data?.data.applicants}</h2>
            <p className="font-semibold">Total Applicants</p>
          </div>
          <img
            className="w-12 h-12"
            src="https://img.icons8.com/?size=512&id=GaLLv3Q7Flgj&format=png"
            alt=""
          />
        </Link>
      </section>
    </main>
  );
}
