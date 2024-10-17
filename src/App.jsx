import { useState } from 'react'

import AreaSelection from './searchtool/AreaSelect'
import ShowResult from './searchtool/ShowResult'
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
    const mean = 11
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
      <p>Isoin osuus vieraskielisiä on Espoossa 25% ja pienin Akaalla 3%</p>
    </>
  )
}

export default App
