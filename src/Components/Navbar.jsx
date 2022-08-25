import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import Logo from '../Assets/images/logo.png'
import {links} from '../Assets/data'
import {GoThreeBars} from 'react-icons/go'
const Navbar = () => {
  return (
    <div className = 'bg-slate-800'>
        <Link to = '/'> <img src={Logo} alt="NavLogo" /> </Link>
        <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9'>
            {
                links.map(({name,path}) =>{
                    return (
                        <li> <NavLink to={path}>{name}</NavLink></li>
                    )
                })
            }
        </ul>
        <button><GoThreeBars/></button>
    </div>
  )
}

export default Navbar