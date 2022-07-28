import React from 'react'
import './Locality.css'

export default function Locality() {
  return (
    <section className="locality">
        <div className="locality__specifics">
          <h2 className="locality__specifics-title">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="locality__specifics-place">Lorem, ipsum dolor.</p>
          <ul className="locality__specifics-tags">
            <li className="tag">Lorem.</li>
            <li className="tag">Lorem.</li>
            <li className="tag">Lorem.</li>
          </ul>
        </div>
        <div className="locality__host">
          <div className="locality__host__profil">
            <p className='locality__host__profil-name' >Lorem, ipsum.</p>
            <img src="https://picsum.photos/64/64" alt="" className="locality__host__profil-img" />
          </div>
          <ul className="locality__host__stars">
            <li className="star"><img src="https://picsum.photos/30/30" alt="" className="star-img" /></li>
            <li className="star"><img src="https://picsum.photos/30/30" alt="" className="star-img" /></li>
            <li className="star"><img src="https://picsum.photos/30/30" alt="" className="star-img" /></li>
            <li className="star"><img src="https://picsum.photos/30/30" alt="" className="star-img" /></li>
            <li className="star"><img src="https://picsum.photos/30/30" alt="" className="star-img" /></li>
          </ul>
        </div>
      </section>
  )
}
