import React from 'react'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Gallery from '../Components/Gallery/Gallery';
import Locality from '../Components/Locality/Locality';
import Accord from '../Components/Accord/Accord';
import Data from '../data/logements.json'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Location() {

  let id = useParams();

  const navigate = useNavigate();

  const [logement, setLogement] = useState();

  useEffect(() => {                                                                //La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.
    const currentLogement = Data.find((logement) => logement.id === id.locationId) //locationId vient de App.js: <Route path=':locationId' element={<Location />} />
    if (!currentLogement) {
      navigate('/404')
    }
    setLogement(currentLogement)
  }, [id, navigate])

  if (!logement) {
    return null
  }

  return (
    <div>
      < Header />
      < Gallery pictures={logement.pictures} title={logement.title} />
      < Locality logement={logement} />
      <section className="description">
        < Accord title="Description" description={<p>{logement.description}</p>} />
        < Accord title="Équipements"
          description={logement.equipments.map((equipment) =>
            <p className="accordLocation-toggle__equipments__equipment" key={equipment}>{equipment}</p>)} />
      </section>
      < Footer />
    </div>
  )
}
