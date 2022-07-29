import React from 'react'
import './Gallery.css'
import Data from '../../data/logements.json'
import ChevronLeft from '../../assets/icons/chevron-left-img.png'
import ChevronRight from '../../assets/icons/chevron-right-img.png'
import { useState } from 'react'

export default function Gallery({ pictures, title }) {

  const [currentPicture, setCurrentPicture] = useState(0)

  return (
    <section className="gallery">
      {/* checker alt après un changement de photos */}
      <img className='gallery__img' src={pictures[currentPicture]} alt={title} />
      <img src={ChevronLeft} alt="previous" className="chevronLeft" />
      <img src={ChevronRight} alt="next" className="chevronRight" />
      <p className="gallery__index">1/6 </p>
    </section>
  )
}
