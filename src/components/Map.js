import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { containerStyle, center } from "../styles/Map.style";

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDVfR3hUhchF7lVL_IEqwTqzbj7_FUk_kg"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        mapTypeId="satellite"
      >

        <Marker position={{ lat: 59.623660, lng: 16.502070, address: "Svalgången 1, 724 81 Västerås" }} onClick={() => window.open("https://www.google.se/maps/place/Svalg%C3%A5ngen+1,+724+81+V%C3%A4ster%C3%A5s/@59.6241863,16.4999469,17z/data=!3m1!4b1!4m5!3m4!1s0x465e63fcc20cbb81:0x1334cfd6399f338a!8m2!3d59.6241863!4d16.5021357")} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)