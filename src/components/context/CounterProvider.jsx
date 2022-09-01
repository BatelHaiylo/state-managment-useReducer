import { useReducer,createContext } from "react";
import CounterReducer from "../../store/reducers/counter-reducer";

export const counterContext = createContext()
export let initialState = 0


export default function CounterProvider({children}){
    const [counterState, dispatch] = useReducer(CounterReducer,initialState)

    return(
        <counterContext.Provider value={{counterState, dispatch}}>
            {children}
        </counterContext.Provider>
    )
}