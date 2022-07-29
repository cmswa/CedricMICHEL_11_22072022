import React from 'react'
import './Gallery.css'
import Data from '../../data/logements.json'
import ChevronLeft from '../../assets/icons/chevron-left-img.png'
import ChevronRight from '../../assets/icons/chevron-right-img.png'
import { useState } from 'react'

export default function Gallery({ pictures, title }) {

  //à l'arrivée sur la page d'un logement, currentPicture est initialisé à 0
  const [currentPicture, setCurrentPicture] = useState(0)
  const picturesLength = pictures.length

  const nextPicture = () => { setCurrentPicture(currentPicture === picturesLength - 1 ? 0 : currentPicture + 1) }
  const previousPicture = () => { setCurrentPicture(currentPicture === 0 ? picturesLength - 1 : currentPicture - 1) }

  return (
    <section className="gallery">
      {/* checker alt après un changement de photos */}
      <img className='gallery__img' src={pictures[currentPicture]} alt={title} />
      <img src={ChevronLeft} alt="previous" className="chevronLeft" onClick={previousPicture} />
      <img src={ChevronRight} alt="next" className="chevronRight" onClick={nextPicture} />
      <p className="gallery__index">{currentPicture + 1}/{picturesLength} </p>
    </section>
  )
}
