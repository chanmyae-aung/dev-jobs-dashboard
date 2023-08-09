import React from 'react'

export default function Button({text}) {
  return (
    <button className='px-10 py-2.5 bg-blue-600 rounded text-white text-sm font-semibold'>
      {text}  
    </button>
  )
}
