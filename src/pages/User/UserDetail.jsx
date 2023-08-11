import React, { useState } from "react";

import JobTable from "../../components/JobTable";

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
              <p>
                <span className="font-semibold">Phone:</span> 9876543891
              </p>
              <p>
                <span className="font-semibold">Address:</span> No.5, Wietac
                Ulakfeg
              </p>
              <p>
                <span className="font-semibold">Social:</span>{" "}
                https://facebook.com/asefaed
              </p>
              <p>
                <span className="font-semibold">Website:</span> www.wevsieft.com
              </p>
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
