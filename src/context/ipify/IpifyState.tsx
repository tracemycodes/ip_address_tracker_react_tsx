import { useReducer } from 'react';
import type { ReactNode } from 'react';
import IpifyContext from './ipifyContext';
import pifyReducer from './ipifyReducer';

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  loading: boolean;
  error: string;
}

export type Dispatch = (action: Action) => void;

const initialState = {
  loading: true,
  error: null,
};

export function IpifyState({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(pifyReducer, initialState);

  return (
    <IpifyContext.Provider value={{ state, dispatch }}>
      {children}
    </IpifyContext.Provider>
  );
}
