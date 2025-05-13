import { useState } from 'react'
import Button from './Button'


function App() {
  const [color, setColor] = useState("black")

  return (
    
      <div className="w-full h-screen duration-100" style={{backgroundColor:color}}>
       <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {/* <button onClick={()=>setColor("red")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("yellow")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"yellow"}}>Yelllow</button>
          <button onClick={()=>setColor("black")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>setColor("olive")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"olive"}}>Olive</button> */}
           <Button onClick={() => setColor("red")} name="red" />
          <Button onClick={() => setColor("green")} name="green" />
          <Button onClick={() => setColor("blue")} name="blue" />
          <Button onClick={() => setColor("yellow")} name="yellow" />
          <Button onClick={() => setColor("black")} name="black" />
          <Button onClick={() => setColor("olive")} name="olive" />
           <Button  onClick={()=>setColor("deeppink")} name="deeppink"/>
        </div>
       </div>
      </div>
    
  )
}

export default App
