import React, { useState } from "react";
import Button from "../components/Button";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../api/authApi";
import Cookies from "js-cookie";
import { loginAdmin } from "../features/authSlice";
import Loading from "../components/Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [login, {isLoading}] = useLoginMutation()
  const handleLogin = async (e) => {
    e.preventDefault()
    const {data} = await login({email, password})
    console.log(data)
    dispatch(loginAdmin({token: data?.data.token}))
    data?.data.token && nav("/")
    
  }
  // isLoading && <Loading isLoading={isLoading}/>
  // isLoading && <div>loading....</div>
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen">
      <section className="w-[21rem] border rounded p-5">
        <div className="flex items-center flex-col gap-2 border-b py-3 px-8">
          <img
            className="w-10"
            src="https://img.icons8.com/?size=512&id=sFFBQN8kzSOS&format=png"
            alt=""
          />
          <h1 className=" font-bold text-xl text-blue-500 text-center">
            devjobs
          </h1>
        </div>
        <h4 className="my-5 ">Welcome Back!</h4>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input 
            onChange={(e) => {
              setEmail(e.target.value);
              emailError && setEmailError(false);
            }}
            type="email"
            placeholder="Enter your email"
            autoFocus={true}
            className={`${
              emailError && "text-red-500 border border-red-500"
            } bg-white w-full py-3 rounded px-4 outline-none text-sm border`}
          />
          <div className="relative">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                error && setError(false);
              }}
              type={`${showPass ? "password" : "text"}`}
              placeholder="Enter your password"
              className={`${
                error && "text-red-500 border border-red-500"
              } bg-white w-full py-3 rounded px-4 outline-none text-sm border`}
            />
            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute right-0 bottom-3"
            >
              {showPass ? (
                <LiaEye className="mx-3 cursor-pointer" />
              ) : (
                <LiaEyeSlash className="mx-3 cursor-pointer" />
              )}
            </div>
          </div>
          <div className="flex gap-2 items-center">
          <input type="checkbox" name="" id="checkbox" />
          <label htmlFor="checkbox" className="text-sm cursor-pointer">Remember me</label>
          </div>

          <div className="flex gap-3 mt-3">
            <Button
              isLoading={isLoading}
              text={"LOG IN"}
              className={
                "w-fit px-8 flex-grow bg-blue-600 text-white text-sm font-bold py-3 rounded"
              }
            />
          </div>
        </form>
      </section>
    </main>
  );
}
