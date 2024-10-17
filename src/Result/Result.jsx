
import React, { useState, useEffect } from 'react';
import {fetchVakaData} from './pxdata'
import './Result.css'

import CircularProgress from './CircularProgress';


export default function({area, areaName, onResult = ()=>{}}) {

  const [total, setTotal] = useState(0);
  const [portion, setPortion] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
      //const result = await 
      fetchVakaData(area).then( result => {

        if (result) {
          const total = result[0]
          const portion = result[1]

          setTotal(total)
          setPortion(portion)
  
          const percentage = Math.round((portion / total) * 100)
          setPercentage(percentage)
          onResult(percentage)
        } else {
          setError(true)
        }
    
        setLoading(false)

      })
  }, [area]);

  if (loading) {
    return <div>Ladataan...</div>;
  }

  if (error) {
    return <div>Jokin meni pieleen</div>;
  }

  return (
    <div className='results'>
      <h3>{areaName}</h3>
      <CircularProgress progress={ percentage }/>
      <h2>Osuus: {percentage}%</h2>
      <p>Varhaiskasvatukseen osallistui lapsia:</p>
      <p className="number">{total}</p>
      <p>joista vieraskielisiä:</p>
      <p className="number">{portion}</p>
    </div>
  );
}