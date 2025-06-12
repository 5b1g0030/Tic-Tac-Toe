import { useState } from 'react'
import './App.css'
import TicTacToe from './component/TicTacToe.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>井字遊戲</h1>
      <TicTacToe/>
    </>
  )
}

export default App
