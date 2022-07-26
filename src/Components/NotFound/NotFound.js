import React from 'react'
import { Link } from "react-router-dom";
import './NotFound.css'

export default function NotFound() {
    return (
        <section className='notFound'>
            <h1 className="notFound__title">
                404
            </h1>
            <h2 className="notFound__txt">
                Oups! La page que vous demandez n'existe pas.
            </h2>
            <Link className='notFound__link' to='/'>Retourner sur la page d’accueil</Link>
        </section>
    )
}
