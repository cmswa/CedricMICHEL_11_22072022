import React from 'react';
import AboutBannerImg from '../../assets/img/about.png';
import AboutBannerImgMobile from '../../assets/img/aboutMob.png';
import './AboutBanner.css';

export default function AboutBanner() {
    return (
        <section className="aboutBanner">
            <img src={AboutBannerImg} alt="bannière" className="aboutBanner__img" />
            <img src={AboutBannerImgMobile} alt="bannière" className="aboutBanner__img--mobile" />
            <div className="aboutBanner__layer"></div>
        </section>
    )
}
