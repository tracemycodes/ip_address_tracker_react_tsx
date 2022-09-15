import React, { FC, useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapStyle from './MapStyle.module.css';
import L from 'leaflet';
import MapboxContext from '../../context/mapbox/mapboxContext';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
});

const center = { lat: 59.433421, lng: 24.75224 };

export interface Props {}

const MapInterface: FC = (props: Props) => {
  const context = useContext(MapboxContext);
  const { state } = context ? context : null!;
  const { ipAdd } = state;
  const [geoState, setGeoState] = useState<any>({
    lat: ipAdd.location.lat,
    lng: ipAdd.location.lng,
  });

  useEffect(() => {
    setGeoState({
      lat: ipAdd.location.lat,
      lng: ipAdd.location.lng,
    });
  }, [ipAdd]);

  return (
    <MapContainer
      className={MapStyle['map-div']}
      center={[geoState.lat, geoState.lng]}
      zoom={4}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[geoState.lat, geoState.lng]}></Marker>
    </MapContainer>
  );
};

export default MapInterface;
