import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";
import { useCreateJobMutation, useUpdateJobMutation } from "../../api/jobApi";
import { position } from "@chakra-ui/react";
import Cookies from "js-cookie";
import axios from "axios";
import { appId, appSecret } from "../../constants/authKey";
import { useNavigate, useParams } from "react-router-dom";

export default function EditJob() {
  const nav = useNavigate()
  const { id } = useParams();
  const token = Cookies.get("token");
  const [select, setSelect] = useState(false);
  const [company, setCompany] = useState();
  const [display, setDisplay] = useState("Full Time");
  const [selectCompany, setSelectCompany] = useState(false);
  const [displayCompany, setDisplayCompany] = useState("");
  // to prevent undefined state use useEffect hook
  const fetchData = async () => {
    const res = await fetch(`http://159.223.80.82/api/v1/admin/company/dropdown`, {
      headers: {
        "app-id": appId,
        "app-secret": appSecret,
        authorization: `Bearer ${token}`,
      },
    });
    const { data } = await res.json();
    setCompany(data);
  };
  const fetchSingleJob = async () => {
    const res = await fetch(`http://159.223.80.82/api/v1/admin/job/${id}`, {
      headers: {
        "app-id": appId,
        "app-secret": appSecret,
        authorization: `Bearer ${token}`,
      },
    });
    const { data } = await res.json();
    setDisplayCompany(data?.company.name)
    setState({
      position: data?.position,
      candidates: data?.candidates,
      // company: data?.company.name,
      country: data?.country,
      company_id: data?.company_id,
      shift: data?.shift,
      salary: data?.salary,
      description: data?.job_description,
      requirements: data?.requirement,
      responsibilities: data?.responsibilities,
    });
    setEditorHtml(data?.job_description)
    setEditorReqHtml(data?.requirement)
    setEditorResHtml(data?.responsibilities)
  };
  console.log(company);
  useEffect(() => {
    fetchData();
    fetchSingleJob();
  }, [id, token]);

  const [state, setState] = useState({
    position: "",
    country: "",
    candidates: "",
    company_id: "",
    shift: 1,
    salary: "",
    job_description: "",
    requirement: "",
    responsibilities: "",
  });
  
  const [editJob, {isLoading}] = useUpdateJobMutation()

  const toggleSelect = () => {
    setSelect(!select);
  };
  const toggleSelectCompany = () => {
    setSelectCompany(!selectCompany);
  };

  const [editorHtml, setEditorHtml] = useState("");
  const [editorReqHtml, setEditorReqHtml] = useState("");
  const [editorResHtml, setEditorResHtml] = useState("");

  const updateData = new FormData();
  updateData.append("position", state.position);
  updateData.append("company_id", state.company_id);
  updateData.append("candidates", state.candidates);
  updateData.append("country", state.country);
  updateData.append("shift", state.shift);
  updateData.append("salary", state.salary);
  updateData.append("job_description", state.job_description);
  updateData.append("requirement", state.requirement);
  updateData.append("responsibilities", state.responsibilities);

  const handleEdit = async (e) => {
    e.preventDefault()
    const { data } = await editJob({ updateData, token, id });
    data?.success && nav("/manage-jobs")
  };

  return (
    <main>
      <section className="p-5">
        <form
          onSubmit={handleEdit}
          action=""
          className="border bg-white rounded"
        >
          <h4 className="p-5 border-b">Update Job</h4>
          <section className="flex items-center gap-5 px-5 py-2.5">
            <div className=" w-full">
            <label className="block mb-2" htmlFor="">
              Job Position
            </label>
            <input
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  position: e.target.value,
                }))
              }
              value={state.position}
              type="text"
              className="w-full border outline-none py-3 px-5 rounded"
              placeholder="e.g. Web Developer"
            />
          </div>
          <div className="w-full">
            <label className="block mb-2" htmlFor="">
              Country
            </label>
            <input
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  country: e.target.value,
                }))
              }
              value={state.country}
              type="text"
              className="w-full border outline-none py-3 px-5 rounded"
              placeholder="e.g. United States"
            />
          </div>
          </section>
          <section className="flex items-center gap-5 px-5 py-2.5">
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Numbers of Post
              </label>
              <input
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    candidates: e.target.value,
                  }))
                }
                value={state.candidates}
                type="number"
                className="w-full border outline-none py-3 px-5 rounded"
                placeholder="e.g. 2"
              />
            </div>
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Company Name
              </label>
              <div
                onClick={toggleSelectCompany}
                className="w-full border outline-none py-3 bg-white relative rounded cursor-pointer"
              >
                <div className="px-5 flex items-center justify-between">
                  <p className="">
                    {displayCompany}
                  </p>
                  <BiChevronDown
                    className={`text-xl ${
                      selectCompany && "rotate-180"
                    } transition-all duration-150`}
                  />
                </div>
                <div
                  className={`${
                    selectCompany ? "scale-y-1" : "scale-y-0"
                  } h-60 overflow-y-scroll transition-all duration-150 origin-top z-40 absolute border rounded w-full top-14`}
                >
                  {company?.map((i) => {
                    return (
                      <div
                        key={i.id}
                        onClick={(e) => {
                          setState((prevState) => ({
                            ...prevState,
                            company_id: i.id,
                          }));
                          setDisplayCompany(i.name);
                        }}
                        className="w-full outline-none py-3 bg-white px-5 rounded-t border-b cursor-pointer"
                      >
                        {i.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section className="flex items-center gap-5 px-5 py-2.5">
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Job Type
              </label>
              <div
                onClick={toggleSelect}
                className="w-full border outline-none py-3 bg-white relative rounded cursor-pointer"
              >
                <div className="px-5 flex items-center justify-between">
                  <p className="">{state.shift === 1 ? "Full Time": "Part Time"}</p>
                  <BiChevronDown
                    className={`text-xl ${
                      select && "rotate-180"
                    } transition-all duration-150`}
                  />
                </div>
                <div
                  className={`${
                    select ? "scale-y-1" : "scale-y-0"
                  } transition-all duration-150 origin-top z-40 border rounded absolute w-full top-14`}
                >
                  <div
                    onClick={(e) => {
                      setState({ shift: 1 });
                      setDisplay(e.target.textContent);
                    }}
                    className="w-full outline-none py-3 bg-white px-5 rounded-t border-b cursor-pointer"
                  >
                    Full Time
                  </div>
                  <div
                    onClick={(e) => {
                      setState({ shift: 0 });
                      setDisplay(e.target.textContent);
                    }}
                    className="w-full outline-none py-3 bg-white px-5 rounded-b cursor-pointer"
                  >
                    Part Time
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Salary Range
              </label>
              <input
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    salary: e.target.value,
                  }))
                }
                value={state.salary}
                type="text"
                className="w-full border outline-none py-3 px-5 rounded"
                placeholder="e.g. 5 - 8 lakhs"
              />
            </div>
          </section>
          <section className="p-5">
            <h4>Job Description</h4>
            <ReactQuill
              className="w-full mt-3 bg-white h-full"
              value={editorHtml}
              onChange={(html) => {
                setEditorHtml(html);
                setState((prevState) => ({
                  ...prevState,
                  job_description: editorHtml,
                }));
              }}
            />
          </section>
          <section className="p-5">
            <h4>Requirements</h4>
            <ReactQuill
              className="w-full mt-3 bg-white h-full"
              value={editorReqHtml}
              onChange={(html) => {
                setEditorReqHtml(html);
                setState((prevState) => ({
                  ...prevState,
                  requirement: editorReqHtml,
                }));
              }}
            />
          </section>
          <section className="p-5">
            <h4>Responsibilities</h4>
            <ReactQuill
              className="w-full mt-3 bg-white h-full"
              value={editorResHtml}
              onChange={(html) => {
                setEditorResHtml(html);
                setState((prevState) => ({
                  ...prevState,
                  responsibilities: editorResHtml,
                }));
              }}
            />
          </section>
          <div className="p-5">
            <Button
              text={"Submit"}
              className={"bg-blue-600 text-white rounded px-10 py-1"}
            />
          </div>
        </form>
      </section>
    </main>
  );
}
