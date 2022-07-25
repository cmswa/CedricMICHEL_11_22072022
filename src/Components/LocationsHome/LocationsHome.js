import React from 'react'
import './LocationsHome.css'
import { useState, useEffect } from 'react'
import Data from '../../data/logements.json'
let url = "";

export default function Gallery() {

  return (
    <section className="locationsHome">
      <ul className="locationsHome__contains">
        {Data.map((logement) => (
          <li className="location" key={logement.id}>
            <a href={url} className="location__link">
              <img src={logement.cover} alt={logement.title} className="location__img" />
              <div className="location__layer"></div>
              <p className="location__title">{logement.title}</p>

            </a>

          </li>
        ))}

        {/* <li className="location"></li>
        <li className="location"></li>
        <li className="location"></li>
        <li className="location"></li>
        <li className="location"></li>
        <li className="location"></li> */}

      </ul>
    </section>
  )
}
