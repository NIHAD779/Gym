import React from 'react'
import {FaCrown} from 'react-icons/fa'
import Sectionhead from './Sectionhead'
import {programs} from '../Assets/data' 
import Card from '../UI Components/Card'
import { Link } from 'react-router-dom'

const Programs = () => {
  return (
    <section>
        <div>
            <div>
                <Sectionhead icon = {FaCrown} title = "Programs"/>
            </div>
            <div>
                {
                    programs.map(({id,icon,title,info,path}) => {
                        return(
                            <Card key={id}>
                                <span> {icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to ={path}>Learn More</Link>
                            </Card>
                        )
                    })
                }

            </div>
        </div>
    </section>
  )
}

export default Programs