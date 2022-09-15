import React from 'react'
import Header from '../Components/Header'
import Headerimg from '../Assets/images/header_bg_1.jpg'
import storyimg from '../Assets/images/about1.jpg'
import Visionimg from '../Assets/images/about2.jpg'

const About = () => {
  return (
    <>
    <Header title = "About Us" image = {Headerimg}>
      ajf jawbionawguawi
    </Header>
    <section className='flex m-5 p-4'>
      <div className='basis-1/2'>
        <img src={storyimg} alt="story" className='rounded-full' />
      </div>
      <div className='basis-1/2 text-center' >
        <h1>Our Story</h1>
        <p>vashveoiubvwhuwefwebbfwifjewvbqwenfijbfaskjbvh</p>
      </div>
    </section>
    <section className='flex m-5 p-4'>
      <div>
        <img src={Visionimg} alt="vision" className='rounded-full'/>
      </div>
      <div className='basis-1/2 text-center'>
        <h1>Our Vision</h1>
        <p>aehjgbfiewbgoiuwehgpuqiebgouiwebhgiuwehr</p>
      </div>

    </section>
    </>
  )
}

export default About