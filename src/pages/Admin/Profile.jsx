import React, { useState } from "react";
import Button from "../../components/Button";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";

export default function Profile() {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showCurrentPass, setShowCurrentPass] = useState("");
  const [showNewPass, setShowNewPass] = useState("");
  const [showConfirmPass, setShowConfirmPass] = useState("");
  return (
    <main>
      <div className="m-5 bg-white border rounded">
        <h4 className="p-5 border-b">Profile</h4>
        <div className="w-full flex">
          <section className="p-5 w-[30%] border-r flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-20"
                src="https://img.icons8.com/?size=512&id=23476&format=png"
                alt=""
              />
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
            <form action="" className=" bg-white rounded">
              <h4 className="p-5">Basic Information</h4>
              <section className="flex items-center gap-5 px-5 py-2.5 mt-3">
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border outline-none py-3 px-5 rounded"
                    placeholder="Chan Myae Aung"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2" htmlFor="">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border outline-none py-3 px-5 rounded"
                    placeholder="chanmyaeaung765@gmail.com"
                  />
                </div>
              </section>
              <section className="flex items-center gap-5 px-5 py-2.5">
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full border outline-none py-3 px-5 rounded"
                    placeholder="e.g. 0123476"
                  />
                </div>
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full border outline-none py-3 px-5 rounded"
                    placeholder="e.g. Los Angeles Califonia PO"
                  />
                </div>
              </section>
              <section className="flex items-center gap-5 px-5 py-2.5">
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Social
                  </label>
                  <input
                    type="text"
                    className="w-full border outline-none py-3 px-5 rounded"
                    placeholder="e.g. example@gmail.com"
                  />
                </div>
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Website
                  </label>
                  <input
                    type="text"
                    className="w-full border outline-none py-3 px-5 rounded"
                    placeholder="e.g. 5 - 8 lakhs"
                  />
                </div>
              </section>
              <div className="p-5 ml-auto w-fit">
                <Button text={"Save"} />
              </div>
            </form>
            {/* password change */}
            <form action="" className=" bg-white rounded">
              <h4 className="p-5 border-t">Change Password</h4>
              <section className="flex items-center gap-5 px-5 py-2.5 mt-3">
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Verification Email
                  </label>
                  <input
                    type="email"
                    className="w-full border outline-none py-3 px-5 rounded"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2" htmlFor="">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => setCurrentPass(e.target.value)}
                      type={`${showCurrentPass ? "password" : "text"}`}
                      placeholder="Current your password"
                      className={` bg-white w-full py-3 border rounded px-5 outline-none`}
                    />
                    <div
                      onClick={() => setShowCurrentPass(!showCurrentPass)}
                      className="absolute right-0 bottom-4"
                    >
                      {showCurrentPass ? (
                        <LiaEye className="mx-3 cursor-pointer" />
                      ) : (
                        <LiaEyeSlash className="mx-3 cursor-pointer" />
                      )}
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex items-center gap-5 px-5 py-2.5">
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => setNewPass(e.target.value)}
                      type={`${showNewPass ? "password" : "text"}`}
                      placeholder="New your password"
                      className={` bg-white w-full py-3 border rounded px-5 outline-none`}
                    />
                    <div
                      onClick={() => setShowNewPass(!showNewPass)}
                      className="absolute right-0 bottom-4"
                    >
                      {showNewPass ? (
                        <LiaEye className="mx-3 cursor-pointer" />
                      ) : (
                        <LiaEyeSlash className="mx-3 cursor-pointer" />
                      )}
                    </div>
                  </div>
                </div>
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => setConfirmPass(e.target.value)}
                      type={`${showConfirmPass ? "password" : "text"}`}
                      placeholder="Confirm your password"
                      className={` bg-white w-full py-3 border rounded px-5 outline-none`}
                    />
                    <div
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      className="absolute right-0 bottom-4"
                    >
                      {showConfirmPass ? (
                        <LiaEye className="mx-3 cursor-pointer" />
                      ) : (
                        <LiaEyeSlash className="mx-3 cursor-pointer" />
                      )}
                    </div>
                  </div>
                </div>
              </section>
              <div className="p-5 ml-auto w-fit">
                <Button text={"Save"} />
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
