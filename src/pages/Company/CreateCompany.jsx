import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";
import { useCreateCompanyMutation } from "../../api/companyApi";
import Cookies from "js-cookie";
import { isAllOf } from "@reduxjs/toolkit";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function CreateCompany() {
  const nav = useNavigate();
  const editImage = document.querySelector(".file");
  const token = Cookies.get("token");
  const [select, setSelect] = useState(false);
  const [createCompany, { isLoading }] = useCreateCompanyMutation();
  const [editorHtml, setEditorHtml] = useState("");

  const [state, setState] = useState({
    name: "",
    email: "",
    hotline: "",
    location: "",
    image: "",
    website: "",
    description: "",
  });

  const formData = new FormData();
  formData.append("name", state.name);
  formData.append("email", state.email);
  formData.append("hotline", state.hotline);
  formData.append("location", state.location);
  formData.append("image", state.image);
  formData.append("website", state.website);
  formData.append("description", state.description);

  const handleCreate = async (e) => {
    e.preventDefault();
    const { data } = await createCompany({ formData, token });
    data?.success && nav("/manage-companies");
    setState(state);
  };
  return (
    <main>
      <section className="p-5 ">
        <form
          action=""
          onSubmit={handleCreate}
          className="border bg-white rounded"
        >
          <h4 className="p-5 border-b">Create a Company</h4>
          <section className="flex items-center gap-5 px-5 py-2.5 mt-3">
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Company Name
              </label>
              <input
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
                type="text"
                name="name"
                className="w-full border outline-none py-3 px-5 rounded"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2" htmlFor="">
                Upload Company Logo
              </label>
              <div className="w-fit flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
                  <img
                    className="w-full object-contain origin-center"
                    src={state.image}
                    alt=""
                  />
                </div>
                <div
                  onClick={() => editImage.click()}
                  className={`cursor-pointer border flex items-center gap-2 border-gray-300 px-4 py-1 rounded`}
                >
                  <MdModeEditOutline />
                  <p>Create Logo</p>
                  <input
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        image: e.target.files[0],
                      }))
                    }
                    className="file hidden"
                    type="file"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="flex items-center gap-5 px-5 py-2.5">
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Hotline
              </label>
              <input
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    hotline: e.target.value,
                  }))
                }
                type="tel"
                className="w-full border outline-none py-3 px-5 rounded"
                placeholder="e.g. 0123476"
              />
            </div>
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Address
              </label>
              <input
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    location: e.target.value,
                  }))
                }
                type="text"
                className="w-full border outline-none py-3 px-5 rounded"
                placeholder="e.g. Los Angeles Califonia PO"
              />
            </div>
          </section>
          <section className="flex items-center gap-5 px-5 py-2.5">
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Email
              </label>
              <input
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                type="email"
                className="w-full border outline-none py-3 px-5 rounded"
                placeholder="e.g. example@gmail.com"
              />
            </div>
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Website
              </label>
              <input
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    website: e.target.value,
                  }))
                }
                type="text"
                className="w-full border outline-none py-3 px-5 rounded"
                placeholder="e.g. 5 - 8 lakhs"
              />
            </div>
          </section>
          <section className="p-5">
            <h4>Description</h4>
            <ReactQuill
              className="w-full mt-5 bg-white"
              onChange={(html) => {
                setEditorHtml(html);
                setState((prevState) => ({
                  ...prevState,
                  description: editorHtml,
                }));
              }}
            />
          </section>
          <div className="p-5">
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              text={"Submit"}
              className={"bg-blue-600 text-white rounded px-10 py-1"}
            />
          </div>
        </form>
      </section>
    </main>
  );
}
