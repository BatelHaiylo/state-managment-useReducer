import { useReducer } from 'react'
import './App.css'
import CounterReducer from './store/reducers/counter-reducer'
import {countUpAction,countResetAction,countDownAction,countUpdateAction} from './store/actions/counter-action'
export let initialState = 0

export default function App() {

  const [firstState, dispatch] = useReducer(CounterReducer,initialState)

  return (
    <div className="App">
      <h1 style={{background:"black", color:"white"}}>{firstState}</h1>
      <button onClick={()=>dispatch(countUpAction())}>UP</button>
      <button onClick={()=>{dispatch(countResetAction())}}>RESET</button>
      <button onClick={()=>{dispatch(countDownAction())}}>Down</button>
      <button onClick={()=>{dispatch(countUpdateAction(20))}}>Update</button>
      <p style={{background:"black", opacity:50}}>counting game</p>
    </div>
  )
}
