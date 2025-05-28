import React from 'react';
import Square from './Square';

function Board(){
    return (
        <>
            <div className='stuats'>
                <div className='board-row'>
                    <Square value={0} onSquaerClick={()=>{}}/>
                    <Square value={1} onSquaerClick={()=>{}}/>
                    <Square value={2} onSquaerClick={()=>{}}/>
                </div>
                <div className='board-row'>
                    <Square value={3} onSquaerClick={()=>{}}/>
                    <Square value={4} onSquaerClick={()=>{}}/>
                    <Square value={5} onSquaerClick={()=>{}}/>
                </div>
                <div className='board-row'>
                    <Square value={6} onSquaerClick={()=>{}}/>
                    <Square value={7} onSquaerClick={()=>{}}/>
                    <Square value={8} onSquaerClick={()=>{}}/>
                </div>
            </div>
        </>
    );
}

export default Board;