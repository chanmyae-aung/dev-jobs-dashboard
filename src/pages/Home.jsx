import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-screen flex h-screen'>
        <div className='w-[18%]'>
            <SideBar/>
        </div>
        <div className='w-[82%] bg-blue-200'>
            <Outlet/>
        </div>
    </div>
  )
}
