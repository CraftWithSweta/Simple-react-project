import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(5)
  //let counter=5
  const addValue=()=>{
    //console.log("clicked",counter)
    counter=counter+1
    setCounter(counter)
  }

    const removeValue=()=>{
    //console.log("clicked",counter)
    if(counter==0)
      setCounter(0)
    
  else{
    counter=counter-1
  }
    setCounter(counter)
  }

  return (
    
    <>
      <h1>Track Your Clicks!</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Grow Count</button>
<button onClick={removeValue}>Shrink Count</button>

      </>
  )
}

export default App

