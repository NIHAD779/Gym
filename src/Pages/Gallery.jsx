import React from 'react'
import Header from '../Components/Header'
import headerimg from '../Assets/images/header_bg_3.jpg'
const Gallery = () => {
  const images = []

  for (let i = 1; i < 15; i++){
    images.push(require(`../Assets/images/gallery${i}.jpg`))
  }
  return (
    <>
    <Header title ="Our Gallery" image = {headerimg}>
      akjbfauibvaioubviubevijjasnviab
    </Header>
    <section>
      <div className='grid grid-cols-3 gap-10 m-5'>
        {images.map((image) => {
          return(
            <article>
              <img src={image} alt=""  className='rounded-xl '/>
            </article>
          )
        })
        }
      </div>
    </section>


    </>
  )
}

export default Gallery