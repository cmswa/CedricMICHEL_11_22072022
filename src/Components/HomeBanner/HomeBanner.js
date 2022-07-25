import React from 'react'
import HomeBannerImg from '../../assets/img/home.png'
import './HomeBanner.css'

export default function Banner() {
  return (
    <section className="homeBanner">
        <img src={HomeBannerImg} alt="bannière" className="homeBanner__img" />
        <div className="homeBanner__layer"></div>
        <h2 className="homeBanner__txt">
        Chez vous, partout et ailleurs
        </h2>
    </section>
  )
}
