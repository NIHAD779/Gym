import React from 'react'

const Header = ({title,image,children}) => {
  return (
    <header>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    </header>
    )
}

export default Header