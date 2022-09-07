const elements = () => {
    <div className='h-full w-full flex justify-between items-center relative px-20'>
            <Link to = '/'> <img src={Logo} className='w-[7rem]' alt="NavLogo" /> </Link>
        
                <ul className='text-white '>
                    {
                        links.map(({name,path}) =>{
                            return (
                                <li> <NavLink to={path}>{name}</NavLink></li>
                            )
                        })
                    }
                </ul >
            
            <button className='md:hidden' ><GoThreeBars/></button>
        </div>
}
const Navbar = () => {
    
  return (
    <nav className= ' grid place-items-center w-screen bg-blue-500 h-[5rem]'>
        
    </nav>
    
  )
}

export default Navbar