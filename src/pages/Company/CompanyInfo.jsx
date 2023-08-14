import React from "react";
import { MdInfo, MdLocationOn } from "react-icons/md";
import { RiEarthLine } from "react-icons/ri";
import JobTable from "../../components/JobTable";
import Cookies from "js-cookie";
import { useGetCompanyDetailQuery } from "../../api/companyApi";
import { useParams } from "react-router-dom";

export default function CompanyInfo() {
  const { id } = useParams();
  const token = Cookies.get("token");
  const { data } = useGetCompanyDetailQuery({ token, id });
  const detail = data?.data;

  return (
    <main>
      <div className="m-5 bg-white border rounded">
        <h4 className="p-5 border-b ">Company Info</h4>
        <div className="flex ">
          <section className="w-[70%] h-full p-5">
            <h4 className="pb-5">About Us</h4>
            <div dangerouslySetInnerHTML={{ __html: detail?.description }}></div>
          </section>
          <section className="w-[30%] h-full p-5 bg-blue-50">
            <div className="flex flex-col text-center gap-5 mb-5 items-center">
              <img
                className="w-20"
                // src="https://img.icons8.com/?size=512&id=106536&format=png"
                src={detail?.image}
                alt=""
              />
              <div>
                <h4>{detail?.name}</h4>
                <p>{detail?.emial}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MdInfo className="text-xl mt-1 text-blue-500" />
                <div>
                  <p className="font-semibold">Hotline</p>
                  <p className="text-sm">{detail?.hotline}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-xl mt-1 w-7 text-blue-500" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm">{detail?.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RiEarthLine className="text-xl mt-1 w-7 text-blue-500" />
                <div>
                  <p className="font-semibold">Website</p>
                  <p className="text-sm">{detail?.website}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="m-5 border rounded">
        <JobTable title={"Posted Jobs"} />
      </section>
    </main>
  );
}
