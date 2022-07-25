import React from 'react'
import Logo from '../../assets/icons/LOGO.png'
import './Header.css'
import { v4 as uuidv4 } from 'uuid';

export default function Header() {
  return (
    <header className='header'>
        <img src={Logo} alt="Kasa" />
        <div className='nav' >
          <ul className='nav__ul'>
            <li className="nav-home">Accueil</li>
            <li className="nav-about">A Propos</li>
          </ul>
        </div>

    </header>
  )
}
