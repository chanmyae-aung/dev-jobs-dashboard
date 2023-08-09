import React from 'react'

export default function Cards() {
  return (
    <main className='flex justify-between'>
      <section className='bg-white rounded shadow flex justify-between p-5 w-60'>
        <div>
          <h2 className='text-green-600'>76</h2>
          <p className='font-semibold'>Job Posted</p>
        </div>
        <img className='w-12 h-12' src="https://img.icons8.com/?size=512&id=X5pOSTT8dZ7z&format=png" alt="" />
      </section>
      <section className='bg-white rounded shadow flex justify-between p-5 w-60'>
        <div>
          <h2 className='text-orange-600'>39</h2>
          <p className='font-semibold'>Companies</p>
        </div>
        <img className='w-12 h-12' src="https://img.icons8.com/?size=512&id=LdUk2U3hz8Oj&format=png" alt="" />
      </section>
      <section className='bg-white rounded shadow flex justify-between p-5 w-60'>
        <div>
          <h2 className='text-blue-600'>50</h2>
          <p className='font-semibold'>Applicants</p>
        </div>
        <img className='w-12 h-12' src="https://img.icons8.com/?size=512&id=31eTc5EEf90V&format=png" alt="" />
      </section>
      <section className='bg-white rounded shadow flex justify-between p-5 w-60'>
        <div>
          <h2 className='text-red-600'>35</h2>
          <p className='font-semibold'>Unread Messages</p>
        </div>
        <img className='w-12 h-12' src="https://img.icons8.com/?size=512&id=GaLLv3Q7Flgj&format=png" alt="" />
      </section>
    </main>
  )
}
