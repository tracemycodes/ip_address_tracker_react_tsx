import { createContext } from "react"
import { Dispatch, State } from "./IpifyState"

// type InitialStateType = {
//   state: State;
//   dispatch: Dispatch;
// }

// const initialState = {
//   loading: true,
//   error: null,
// };

// const ipifyContext = createContext< {
//   state: State;
//   dispatch: React.Dispatch<any>;
// } | null>({
//   state: initialState,
//   dispatch: () => null
// })


const ipifyContext = createContext<{
  state: State
  dispatch: Dispatch
} | null>(null!)

export default ipifyContext