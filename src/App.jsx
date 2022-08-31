import { useReducer } from 'react'
import './App.css'
import CounterReducer from './store/reducers/counter-reducer'
import{UP_ACTION,RESET_ACTION,DOWN_ACTION} from './store/actions/counter-actions'

export let initialState = 0

export default function App() {

  const [firstState, dispatch] = useReducer(CounterReducer,initialState)

  return (
    <div className="App">
      <h1 style={{background:"black", color:"white"}}>{firstState}</h1>
      <button onClick={()=>dispatch(UP_ACTION)}>UP</button>
      <button onClick={()=>{dispatch(RESET_ACTION)}}>RESET</button>
      <button onClick={()=>{dispatch(DOWN_ACTION)}}>Down</button>
      <p style={{background:"black", opacity:50}}>counting game</p>
    </div>
  )
}
