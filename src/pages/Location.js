import React from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Gallery from '../Components/Gallery/Gallery';
import Locality from '../Components/Locality/Locality';
import AccordLocation from '../Components/AccordLocation/AccordLocation';

export default function Location() {
  return (
    <div>
      < Header />
      < Gallery />
      < Locality />
      <section className="description">
        < AccordLocation />
        < AccordLocation />
      </section>
      < Footer />
    </div>
  )
}
