import React from 'react'

export default function Button({text}) {
  return (
    <button className='px-16 py-3 bg-blue-600 rounded text-white text-sm font-semibold'>
      {text}  
    </button>
  )
}
