import Cookies from "js-cookie";
import React from "react";
import { useLogoutMutation } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

const Profile = () => {
  const dark = Cookies.get("dark")
  const token = Cookies.get("token")
  const dispatch = useDispatch()
  const nav = useNavigate()

  const [logout, {isLoading}] = useLogoutMutation()

  const handleLogout = async(e) => {
    e.preventDefault()
    const {data} = await logout(token)
    console.log(data)
    data?.success && dispatch(logoutAdmin()) && nav("/login")
    
  }
  isLoading && <Loading isLoading={isLoading}/>
  return (
    <div
      className={`shadow-lg flex flex-col mt-3 justify-center w-60 rounded-lg bg-white ${dark && "dark"}`}
    >
      <div className="flex gap-2 items-center border-b p-4">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
          alt=""
        />
        <div className="text-sm">
          <h4 className="font-bold">Ellie Tucker</h4>
          <p>ellie.tucker@dashly.com</p>
        </div>
      </div>
      <div className="flex flex-col p-2 border-b text-sm relative">
        <button className={`nav-dropdown ${dark && "hover:bg-gray-500"}`}>Profile & account</button>
        <button className={`nav-dropdown ${dark && "hover:bg-gray-500"}`}>Settings</button>
      </div>
      <div onClick={handleLogout} className="p-2">
        <button className={`nav-dropdown ${dark && "hover:bg-gray-500"} w-full text-sm`}>Log out</button>
      </div>
    </div>
  );
};

export default Profile;
