import React from 'react' 
import logo from '../Assets/images/logo.png'
import {Link} from 'react-router-dom'
import {FaLinkedin,FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <article>
            <Link to ="/"> <img src={logo} alt="" /> </Link>
            <p>
            svvjasvh dsifvbsaifdvbafsiubvavnaijbv
            </p>
            <div className='flex'>
                <a href="https://www.linkedin.com/"><FaLinkedin/></a>
                <a href="https://www.facebook.com/"><FaFacebook/></a>
                <a href="https://www.twitter.com/"><AiOutlineTwitter/></a>
                <a href="https://www.instagram.com/"><AiFillInstagram/></a>
            </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to= "/about">About</Link>
            <Link to= "/plans">Plans</Link>
            <Link to= "/trainers">Trainers</Link>
            <Link to= "/gallery">Gallery</Link>
            <Link to= "/contact">Contanct</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to= "/s">About</Link>
            <Link to= "/s">Case Studies</Link>
            <Link to= "/s">Events</Link>
            <Link to= "/s">Communities</Link>
            <Link to= "/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to= "/contact">Contact Us</Link>
          <Link to= "/s">Support</Link>
        </article>

    </footer>
  )
}

export default Footer