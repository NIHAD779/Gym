import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <section>
      <div>
        <h1>Page Not Found</h1>
        <Link to='/'> Go Back Home</Link>
      </div>
    </section>
    </>
  )
}

export default NotFound