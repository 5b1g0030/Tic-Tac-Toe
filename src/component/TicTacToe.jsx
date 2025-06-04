import React, { useState } from 'react';
import Board from './Board';
import './tictactoe.css';

function TicTacToe(){
    const [history, setHistory] = useState([Array(9).fill(null)]); // 初始化歷史紀錄，包含一個空的方格陣列
    const [currentMove, setCurrentMove] = useState(0); // 當前的移動步數，初始為 0
    const xIsNext = currentMove % 2 === 0; // 判斷當前是 X 還是 O 的回合
    const currentSquares = history[currentMove]; // 獲取當前步數的方格狀態
    
    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove);
    };

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0){
            description = 'Go to move #' + move;
        }
        else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    })
    return(
        <div className='tic-tac-toe'>
            <h1>tic tac toe</h1>
            <div className='game-borad'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className='game-info'>
                <h4>狀態</h4>
                <ol>{moves}</ol> 
            </div>
        </div>
    )
}



export default TicTacToe;