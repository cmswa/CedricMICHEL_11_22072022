import React from 'react'
import Logo from '../../assets/icons/LOGO.png'
import './Header.css'
import { v4 as uuidv4 } from 'uuid';
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className='header'>
      <Link to="/"><img src={Logo} alt="Kasa" /></Link>
      <nav className='nav'>
        {/* <Link className="nav-home" to='/'>Accueil</Link>
        <Link className="nav-about" to='/about'>A Propos</Link> */}
        <NavLink to='/'
          className={({ isActive }) => isActive ? 'activeLink' : 'notAvtiveLink'}
        >
          Accueil
        </NavLink>
        <NavLink to='/about'
          className={({ isActive }) => isActive ? 'activeLink' : 'notAvtiveLink'}
        >
          A Propos
        </NavLink>
      </nav>

    </header>
  )
}
