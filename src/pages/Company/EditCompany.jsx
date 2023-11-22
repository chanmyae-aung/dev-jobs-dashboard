import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";
import {
  useGetCompanyDetailQuery,
  useUpdateCompanyMutation,
} from "../../api/companyApi";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { appId, appSecret } from "../../constants/authKey";
import { MdModeEditOutline } from "react-icons/md";

export default function EditCompany() {
  const editImage = document.querySelector(".file");
  const nav = useNavigate();
  const token = Cookies.get("token");
  const { id } = useParams();
  const [updateCompany, { isLoading }] = useUpdateCompanyMutation();
  // const { data } = useGetCompanyDetailQuery({ token, id });
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

  // to prevent undefined state use useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://159.223.80.82/api/v1/admin/company/${id}`,
          {
            headers: {
              "app-id": appId,
              "app-secret": appSecret,
              authorization: `Bearer ${token}`,
            },
          }
        );
        setState({
          name: response.data.data.name,
          email: response.data.data.email,
          hotline: response.data.data.hotline,
          location: response.data.data.location,
          image: response.data.data.image,
          website: response.data.data.website,
          description: response.data.data.description,
        });
        setEditorHtml(response.data.data.description)
        console.log("API response:", response.data.data.name);
      } catch (error) {
        console.error("API error:", error);
      }
    };
    fetchData();
  }, [id]);
  const updateData = new FormData();
  updateData.append("name", state.name);
  updateData.append("email", state.email);
  updateData.append("hotline", state.hotline);
  updateData.append("location", state.location);
  typeof state.image === "object" && updateData.append("image", state.image); 
  updateData.append("website", state.website);
  updateData.append("description", state.description);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { data } = await updateCompany({ updateData, token, id });
    setState(state);
    data?.success && nav(`/manage-companies`);
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
                Update Company Logo
              </label>
              <div className="w-fit flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
                  <img
                    className="w-full h-full object-contain origin-center"
                    src={state.image}
                    alt=""
                  />
                </div>
                <div
                  onClick={() => editImage.click()}
                  className={`cursor-pointer border flex items-center gap-2 border-gray-300 px-4 py-1 rounded`}
                >
                  <MdModeEditOutline />
                  <p>Update Logo</p>
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
                placeholder="www.example.com"
              />
            </div>
          </section>
          <section className="p-5">
            <h4>Description</h4>
            <ReactQuill
              className="w-full mt-5 bg-white"
              value={editorHtml}
              onChange={(html) => {
                setEditorHtml(html);
                setState((prevState) => ({
                  ...prevState,
                  description: editorHtml,
                }));
              }}
            />
          </section>
          <div className="p-5 flex gap-5 justify-end">
            <div onClick={() => nav(-1)}>
              <Button
                text={"Cancel"}
                className={
                  "border-blue-600 border text-blue-600 rounded px-10 py-1"
                }
              />
            </div>
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
