import React from 'react'
import Header from '../Components/Header'
import headerimg from '../Assets/images/header_bg_5.jpg'
import { trainers } from '../Assets/data'
import Trainer from '../Components/Trainer'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook,FaLinkedin} from 'react-icons/fa'


const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={headerimg}>
      akwjvblibeoiuqbewiugbqwoebnojqweboiqenboje
    </Header>
    <section>
      <div  className='grid grid-cols-3 gap-10 m-4'>
        {
          trainers.map(({id,image,name,job,socials}) => {
            return(
              <Trainer key={id} image={image} name={name} job={job}
            socials={
              [
                {icon : <BsInstagram/> , link : socials[0]},
                {icon : <AiOutlineTwitter/> , link : socials[1]},
                {icon : <FaFacebook/> , link : socials[2]},
                {icon : <FaLinkedin/> , link : socials[3]}

              ]
            } />
            )

            

          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers