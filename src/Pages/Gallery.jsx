import React from 'react'
import Header from '../Components/Header'
import headerimg from '../Assets/images/header_bg_3.jpg'
const Gallery = () => {
  const images = []

  for (let i = 1; i <= 15; i++){
    images.push(<img src='../Assets/images/gallery$(i).jpg' alt="gallery"></img>)
  }
  return (
    <>
    <Header title ="Our Gallery" image = {headerimg}>
      akjbfauibvaioubviubevijjasnviab
    </Header>
    <section>
      <div>
        {images.map((image) => {
          return(
            <article>
              <img src={image} alt="" />
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