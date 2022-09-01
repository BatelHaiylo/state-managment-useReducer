import { counterContext } from "../context/CounterProvider"
import { useContext } from "react"
import { countUpdateAction } from "../../store/actions/counter-action"
import { useState } from "react"

export default function NumberInput(){
    const {counterState, dispatch} =useContext(counterContext)

    return(
        <div>
        <label htmlFor="countingNum">plerade enter a number</label>
        <input type="number" name="countingNum" defaultValue={counterState} onChange={(e)=>{dispatch(countUpdateAction(e.target.value))}}/>
        </div>
    )
}
export function NumberInputOnclick(){
    const {counterState, dispatch} =useContext(counterContext)
    const [number,setNumber] = useState(counterState)

    return(
        <div>
        <label htmlFor="countingNum">plerade enter a number</label>
        <input type="number" name="countingNum" defaultValue={counterState} onChange={(e)=>{setNumber(e.target.value)}}/>
        <button onClick={()=>{dispatch(countUpdateAction(number))}}>CHANGE</button>
        </div>
    )
}