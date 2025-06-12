import React, { useState } from "react";
import Board from "./Board";
import './tictactoe.css';

// 遊戲歷程顯示
function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => setCurrentMove(nextMove);

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "回到第 " + move + " 步";
    } else {
      description = "遊戲開始";
    }
    return (
      <>
        <li key={move}>
          <button className="state-Buttom" onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });

  return (
    <div className="game">
      <h1>井字遊戲</h1>
      <div className="game-tictactoe">
        <div className="game-board">
        {/* 遊戲區 */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <h4>遊戲歷程</h4>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
export default TicTacToe;