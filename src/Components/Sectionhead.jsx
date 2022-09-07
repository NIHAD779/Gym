import React from 'react'

const Sectionhead = ({icon,title}) => {
  return (
    <section>
        <span>{icon}</span>
        <h2>{title}</h2>
    </section>
  )
}

export default Sectionhead