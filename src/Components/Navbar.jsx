import React from 'react'
import Logo from '../Assets/images/logo.png'
import { useState } from "react";
import { Link } from 'react-router-dom';
import {links} from '../Assets/data'
import { Drawer , Button, Group,Burger} from "@mantine/core";

const LinkComponents = () => {

    return(
        links.map(({name,path}) =>
        {
            return (
                <>
                    <Link to = {path}>
                        <p>{name}</p>
                    </Link>
                </>
            )
        })
    

    )
    
}

const Navbar = () => {
    const [opened , setOpened] = useState(false)
  return (
    <nav className='flex justify-between bg-blue-400 h-12 px-5 items-center'>
        <Link to ='/'>
            <img src={Logo} alt=""  className='h-8'/>
        </Link>
        <div className='hidden lg:flex  gap-12'>
        <LinkComponents/>
        </div>
        

        
            
        



    <Drawer
    opened = {opened}
    onClose = {()=> setOpened(false)}
    padding="xl"
    size="xl"
    position='right'
    classNames={{
        drawer:'bg-blue-500', closeButton: 'bg-[#18181b]', 
      }}
    >
        <Link to ='/' onClick = {() => setOpened(false)} className= ' flex justify-center' >
            <img src={Logo} alt=""  className='h-10'/>
        </Link>
        <div className='flex flex-col items-center gap-2 '>
            <LinkComponents onClick = {() => setOpened(false)}/>
        </div>

    </Drawer>

    <Group className='lg:hidden'>
        <Button onClick = {() => setOpened(true)}> <Burger/> </Button>
    </Group>
    
    </nav>
    

  )
}

export default Navbar