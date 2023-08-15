import React, { useState } from "react";
import Button from "../../components/Button";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import {
  MdFacebook,
  MdLink,
  MdLocationOn,
  MdModeEditOutline,
  MdPhone,
} from "react-icons/md";
import Cookies from "js-cookie";
import { useGetProfileQuery, useUpdateProfileMutation } from "../../api/authApi";
import { useUpdateCompanyMutation } from "../../api/companyApi";

export default function Profile() {
  const token = Cookies.get("token")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [currentPass, setCurrentPass] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showCurrentPass, setShowCurrentPass] = useState("");
  const [showNewPass, setShowNewPass] = useState("");
  const [showConfirmPass, setShowConfirmPass] = useState("");
  const editImage = document.querySelector(".file");

  const {data} = useGetProfileQuery(token)
  console.log(data?.data)

  console.log(name, image, password)

  const updateData = new FormData()
  updateData.append("name", name)
  updateData.append("image", image)
  updateData.append("password", password)

  console.log(updateData)
  const [update] = useUpdateProfileMutation()
  const handleUpdate = async (e) => {
    e.preventDefault()
    const {data} = await update({updateData, token})
    console.log(data)
    
  }


  return (
    <main>
      <div className="m-5 bg-white border rounded">
        <h4 className="p-5 border-b">Profile</h4>
        <div className="w-full flex">
          <section className="p-5 w-[30%] border-r flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <div className=" border-2 relative border-blue-500 rounded-full">
                <img
                  className="w-24"
                  src="https://img.icons8.com/?size=512&id=23476&format=png"
                  alt=""
                />
                <div
                  onClick={() => editImage.click()}
                  className={`flex justify-center cursor-pointer absolute bg-white -right-2  bottom-1 items-center text-xs gap-1 border-2 rounded-full w-7 h-7 px-1 py-0.5`}
                >
                  <MdModeEditOutline />
                  <input onChange={e => setImage(e.target.files[0])} className="file hidden" type="file" name="" id="" />
                </div>
              </div>
              <div className="text-center my-5">
                <h4>{data?.data.name}</h4>
                <p>{data?.data.email}</p>
              </div>
            </div>
            <div className="flex flex-col px-5 gap-3">
              <div className="flex items-start gap-4">
                <MdPhone className="text-xl text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p>+959 123 456 789</p>
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
            <form onSubmit={handleUpdate} action="" className=" bg-white rounded">
              <h4 className="p-5">Basic Information</h4>
              <section className="flex items-center gap-5 px-5 py-2.5 mt-3">
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Name
                  </label>
                  <input
                  onChange={(e) => setName(e.target.value)}
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
                    value={"dev-job-search-admin@gmail.com"}
                  />
                </div>
              </section>
              <section className="flex items-center gap-5 px-5 py-2.5">
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Phone
                  </label>
                  <input
                  value={"+959 123 456 789"}
                    type="text"
                    className="w-full border outline-none py-3 px-5 rounded"
                  />
                </div>
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Address
                  </label>
                  <input
                  value={"Los Angeles Califonia PO"}
                    type="text"
                    className="w-full border outline-none py-3 px-5 rounded"
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
                    value={"https://facebook.com/adm"}
                  />
                </div>
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    Website
                  </label>
                  <input
                  value={"www.devjobs.com"}
                    type="text"
                    className="w-full border outline-none py-3 px-5 rounded"
                  />
                </div>
              </section>
              {/* <div className="p-5 ml-auto w-fit">
                <Button text={"Save"} className={"bg-blue-500 text-white px-10 py-2 rounded"}/>
              </div> */}
            {/* </form>
            {/* password change 
            <form action="" className=" bg-white rounded"> */}
              <h4 className="p-5 border-t">Change Password</h4>
              <section className="flex flex-col items-center gap-5 px-5 py-2.5 mt-3">
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
                <div className=" w-full">
                  <label className="block mb-2" htmlFor="">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
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
                <Button text={"Save"} className={"bg-blue-500 text-white px-10 py-2 rounded"}/>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
