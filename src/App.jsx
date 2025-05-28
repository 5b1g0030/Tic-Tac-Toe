import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './component/TicTacToe.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>井字遊戲</h2>
      <TicTacToe/>
    </>
  )
}

export default App
