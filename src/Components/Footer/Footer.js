import React from 'react'
import Logo from '../../assets/icons/logo-footer.png'
import './Footer.css'


export default function Footer() {
  return (
    <footer>
        <img className='footerLogo' src={Logo} alt="Kasa" />
        <p className="footerCopyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
