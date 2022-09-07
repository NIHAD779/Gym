import React from 'react'
import Header from '../Components/Header'
import Headerimg from '../Assets/images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={Headerimg}>
      kwjehbriuofqeiugbqeirubgquibgruqebugiqboiubgryuqefiqirubiqjebg
    </Header>
    <section>
      <div>
        <a href='www.gmail.com'><MdEmail/></a>
        <a href='www.facebook.com'><BsMessenger/></a>
        <a href='www.whatsapp.com'><IoLogoWhatsapp/></a>
      </div>
    </section>
    </>
  )
}

export default Contact