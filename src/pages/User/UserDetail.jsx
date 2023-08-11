import React, { useState } from "react";

import JobTable from "../../components/JobTable";
import { MdFacebook, MdLink, MdLocationOn, MdPhone } from "react-icons/md";

export default function UserDetail() {
  return (
    <main>
      <div className="m-5 bg-white border rounded">
        <h4 className="p-5 border-b">User Profile</h4>
        <div className="w-full flex">
          <section className="p-5 w-[30%] border-r flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <div className="border-2 relative border-blue-500 rounded-full">
                <img
                  className="w-24"
                  src="https://img.icons8.com/?size=512&id=23476&format=png"
                  alt=""
                />
              </div>
              <div className="text-center my-5">
                <h4>Chan Myae Aung</h4>
                <p>chanmyaeaung765@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col px-5 gap-3">
              <div className="flex items-start gap-4">
                <MdPhone className="text-xl text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p>9876543891</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdLocationOn className="text-xl text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold">Address</p>
                  <p>Los Angeles Califonia PO</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdFacebook className="text-xl text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold">Social</p>
                  <p>https://facebook.com/adm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MdLink className="text-xl text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold">Website</p>
                  <p>www.devjobs.com</p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-[70%]">
            <JobTable title={"Applied Jobs"}/>
          </section>
        </div>
      </div>
    </main>
  );
}
