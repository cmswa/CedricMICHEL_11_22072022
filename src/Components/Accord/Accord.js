import React, { useState, useRef, useEffect } from 'react'
import './Accord.css'
import ChevronDown from '../../assets/icons/chevron-down.png'

export default function Accord({ title, description }) {

  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState()

  const toggleState = () => {
    setToggle(!toggle);
  }

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  return (
    <div className='accordLocation accordAbout'>

      <div
        onClick={toggleState}
        className="accord-visible-about accord-visible-location">
        <h2 className='accordTitle-about accordTitle-location'>{title}</h2>
        <img className={toggle ? 'chevron rotate' : 'chevron'} src={ChevronDown} alt="chevron down" />
      </div>

      <div
        ref={refHeight}
        className={toggle ? ('accord-toggle-about animated' || 'accord-toggle-location animated') : 'accord-toggle-about accord-toggle-location'}
        style={{ height: toggle ? `${heightEl}` : '0px', paddingTop: '0' }} /*  hauteur qui grandit et rétrécit */
      // style={{ height: toggle ? 'auto' : '0px' }}
      >
        <div className='accordDescription-about accordDescription-location'
          aria-hidden={toggle ? 'true' : 'false'} /* retirer texte présent à la fermeture */
        >
          {description}</div>
      </div>

    </div>
  )
}
