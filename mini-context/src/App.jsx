import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Context Api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
