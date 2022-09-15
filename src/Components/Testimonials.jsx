import React, { useState } from 'react'
import Sectionhead from './Sectionhead'
import Card from '../UI Components/Card'
import { testimonials } from '../Assets/data'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'

const Testimonials = () => {
    const [index,setindex] = useState(0)
    const {name,quote,job,avatar} = testimonials[index]

    const prevs = () =>{
        setindex(prev => prev - 1);
        if (index <= 0){
            setindex(testimonials.length - 1)}
    }
    const next = () =>{
        setindex(prev => prev + 1);
        if (index >= testimonials.length - 1){
            setindex(0)}
    }
  return (
    <section className='flex flex-col items-center justify-center m-4'>
        <Sectionhead title ="Testimonials"/>
        <div className='w-[50vw]'>
        
        <Card>
            <img src={avatar} alt="name" />
            <p>{quote}</p>
            <h5>{name}</h5>
            <small>{job}</small>
        </Card>
        </div>
        <div>
            <button onClick={prevs} ><IoIosArrowDropleftCircle/></button>
            <button onClick={next} ><IoIosArrowDroprightCircle/></button>
        </div>
        
    </section>
  )
}

export default Testimonials