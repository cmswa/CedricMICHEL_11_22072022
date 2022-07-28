import React, { useState, useRef, useEffect } from 'react'
import './AccordLocation.css'
import ChevronDown from '../../assets/icons/chevron-down.png'

export default function AccordLocation({ title, description }) {

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
    <div className='accord'>

      <div
        onClick={toggleState}
        className="accord-visible">
        <h2 className='accordTitle'>{title}</h2>
        <img className={toggle ? 'chevron rotate' : 'chevron'} src={ChevronDown} alt="chevron down" />
      </div>

      <div
        ref={refHeight}
        className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
        style={{ height: toggle ? `${heightEl}` : '0px' }} /* hauteur qui grandit et rétrécit */
      >
        <p
          aria-hidden={toggle ? 'true' : 'false'} /* retirer texte présent à la fermeture */
        >
          {description}</p>
      </div>

    </div>
  )
}
