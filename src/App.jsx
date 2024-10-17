import { useState } from 'react'

import AreaSelection from './AreaSelection/AreaSelection'
import ShowResult from './Result/Result'
import './App.css'

function App() {
  const [areaID, setAreaId] = useState('KU837') //Default to Tampere
  const [areaName, setAreaName] = useState('Tampere')
  const [comparison, setComparison] = useState('Pienempi')


  function handleAreaSelection(areaID, areaName) {
    console.log(areaID)
    setAreaId(areaID)
    setAreaName(areaName)
  }

  function doComparison(percentage) {
    const mean = 12
    if (percentage > mean ) {
      setComparison('suurempi')
    } else if (percentage < mean) {
      setComparison('pienempi')
    } else {
      setComparison('vastaava')
    }
  }

  return (
    <>
      <h1>Katso oman kuntasi tilanne</h1>

      <AreaSelection onSelect={handleAreaSelection}/>

      <div className="comparison">
        <ShowResult area={areaID} areaName={areaName} onResult={doComparison}/>
        <ShowResult area={'SSS'} areaName={'Koko Suomi'}/>
      </div>

      <p>Vieraskielisten osuus varhaiskasvatuksessa paikassa <strong>{areaName}</strong> on <strong>{comparison}</strong> kuin Suomessa keskimäärin</p>

      {/* Not fact checked! */}
      <p>Isoin osuus vieraskielisiä on Vantaalla 32% ja pienin Kempelee 1%</p>
      <p>Tiedot vuodelta 2022, Tilastokeskus</p>
    </>
  )
}

export default App
