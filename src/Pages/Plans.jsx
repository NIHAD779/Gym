import React from 'react'
import Header from '../Components/Header'
import headerimg from '../Assets/images/header_bg_4.jpg'
import Card from '../UI Components/Card'
import {plans} from '../Assets/data'
const Plans = () => {
  return (
    <>
    <Header title = "Membership Plans" image = {headerimg}>
      savdkjbaoinsvbqebuvanebo
    </Header>
    <section>
      <div className='flex gap-6 m-10'>
        {
          plans.map(({id, name ,desc,features}) => {
            return (
              <Card key={id}>
                <h1 className='text-center text-white'>{name}</h1>
                <small>{desc}</small>
                {/* <h1>{'$${price}'}</h1> */}
                <h4>Features</h4><h2>/mo</h2>
                {
                  features.map(({feature,available},index) => {
                    return (
                      <p key = {index} className ={!available ? 'disabled' : ''}>{feature}</p>

                    )
                  })
                }

                <button className='rounded-full bg-neutral-100 p-2'> Choose Plan</button>

              </Card>
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans