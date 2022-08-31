import { useReducer } from 'react'
import './App.css'

let initialState = 0

const Reducer = (state,action) => {
  switch(action.type){
    case "COUNT-UP":
     return state+1
    case "COUNT-DOWN":
     return state-1 
    case "RESET":
     return 0
    default:
     return state
  }

}

export default function App() {

  const [firstState, dispatch] = useReducer(Reducer,initialState)

  return (
    <div className="App">
      <h1 style={{background:"black", color:"white"}}>{firstState}</h1>
      <button onClick={()=>dispatch({type: "COUNT-UP"})}>UP</button>
      <button onClick={()=>{dispatch({type: "RESET"})}}>RESET</button>
      <button onClick={()=>{dispatch({type: "COUNT-DOWN"})}}>Down</button>
      <p style={{background:"black", opacity:50}}>counting game</p>
    </div>
  )
}
