import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";

export default function CreateJob() {
  const [select, setSelect] = useState(false);
  const [display, setDisplay] = useState("Full Time");
  const toggleSelect = () => {
    setSelect(!select);
  };
  const [editorHtml, setEditorHtml] = useState("");

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };
  return (
    <main>
      <section className="p-5 px-10">
        <form action="" className="border">
          <h4 className="p-5 border-b">Post a New Job</h4>
          <div className=" px-5 py-2.5 w-full">
            <label className="block mb-2" htmlFor="">
              Job Position
            </label>
            <input
              type="text"
              className="w-full outline-none py-3 px-5 rounded"
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
                className="w-full outline-none py-3 px-5 rounded"
                placeholder="e.g. 2"
              />
            </div>
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Company ID
              </label>
              <input
                type="text"
                className="w-full outline-none py-3 px-5 rounded"
                placeholder="e.g. 3"
              />
            </div>
          </section>
          <section className="flex items-center gap-5 px-5 py-2.5">
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Job Type
              </label>
              <div
                onClick={toggleSelect}
                className="w-full outline-none py-3 bg-white relative rounded cursor-pointer"
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
                  } transition-all duration-150 origin-top absolute w-full top-14`}
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
                className="w-full outline-none py-3 px-5 rounded"
                placeholder="e.g. 5 - 8 lakhs"
              />
            </div>
          </section>
          <section className="p-5">
            <h4>About This Job</h4>
            <ReactQuill className="w-full mt-5 bg-white" value={editorHtml} onChange={handleEditorChange} />
          </section>
          <div className="p-5">
          <Button text={"Submit"}/>
          </div>
        </form>
      </section>
    </main>
  );
}
