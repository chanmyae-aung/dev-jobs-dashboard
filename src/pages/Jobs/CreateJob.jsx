import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";
import { useCreateJobMutation } from "../../api/jobApi";
import Cookies from "js-cookie";
import { appId, appSecret } from "../../constants/authKey";
import { useNavigate } from "react-router-dom";

export default function CreateJob() {
  const nav = useNavigate();
  const token = Cookies.get("token");
  const [select, setSelect] = useState(false);
  const [company, setCompany] = useState();
  const [display, setDisplay] = useState("Full Time");
  const [selectCompany, setSelectCompany] = useState(false);
  const [displayCompany, setDisplayCompany] = useState("");
  // to prevent undefined state use useEffect hook
  const fetchData = async () => {
    const res = await fetch(
      `http://159.223.80.82/api/v1/admin/company/dropdown`,
      {
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = await res.json();
    setCompany(data);
  };
  useEffect(() => {
    fetchData();
  }, [token]);

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
  const [createJob, { isLoading }] = useCreateJobMutation();

  const toggleSelect = () => {
    setSelect(!select);
  };
  const toggleSelectCompany = () => {
    setSelectCompany(!selectCompany);
  };

  const [editorHtml, setEditorHtml] = useState("");
  const [editorReqHtml, setEditorReqHtml] = useState("");
  const [editorResHtml, setEditorResHtml] = useState("");

  const jobData = new FormData();
  jobData.append("position", state.position);
  jobData.append("company_id", state.company_id);
  jobData.append("candidates", state.candidates);
  jobData.append("country", state.country);
  jobData.append("shift", state.shift);
  jobData.append("salary", state.salary);
  jobData.append("job_description", state.job_description);
  jobData.append("requirement", state.requirement);
  jobData.append("responsibilities", state.responsibilities);

  const handleCreate = async (e) => {
    e.preventDefault();
    const { data } = await createJob({ jobData, token });
    data?.success && nav("/manage-jobs");
  };

  return (
    <main>
      <section className="p-5">
        <form
          onSubmit={handleCreate}
          action=""
          className="border bg-white rounded"
        >
          <h4 className="p-5 border-b">Create Job</h4>
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
                type="text"
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
                    {displayCompany ? displayCompany : "Select Company"}
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
                          setDisplayCompany(e.target.textContent);
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
                  <p className="">{display}</p>
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
            <h4>Requirement</h4>
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
