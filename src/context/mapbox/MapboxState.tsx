import { ReactNode, useReducer } from 'react';
import MapboxContext from './mapboxContext';
import mapboxReducer from './mapboxReducer';

export interface Action {
  type: string;
  payload: any;
}

export interface State {
  loading: boolean;
  ipAdd: any;
  error: null | string;
}

const locationInfosInitialState = {
  ip: '8.8.8.8',
  location: {
    country: 'US',
    region: 'California',
    city: 'Mountain View',
    lat: 37.40599,
    lng: -122.078514,
    postalCode: '94043',
    timezone: '-07:00',
    geonameId: 5375481,
  },
  domains: [
    '0d2.net',
    '003725.com',
    '0f6.b0094c.cn',
    '007515.com',
    '0guhi.jocose.cn',
  ],
  as: {
    asn: 15169,
    name: 'Google LLC',
    route: '8.8.8.0/24',
    domain: 'https://about.google/intl/en/',
    type: 'Content',
  },
  isp: 'Google LLC',
};

const initialState = {
  loading: true,
  error: null,
  ipAdd: locationInfosInitialState,
};

export type Dispatch = (action: Action) => void;

function MapboxState({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(mapboxReducer, initialState);

  return (
    <MapboxContext.Provider value={{ state, dispatch }}>
      {children}
    </MapboxContext.Provider>
  );
}

export default MapboxState;
