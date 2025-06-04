import React from 'react';
import Square from './Square';
import './tictactoe.css';

function Board(xIsNext, squares, onPlay) {
    const handleClick = (i) => {
        // console.log('Square clicked:', i);
        const nextSquares = squares.slice();
        if (nextSquares[i] || calculateWinner(nextSquares)) {
            return; // 如果方格已經被點擊或遊戲已經結束，則不做任何操作
        }
        // const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X'; // 如果是 X 的回合，則在方格中放置 X
        }
        else {
            nextSquares[i] = 'O'; // 如果是 O 的回合，則在方格中放置 O
        }
    }

    return (
        <>
            <div className='stuats'>
                <div className='board-row'>
                    <Square value={squares[0]} onSquaerClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquaerClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquaerClick={() => handleClick(2)} />
                </div>
                <div className='board-row'>
                    <Square value={squares[3]} onSquaerClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquaerClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquaerClick={() => handleClick(5)} />
                </div>
                <div className='board-row'>
                    <Square value={squares[6]} onSquaerClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquaerClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquaerClick={() => handleClick(8)} />
                </div>
            </div>
        </>
    );
}

// 判斷是否連成直線
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}




export default Board;