import { createContext } from "react"
import { Dispatch, State } from "./IpifyState"

type InitialStateType = {
  state: State;
  dispatch: Dispatch;
}

const ipifyContext = createContext<InitialStateType | null>(null!)


// const ipifyContext = createContext<{
//   state: State
//   dispatch: Dispatch
// } | null>(null!)

export default ipifyContext