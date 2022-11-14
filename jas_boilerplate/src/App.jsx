import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count = Math.floor(Math.random() * 100))}>
       Press for lucky number here ! 
        </button>
        <p>  {count} </p>
      </div>
     
    </div>
  )
}

export default App
