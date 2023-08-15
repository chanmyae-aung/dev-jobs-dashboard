import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetJobDetailQuery } from '../../api/jobApi'
import Cookies from 'js-cookie'

export default function JobDetails() {
    const token = Cookies.get("token")
    const {id} = useParams()
    const {data} = useGetJobDetailQuery({token, id})
    const detail = data?.data
    console.log(detail)
  return (
    <main className='m-5 rounded border bg-white'>
         <h4 className="p-5 border-b">Job Details</h4>
         <section className="w-full h-full p-5 px-10">
            <div className="flex text-center gap-5 mb-5 items-center">
              <img
                className="w-16"
                src="https://img.icons8.com/?size=512&id=106536&format=png"
                // src={detail?.company.image}
                alt=""
              />
            </div>
            <div className='mb-10'>
              <h4 className='text-xl'>{detail?.position}</h4>
              <div>
                <h4>{detail?.company.name}</h4>
                <p>{detail?.company.emial}</p>
                {/* <p>{detail?.timestamp}</p> */}
              </div>
            </div>
            <div className='flex flex-col gap-5'>
            <div >
              <h4>Job Description</h4>
              <p dangerouslySetInnerHTML={{ __html: detail?.job_description }}></p>
            </div>
            <div >
              <h4>Requirements</h4>
              <p dangerouslySetInnerHTML={{ __html: detail?.requirement }}></p>
            </div>
            <div >
              <h4>Responsibilities</h4>
              <p dangerouslySetInnerHTML={{ __html: detail?.responsibilities }}></p>
            </div>
            <div >
              <h4>Slary</h4>
              <p>{`$ ${detail?.salary}`}</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-semibold">Hotline</p>
                  <p className="text-sm">{detail?.company.hotline}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm">{detail?.company.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-semibold">Website</p>
                  <p className="text-sm">{detail?.company.website}</p>
                </div>
              </div>
            </div>
            </div>
          </section>
    </main>
  )
}
