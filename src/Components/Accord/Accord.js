import React from 'react'
import './Accord.css'
import ChevronDown from '../../assets/icons/chevron-down.png'

export default function Accord() {
  return (
    <div className='accord'>

      <div className="accord-visible">
        <h2 className='accordTitle'>Lorem ipsum dolor sit amet.</h2>
        <img src={ChevronDown} alt="chevron down" />
      </div>

      <div className="accord-toogle">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, explicabo. Delectus perferendis earum doloribus quasi mollitia tempore rem molestiae officiis soluta repellendus nobis error, nisi vel provident! Eaque, maxime possimus.</p>
      </div>

    </div>
  )
}
