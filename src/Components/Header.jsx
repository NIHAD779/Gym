import React from 'react'

const Header = ({title,image,children}) => {
  return (
    <header className='overflow-hidden h-[20rem]'>
        <div className='w-full h-full relative grid place-items-center'>
            <div className=' w-full h-full absolute '>
                <img src={image} alt="s" className='absolute w-full opacity-[0.5]'  />
            </div>
            <div className='relative m-auto text-center text-white' >
                <h1>{title}</h1>
                <p>{children}</p>
            </div>
        </div>
        
    </header>
    )
}

export default Header