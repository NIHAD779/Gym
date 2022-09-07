import React from 'react'
import Card from '../UI Components/Card'

const Trainer = ({image,name,job,socials}) => {
  return (
    <Card>
        <div>
        <img src={image} alt="{name}" />
        </div>
        <h1>{name}</h1>
        <p>{job}</p>
        <div>
            {
                socials.map(({icon,link},index) =>{
                return (
                    <a key={index} href = {link}>{icon}</a>
                )
                })
            }
        </div> 
    </Card>
  )
}

export default Trainer