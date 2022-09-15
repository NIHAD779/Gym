import React from 'react'
import value_img from '../Assets/images/values.jpg'
import Sectionhead from './Sectionhead'
import {values} from '../Assets/data'
import Card from '../UI Components/Card'
const Values = () => {
  return (
    <section>
        <div className='flex justify-between px-10 gap-4'>
            <div className="left">
                <img src={value_img} alt=""  className='rounded'/>
            </div>
            <div className="right">
                <Sectionhead title="Values"/>
                <p>
                    bjsvjnwoigneroignwijegbowengibsegjnes
                </p>
                <div className="val_wrap flex flex-col gap-6">
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