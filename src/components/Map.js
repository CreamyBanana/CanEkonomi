import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { containerStyle, center } from "../styles/Map.style";

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDVfR3hUhchF7lVL_IEqwTqzbj7_FUk_kg"
  })

  const [ setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
        mapTypeId="satellite"
      >

        <Marker position={{ lat: 59.623660, lng: 16.502070}} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)