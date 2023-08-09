import React from 'react'

const Status = () => {
  return (
    <div
    className={`shadow-lg flex flex-col mt-3 justify-center w-40 rounded-lg bg-white`}
  >
    <div className='flex flex-col p-2 border-b text-sm'>
    <button className="nav-dropdown">
        <span className='w-2 h-2 rounded-full bg-green-500'></span>
       Available
    </button>
    <button className="nav-dropdown">
    <span className='w-2 h-2 rounded-full bg-red-500'></span>
      Busy
    </button>
    <button className="nav-dropdown">
    <span className='w-2 h-2 rounded-full bg-yellow-500'></span>
     Away
    </button>
    <button className="nav-dropdown">
    <span className='w-2 h-2 rounded-full bg-gray-400'></span>
     Appear offline
    </button>
    </div>
    <div className='p-2'>
        <button className='nav-dropdown w-full text-sm'>Reset status</button>
    </div>
  </div>
  )
}

export default Status