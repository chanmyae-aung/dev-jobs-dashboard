import React from "react";
import { MdInfo, MdLocationOn } from "react-icons/md";
import { RiEarthLine } from "react-icons/ri";
import JobTable from "../../components/JobTable";

export default function CompanyInfo() {
  return (
    <main>
      <div className="m-5 bg-white border rounded">
      <h4 className="p-5 border-b ">Company Info</h4>
      <div className="flex ">
        <section className="w-[70%] h-full p-5">
          <h4 className="pb-5">About Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aspernatur asperiores repellendus, saepe atque, possimus officiis
            eos illum distinctio expedita libero maxime quam necessitatibus
            veritatis iusto ullam. Nesciunt, aliquid repudiandae! Distinctio
            culpa ullam, veritatis similique voluptatem neque esse pariatur non
            molestias iste vero totam tempore nostrum, quasi quia perspiciatis
            consectetur! Esse quis consectetur voluptas, qui voluptates est
            aspernatur ab maxime? Minima accusamus est quod corporis voluptas
            aperiam, iusto saepe recusandae quam odio nobis hic aliquid ipsam,
            qui laboriosam suscipit officia nostrum accusantium ducimus
            excepturi eos expedita culpa rerum. Sint, necessitatibus? Atque
            soluta et placeat recusandae itaque quia tempora voluptates,
            blanditiis repudiandae! Nam suscipit optio repudiandae dicta, quidem
            similique vel quam perspiciatis autem inventore unde consectetur eos
            quasi.{" "}
          </p>
        </section>
        <section className="w-[30%] h-full p-5 bg-blue-50">
          <div className="flex flex-col text-center gap-5 mb-5 items-center">
            <img
              className="w-20"
              src="https://img.icons8.com/?size=512&id=106536&format=png"
              alt=""
            />
            <div>
              <h4>Company Name</h4>
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <MdInfo className="text-xl mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Hotline</p>
                <p className="text-sm">+123456</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdLocationOn className="text-xl mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm">Los Angeles Califonia PO</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RiEarthLine className="text-xl mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Website</p>
                <p className="text-sm">www.webstrot.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      <section className="m-5 border rounded">
        <JobTable title={"Posted Jobs"}/>
      </section>
    </main>
  );
}
