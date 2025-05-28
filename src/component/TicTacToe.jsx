import React from 'react';
import Board from './Board';
import './tictactoe.css';

function TicTacToe(){
    return(
        <div className='tic-tac-toe'>
            <h1>tic tac toe</h1>
            <div className='game-borad'>
                <Board/>
            </div>
        </div>
    )
}

export default TicTacToe;