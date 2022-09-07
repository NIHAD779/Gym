import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-blue-500 rounded-tl-[3rem] rounded-br-[3rem] text-center px-[3rem] py-[2rem'>
      {children}
    </div>
  )
}

export default Card