import React from 'react'
import value_img from '../Assets/images/values.jpg'
import Sectionhead from './Sectionhead'
import {values} from '../Assets/data'
import Card from '../UI Components/Card'
const Values = () => {
  return (
    <section>
        <div className='flex'>
            <div className="left">
                <img src={value_img} alt="" />
            </div>
            <div className="right">
                <Sectionhead title="Values"/>
                <p>
                    bjsvjnwoigneroignwijegbowengibsegjnes
                </p>
                <div className="val_wrap">
                    {
                        values.map(({id,icon,title,desc}) => {
                            return <Card >
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                                </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values