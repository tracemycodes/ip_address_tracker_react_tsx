import { ReactNode, useReducer } from 'react';
import MapboxContext from './mapboxContext';
import mapboxReducer from './mapboxReducer';

export interface Action {
  type: string;
  payload: any;
}

export interface State {
  loading: boolean;
  ipAdd: string;
  error: null | string;
}

const initialState = {
  loading: true,
  error: null,
  ipAdd: '',
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
