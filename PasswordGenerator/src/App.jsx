import { useCallback, useEffect, useState,useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useref hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let password=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if (charAllowed) str+="`~!@#$%^&*()_-=+/><{}[],.\|:;";

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length)
password += str.charAt(char)

    }
    setPassword(password)

  }, [length,numberAllowed,charAllowed])

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,99 )
  window.navigator.clipboard.writeText(password)
},[password])



useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='wd-full max-w-md mx-auto shadow-md rounded-lg py-5 px-4 my-8 text-orange-500 bg-gray-700'>
<h1 className='text-white text-center'>Password Generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
  <input type="text" value={password}
  className='outline-none w-full py-1 px-3' 
  placeholder='Password'
  readOnly
  ref={passwordRef} />
  <button 
  onClick={copyPasswordToClipboard}
  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
  >Copy</button>
</div>
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'> 
    <input 
    type="range"
    min={6} 
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e) => {
  setlength(Number(e.target.value))
}}
/>
    
    <label>Length:{length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type="checkbox" 
    defaultChecked={numberAllowed}
    id="numberInput" 
    onChange={()=>{
      setNumberAllowed((prev)=>!prev)
    }}/> Numbers
  </div>
   <div className='flex items-center gap-x-1'>
    <input type="checkbox" 
    defaultChecked={charAllowed}
    id="characterInput" 
    onChange={()=>{
      setCharAllowed((prev)=>!prev)
    }}/> Characters
  </div>
</div>
      </div>
    </>
  )
}

export default App
