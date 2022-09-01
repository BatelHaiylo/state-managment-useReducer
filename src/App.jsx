import { useReducer } from 'react'
import './App.css'
import CounterReducer from './store/reducers/counter-reducer'
import CounterProvider from './components/context/CounterProvider'
import Counter from './components/pages/counter/Counter.components'

export default function App() {

  return (
    <CounterProvider>
      <div className="App">
        <Counter/>
      </div>
    </CounterProvider>
  )
}
