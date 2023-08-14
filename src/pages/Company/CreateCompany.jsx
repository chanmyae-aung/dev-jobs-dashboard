import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";
import { useCreateCompanyMutation } from "../../api/companyApi";
import Cookies from "js-cookie";
import { isAllOf } from "@reduxjs/toolkit";

export default function CreateCompany() {
  const token = Cookies.get("token");
  const [select, setSelect] = useState(false);
  // const [display, setDisplay] = useState("Full Time");
  const [createCompany, {isLoading}] = useCreateCompanyMutation();
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
  console.log(state);
  console.log(editorHtml);

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
    console.log(data);
    setState(state);
  };

  const toggleSelect = () => {
    setSelect(!select);
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
              <input
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    image: e.target.files[0],
                  }))
                }
                type="file"
                className="w-full outline-none py-3 px-5 rounded"
                placeholder="e.g. Google"
              />
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
