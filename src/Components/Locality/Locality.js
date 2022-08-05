import React from 'react'
import './Locality.css'
import Stars from '../Stars/Stars';

export default function Locality({ logement }) {
  return (
    <section className="locality">
      <div className="locality__specifics">
        <h2 className="locality__specifics-title">
          {logement.title}
        </h2>
        <p className="locality__specifics-place">{logement.location}</p>
        <ul className="locality__specifics-tags">
          {logement.tags.map((tag) => {
            return (
              <li className="tag" key={tag}>{tag}</li>
            )
          })}
          {/* <li className="tag">Lorem.</li>
          <li className="tag">Lorem.</li> */}
        </ul>
      </div>
      <div className="locality__host">
        <div className="locality__host__profil">
          <p className='locality__host__profil-name' >{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} className="locality__host__profil-img" />
        </div>
        <ul className="locality__host__stars">
          < Stars rating={logement.rating} />
          {/* <li className="star"><img src="https://picsum.photos/30/30" alt="" className="star-img" /></li>
          <li className="star"><img src="https://picsum.photos/30/30" alt="" className="star-img" /></li>
          <li className="star"><img src="https://picsum.photos/30/30" alt="" className="star-img" /></li>
          <li className="star"><img src="https://picsum.photos/30/30" alt="" className="star-img" /></li>
          <li className="star"><img src="https://picsum.photos/30/30" alt="" className="star-img" /></li> */}
        </ul>
      </div>
    </section>
  )
}
