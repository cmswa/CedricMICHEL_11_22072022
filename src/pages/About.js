import React from 'react'
import Header from '../Components/Header/Header';
import AboutBanner from '../Components/AboutBanner/AboutBanner';
import Footer from '../Components/Footer/Footer'
import Accord from '../Components/Accord/Accord';

export default function About() {

    const fiabilityContent = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';
    const respectContent = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
    const serviceContent = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const securityContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <div>
            < Header />
            < AboutBanner />
            < Accord title='Fiabilité' description={fiabilityContent} />
            < Accord title='Respect' description={respectContent} />
            < Accord title='Service' description={serviceContent} />
            < Accord title='Sécurité' description={securityContent} />
            < Footer />
        </div>
    )
}
