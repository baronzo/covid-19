import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function MapView(props) {
    const { locationArray } = props
    const markerElements = locationArray.map(location => {
        const {
            id, country_code,
            country, province,
            coordinates: { latitude, longitude }
        } = location

        let title = country
        if (province !== '' && province !== country) {
            title = `${province}, ${country}`
        }

        return (
            <Marker key={`${id}-${country_code}`} position={[latitude, longitude]}>
                <Popup>{title}</Popup>
            </Marker>
        )
    })
    return(
        <MapContainer className='map-view' center={[13, 100]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerElements}
        </MapContainer>
    )
}
export default MapView;