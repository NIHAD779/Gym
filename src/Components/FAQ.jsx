import React from 'react'
import Sectionhead from './Sectionhead'
import {faqs} from '../Assets/data'
import Faq from '../UI Components/Faq'

const FAQ = () => {
  return (
    <section>
        <div>
            <Sectionhead title = "FAQs"></Sectionhead>
            <div className="flex  gap-3">
                {
                    faqs.map(({id,question,answer}) => {
                        return(
                            <Faq key={id} Q = {question} ans={answer} />
                        )
                    })
                }
            </div>
        </div>
    </section>
    
  )
}

export default FAQ