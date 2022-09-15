import React from 'react' 
import logo from '../Assets/images/logo.png'
import {Link} from 'react-router-dom'
import {FaLinkedin,FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='flex bg-blue-400 justify-between gap-5 p-5 fixed bottom-0 w-full '>
        <article className='flex flex-col gap-4'>
            <Link to ="/"> <img src={logo} alt=""  className='w-24'/> </Link>
            <p>
            svvjasvh dsifvbsaifdvbafsiubvavnaijbv
            </p>
            <div className='flex gap-2 justify-center'>
                <a href="https://www.linkedin.com/"><FaLinkedin/></a>
                <a href="https://www.facebook.com/"><FaFacebook/></a>
                <a href="https://www.twitter.com/"><AiOutlineTwitter/></a>
                <a href="https://www.instagram.com/"><AiFillInstagram/></a>
            </div>
        </article>
        <article className='flex flex-col'>
            <h4>Permalinks</h4>
            <Link to= "/about">About</Link>
            <Link to= "/plans">Plans</Link>
            <Link to= "/trainers">Trainers</Link>
            <Link to= "/gallery">Gallery</Link>
            <Link to= "/contact">Contanct</Link>
        </article>
        <article className='flex flex-col'>
            <h4>Insights</h4>
            <Link to= "/s">About</Link>
            <Link to= "/s">Case Studies</Link>
            <Link to= "/s">Events</Link>
            <Link to= "/s">Communities</Link>
            <Link to= "/s">FAQs</Link>
        </article>
        <article className='flex flex-col'>
          <h4>Get In Touch</h4>
          <Link to= "/contact">Contact Us</Link>
          <Link to= "/s">Support</Link>
        </article>

    </footer>
  )
}

export default Footer