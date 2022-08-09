import React, { FC } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import './MapStyle.module.css';

export interface Props {}

const MapInterface: FC = (props: Props) => {
  return (
    <div id='map'>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
      </MapContainer>
    </div>
  );
};

export default MapInterface;
