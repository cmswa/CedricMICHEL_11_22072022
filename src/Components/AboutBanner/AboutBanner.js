import React from 'react';
import AboutBannerImg from '../../assets/img/about.png';
import './AboutBanner.css';

export default function AboutBanner() {
    return (
        <section className="aboutBanner">
            <img src={AboutBannerImg} alt="bannière" className="aboutBanner__img" />
            <div className="aboutBanner__layer"></div>
        </section>
    )
}
