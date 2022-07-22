import React from 'react'
import Logo from '../../assets/icons/LOGO.png'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <img src={Logo} alt="logo" />
        <div className='nav' >
          <ul className='nav__ul'>
            <li className="nav-home">Accueil</li>
            <li className="nav-about">A Propos</li>
          </ul>
        </div>

    </div>
  )
}
