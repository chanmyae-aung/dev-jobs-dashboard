import React from 'react'
import {MdOutlineSettings} from 'react-icons/md'
export default function Customize() {
  return (
    <div>
        <button className='text-sm font-semibold text-white flex items-center justify-center gap-2 bg-slate-800 py-2.5 px-5 rounded-full'>
            <MdOutlineSettings/> Customize
        </button>
    </div>
  )
}
