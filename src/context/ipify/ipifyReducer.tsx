import { Action, State } from './IpifyState';
import * as actionTypes from '../types';

const ipifyReducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_GEO_LOCATION:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GEO_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default ipifyReducer;
