import React, { useState, useEffect } from 'react'
import MapView from './Components/MapView'
import 'leaflet/dist/leaflet.css'
import './Css/App.scss'
import Axios from 'axios'
import ListView from './Components/ListView'

const api = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations'

function App() {
  const [locationArray, setLocationArray] = useState([])

  function sortedLocationArray(locations) {
    return [...locations].sort((location1, location2) => {
      return location2.latest.confirmed - location1.latest.confirmed
    })
  }
  
  useEffect(() => {
    Axios.get(api).then(response => {
      const sortedLocations = sortedLocationArray(response.data.locations)
      setLocationArray(sortedLocations)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <ListView locationArray={locationArray}/>
      <MapView locationArray={locationArray}/>
    </div>
  );
}

export default App;
