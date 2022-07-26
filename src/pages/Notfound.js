import React from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Link } from "react-router-dom";
import '../styles/NotFound.css'

export default function Notfound() {
    return (
        <div>
            < Header />
            <section className='notFound'>
                <h1 className="notFound__title">
                    404
                </h1>
                <h2 className="notFound__txt">
                    Oups! La page que vous demandez n'existe pas.
                </h2>
                <Link className='notFound__link' to='/'>Retourner sur la page d’accueil</Link>
            </section>
            < Footer />
        </div>
    )
}
