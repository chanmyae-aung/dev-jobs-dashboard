import React from 'react'

export default function Cards() {
  return (
    <main className='flex justify-between m-5 gap-5'>
      <section className='bg-green-50 rounded shadow flex justify-between p-5 w-72'>
        <div>
          <h2 className='text-green-500'>76</h2>
          <p className='font-semibold'>Total Jobs</p>
        </div>
        <img className='w-12 h-12' src="https://img.icons8.com/?size=512&id=X5pOSTT8dZ7z&format=png" alt="" />
      </section>
      <section className='bg-orange-50 rounded shadow flex justify-between p-5 w-72'>
        <div>
          <h2 className='text-[#FF8800]'>39</h2>
          <p className='font-semibold'>Total Companies</p>
        </div>
        <img className='w-12 h-12' src="https://img.icons8.com/?size=512&id=LdUk2U3hz8Oj&format=png" alt="" />
      </section>
      <section className='bg-blue-50 rounded shadow flex justify-between p-5 w-72'>
        <div>
          <h2 className='text-blue-500'>50</h2>
          <p className='font-semibold'>Total Users</p>
        </div>
        <img className='w-12 h-12' src="https://img.icons8.com/?size=512&id=31eTc5EEf90V&format=png" alt="" />
      </section>
      <section className='bg-red-50 rounded shadow flex justify-between p-5 w-72'>
        <div>
          <h2 className='text-red-500'>35</h2>
          <p className='font-semibold'>Total Applicants</p>
        </div>
        <img className='w-12 h-12' src="https://img.icons8.com/?size=512&id=GaLLv3Q7Flgj&format=png" alt="" />
      </section>
    </main>
  )
}
