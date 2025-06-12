import React from 'react';
import './tictactoe.css';

// 九宮格方塊顯示
function Square({value, onSquareClick}){
    return (
        <button className='square' onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default Square;