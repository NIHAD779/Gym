import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-blue-500 rounded-tr-xl rounded-bl-xl  px-[3rem] py-[2rem] flex  flex-col justify-center items-center'>
      {children}
    </div>
  )
}

export default Card