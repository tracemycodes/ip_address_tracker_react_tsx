import React, { FC } from 'react';
import Header from './components/Header/Header';
import MapInterface from './components/mapBox/MapInterface';
import MapboxState from './context/mapbox/MapboxState';

const App: FC = () => {
  return (
    <div>
      <MapboxState>
        <Header />
        <MapInterface />
      </MapboxState>
    </div>
  );
};

export default App;
