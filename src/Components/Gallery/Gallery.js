import React from 'react'
import './Gallery.css'
import Data from '../../data/logements.json'
import ChevronLeft from '../../assets/icons/chevron-left-img.png'
import ChevronRight from '../../assets/icons/chevron-right-img.png'

export default function Gallery() {
  return (
    <section className="gallery">
        <img className='gallery__img' src="https://picsum.photos/1240/415" alt="" />
        <img src={ChevronLeft} alt="previous" className="chevronLeft" />
        <img src={ChevronRight} alt="next" className="chevronRight" />
        <p className="gallery__index">1/6 </p>
    </section>
  )
}
