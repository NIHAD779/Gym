import React,{useState} from 'react'
import {AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'

const Faq = ({Q,ans}) => {
    const [show,setShow] = useState(false)
  return (
    <article onClick={() => setShow(prev => !prev)} className='bg-blue-500 rounded-tl-[3rem] rounded-br-[3rem] text-center px-[3rem] py-[2rem'>
        <div >
            <h4>{Q}</h4>
            <button>
            { 
                show ? <AiOutlineMinus/>: <AiOutlinePlus/>
            }
            </button>
        </div>
        {show && <p>{ans}</p>}
    </article>
  )
}

export default Faq