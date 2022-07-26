import React from 'react'
import Header from '../Components/Header/Header';
import AboutBanner from '../Components/AboutBanner/AboutBanner';
import Footer from '../Components/Footer/Footer'
import Accord from '../Components/Accord/Accord';

export default function About() {

    const fiabilityContent = <p className='accordDescription-about__content'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
    const respectContent = <p className='accordDescription-about__content'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
    const serviceContent = <p className='accordDescription-about__content'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
    const securityContent = <p className='accordDescription-about__content'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>

    return (
        <div>
            < Header />
            < AboutBanner />
            < Accord title='Fiabilité' description={fiabilityContent} accord='accordAbout' accordVisible='accord-visible-about' accordTitleAbout='accordTitle-about' accordDescription='accordDescription-about' />
            < Accord title='Respect' description={respectContent} accord='accordAbout' accordVisible='accord-visible-about' accordTitleAbout='accordTitle-about' accordDescription='accordDescription-about' />
            < Accord title='Service' description={serviceContent} accord='accordAbout' accordVisible='accord-visible-about' accordTitleAbout='accordTitle-about' accordDescription='accordDescription-about' />
            < Accord title='Sécurité' description={securityContent} accord='accordAbout' accordVisible='accord-visible-about' accordTitleAbout='accordTitle-about' accordDescription='accordDescription-about' />
            < Footer />
        </div>
    )
}
