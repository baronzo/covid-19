import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

function MapView() {
    return(
        <MapContainer className='map-view' center={[13, 100]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}
export default MapView;