import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <section className=''>
      <div className='h-[30vh] flex flex-col justify-center items-center'>
        <h1 className='text-white'>Page Not Found</h1>
        <Link to='/' className='rounded-xl p-2 bg-blue-500'> Go Back Home</Link>
      </div>
    </section>
    </>
  )
}

export default NotFound