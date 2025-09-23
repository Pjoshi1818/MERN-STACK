import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task1 from './Task1'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Task1 />
  )
}

export default App
