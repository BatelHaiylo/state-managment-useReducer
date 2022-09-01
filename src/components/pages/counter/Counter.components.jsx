import { useContext } from "react"
import { counterContext } from "../../context/CounterProvider"
import {countUpAction,countDownAction,countResetAction,countUpdateAction} from '../../../store/actions/counter-action'
import NumberInput from "../../featurs/NumberInput.component"
export default function Counter(){
    const {counterState, dispatch} =useContext(counterContext)

    return(
        <div>
            <h1 style={{background:"black", color:"white"}}>{counterState}</h1>
            <button onClick={()=>dispatch(countUpAction())}>UP</button>
            <button onClick={()=>{dispatch(countResetAction())}}>RESET</button>
            <button onClick={()=>{dispatch(countDownAction())}}>Down</button>
            <button onClick={()=>{dispatch(countUpdateAction(25))}}>Update</button>
            <p style={{background:"black", opacity:50}}>counting game</p>
            <NumberInput/>
        </div>
    )
}