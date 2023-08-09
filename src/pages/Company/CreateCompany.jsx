import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../components/Button";

export default function CreateCompany() {
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
          <h4 className="p-5 border-b">Create a Company</h4>
          <section className="flex items-center gap-5 px-5 py-2.5 mt-3">
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Company Name
              </label>
              <input
                type="text"
                className="w-full outline-none py-3 px-5 rounded"
                placeholder="e.g. Google"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2" htmlFor="">
                Upload Company Logo
              </label>
              <input
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
                type="text"
                className="w-full outline-none py-3 px-5 rounded"
                placeholder="e.g. 0123476"
              />
            </div>
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Address
              </label>
              <input
                type="text"
                className="w-full outline-none py-3 px-5 rounded"
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
                type="text"
                className="w-full outline-none py-3 px-5 rounded"
                placeholder="e.g. example@gmail.com"
              />
            </div>
            <div className=" w-full">
              <label className="block mb-2" htmlFor="">
                Website
              </label>
              <input
                type="text"
                className="w-full outline-none py-3 px-5 rounded"
                placeholder="e.g. 5 - 8 lakhs"
              />
            </div>
          </section>
          <section className="p-5">
            <h4>Description</h4>
            <ReactQuill
              className="w-full mt-5 bg-white"
              value={editorHtml}
              onChange={handleEditorChange}
            />
          </section>
          <div className="p-5">
            <Button text={"Submit"} />
          </div>
        </form>
      </section>
    </main>
  );
}
