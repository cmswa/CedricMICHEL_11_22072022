import React, { useState, useRef, useEffect } from 'react'
import './Accord.css'
import ChevronDown from '../../assets/icons/chevron-down.png'

export default function Accord({ title, description, accord, accordVisible, accordTitleAbout, accordDescription }) {

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
    <div className={accord}>

      <div
        onClick={toggleState}
        className={accordVisible}>
        <h2 className={accordTitleAbout}>{title}</h2>
        <img className={toggle ? 'chevron rotate' : 'chevron'} src={ChevronDown} alt="chevron down" />
      </div>

      <div
        ref={refHeight}
        className={toggle ? 'accord-toggle animated' : 'accord-toggle accord-toggle'}
        style={{ height: toggle ? '100%' : '0px', paddingTop: '0' }} /*  hauteur qui grandit et rétrécit */
      // style={{ height: toggle ? 'auto' : '0px' }}
      >
        <div className={accordDescription}
          aria-hidden={toggle ? 'true' : 'false'} /* retirer texte présent à la fermeture */
        >
          {description}</div>
      </div>

    </div>
  )
}
