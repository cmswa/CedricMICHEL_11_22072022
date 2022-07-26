import React from 'react'
import Header from '../Components/Header/Header';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import LocationsHome from '../Components/LocationsHome/LocationsHome';
import Footer from '../Components/Footer/Footer'


export default function Home() {
  return (
    <div>
        < Header/>
        < HomeBanner />
        < LocationsHome />
        < Footer />
    </div>
  )
}
