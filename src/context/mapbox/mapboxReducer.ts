import { Action, State } from "./MapboxState"
import * as actionTypes from "../types"


const mapboxReducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_GEO_LOCATION:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.GEO_LOCATION_SUCCESS:
      return {
        ...state,
        dropLoading: true,
      }
    case actionTypes.GEO_LOCATION_ERROR:
      return {
        ...state,
        dropLoading: true,
      }

    default:
      return state
  }
}

export default mapboxReducer