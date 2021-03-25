import React, { useState, useEffect } from 'react'
import MapView from './Components/MapView'
import 'leaflet/dist/leaflet.css'
import './Css/App.scss'
import Axios from 'axios'

const api = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations'

function App() {
  const [locationArray, setLocationArray] = useState([])
  useEffect(() => {
    Axios.get(api).then(response => {
      setLocationArray(response.data.locations)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <MapView locationArray={locationArray}/>
    </div>
  );
}

export default App;
