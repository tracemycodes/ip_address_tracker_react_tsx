import React, { FC } from 'react';
import Header from './components/Header/Header';
import MapInterface from './components/mapBox/MapInterface';

const App: FC = () => {
  return (
    <div>
      <Header />
      <MapInterface />
    </div>
  );
};

export default App;
