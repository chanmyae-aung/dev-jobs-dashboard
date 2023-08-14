import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";
import { useGetCompanyDetailQuery, useUpdateCompanyMutation } from "../../api/companyApi";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCompany() {
    const nav = useNavigate()
  const token = Cookies.get("token");
  const {id} = useParams()
  const [updateCompany, {isLoading}] = useUpdateCompanyMutation()
  const {data} = useGetCompanyDetailQuery({token, id})
  console.log(data)
  const [editorHtml, setEditorHtml] = useState("");

  const [state, setState] = useState({
    name: data?.data.name,
    email: data?.data.email,
    hotline: data?.data.hotline,
    location: data?.data.location,
    image: data?.data.image,
    website: data?.data.website,
    description: data?.data.description,
  });
  console.log(state);
  console.log(editorHtml);

  const updateData = new FormData();
  updateData.append("name", state.name);
  updateData.append("email", state.email);
  updateData.append("hotline", state.hotline);
  updateData.append("location", state.location);
  updateData.append("image", state.image);
  updateData.append("website", state.website);
  updateData.append("description", state.description);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { data } = await updateCompany({ updateData, token, id });
    console.log(data);
    setState(state);
    data?.success && nav(`/manage-companies`)
  };


  return (
    <main>
      <section className="p-5 ">
        <form
          action=""
          onSubmit={handleUpdate}
          className="border bg-white rounded"
        >
          <h4 className="p-5 border-b">Update Company Informations</h4>
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
                value={state.name}
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
                value={state.hotline}
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
                value={state.location}
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
                value={state.email}
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
                value={state.website}
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
              text={"Save"}
              className={"bg-blue-600 text-white rounded px-10 py-1"}
            />
          </div>
        </form>
      </section>
    </main>
  );
}
