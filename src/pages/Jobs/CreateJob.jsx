import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";

export default function CreateJob() {
  const [select, setSelect] = useState(false);
  const [display, setDisplay] = useState("Full Time");
  const [selectCompany, setSelectCompany] = useState(false);
  const [displayCompany, setDisplayCompany] = useState("Microsoft");
  const toggleSelect = () => {
    setSelect(!select);
  };

  const toggleSelectCompany = () => {
    setSelectCompany(!selectCompany)
  }

  const [editorHtml, setEditorHtml] = useState("");
  const [editorReqHtml, setEditorReqHtml] = useState("");
  const [editorResHtml, setEditorResHtml] = useState("");
  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };
  const handleEditorReqChange = (html) => {
    setEditorReqHtml(html);
  };
  const handleEditorResChange = (html) => {
    setEditorResHtml(html);
  };

  return (
    <main>
      <section className="p-5">
        <form action="" className="border bg-white rounded">
          <h4 className="p-5 border-b text-blue-600">Create Job</h4>
          <div className=" px-5 py-2.5 w-full">
            <label className="block mb-2" htmlFor="">
              Job Position
            </label>
            <input
              type="text"
              className="w-full border outline-none py-3 px-5 rounded"
              placeholder="e.g. Web Developer"
            />
          </div>
          <section className="flex items-center gap-5 px-5 py-2.5">
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Numbers of Post
              </label>
              <input
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
                  <p className="">{displayCompany}</p>
                  <BiChevronDown
                    className={`text-xl ${
                      selectCompany && "rotate-180"
                    } transition-all duration-150`}
                  />
                </div>
                <div
                  className={`${
                    selectCompany ? "scale-y-1" : "scale-y-0"
                  } transition-all duration-150 origin-top z-40 absolute border rounded w-full top-14`}
                >
                  <div
                    onClick={(e) => setDisplayCompany(e.target.textContent)}
                    className="w-full outline-none py-3 bg-white px-5 rounded-t border-b cursor-pointer"
                  >
                    Microsoft
                  </div>
                  <div
                    onClick={(e) => setDisplayCompany(e.target.textContent)}
                    className="w-full outline-none py-3 bg-white px-5 rounded-b cursor-pointer"
                  >
                    Google
                  </div>
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
                    onClick={(e) => setDisplay(e.target.textContent)}
                    className="w-full outline-none py-3 bg-white px-5 rounded-t border-b cursor-pointer"
                  >
                    Full Time
                  </div>
                  <div
                    onClick={(e) => setDisplay(e.target.textContent)}
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
                type="text"
                className="w-full border outline-none py-3 px-5 rounded"
                placeholder="e.g. 5 - 8 lakhs"
              />
            </div>
          </section>
          <section className="p-5">
            <h4>Job Description</h4>
            <ReactQuill className="w-full mt-3 bg-white h-full" value={editorHtml} onChange={handleEditorChange} />
          </section>
          <section className="p-5">
            <h4>Requirements</h4>
            <ReactQuill className="w-full mt-3 bg-white h-full" value={editorReqHtml} onChange={handleEditorReqChange} />
          </section>
          <section className="p-5">
            <h4>Responsibilities</h4>
            <ReactQuill className="w-full mt-3 bg-white h-full" value={editorResHtml} onChange={handleEditorResChange} />
          </section>
          <div className="p-5">
          <Button text={"Submit"} className={"bg-blue-600 text-white rounded px-10 py-1"}/>
          </div>
        </form>
      </section>
    </main>
  );
}
