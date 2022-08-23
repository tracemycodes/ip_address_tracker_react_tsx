import { createContext } from "react";
import { Dispatch, State } from "./MapboxState"



const MapboxContext = createContext<{
  state: State
  dispatch: Dispatch
} | null>(null!)

export default MapboxContext;