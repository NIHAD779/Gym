import React from 'react'
import headimg from '../Assets/images/main_header.png'

const Header = () => {
  return (
    <header className='w-screen grid place-items-center mt-[3rem]'>
      <div className='flex items-center justify-between gap-[6rem]'>
        <div>
          <h3 className='text-[30px] font-[400]'>#100DaysOfWorkOut</h3>
          <h1 className='text-[40px]'>Join the Legends of the Fitness World</h1>
          <p className= 'text-[1.1rem]'>
            “If you want something you've never had, you must be willing to do something you've never done.”
          </p>
          <button 
          className='mt-10 bg-blue-500 rounded-[1.5rem] py-[0.9rem] px-[2rem] w-fit hover:'>
            Get Started
            </button>
        </div>
        <div >
          <img src={headimg} alt="" />
        </div>
      </div>

    </header>
  )
}

export default Header