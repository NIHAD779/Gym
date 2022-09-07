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
    <section>
      <div>
        <img src={storyimg} alt="story" />
      </div>
      <div>
        <h1>Our Story</h1>
        <p>vashveoiubvwhuwefwebbfwifjewvbqwenfijbfaskjbvh</p>
      </div>
    </section>
    <section>
      <div>
        <img src={Visionimg} alt="vision" />
      </div>
      <div>
        <h1>Our Vision</h1>
        <p>aehjgbfiewbgoiuwehgpuqiebgouiwebhgiuwehr</p>
      </div>

    </section>
    </>
  )
}

export default About