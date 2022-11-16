import React from 'react';
import { useState } from 'react';
import { Cell } from './Cell';

export const TicTacToe = () => {
    const [turn, setTurn] = useState<string>('x');
    const [cells, setCells] = useState<string[]>(Array(9).fill(''));
    const [winner, setWinner] = useState<string | null>(null);

    const handleRestart = (): void => {
        setWinner(null);
        setCells(Array(9).fill(''));
    };

    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>Turn: {turn}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Cell
                            num={0}
                            turn={turn}
                            setTurn={setTurn}
                            cells={cells}
                            setCells={setCells}
                            setWinner={setWinner}
                        />
                        <Cell
                            num={1}
                            turn={turn}
                            setTurn={setTurn}
                            cells={cells}
                            setCells={setCells}
                            setWinner={setWinner}
                        />
                        <Cell
                            num={2}
                            turn={turn}
                            setTurn={setTurn}
                            cells={cells}
                            setCells={setCells}
                            setWinner={setWinner}
                        />
                    </tr>
                    <tr>
                        <Cell
                            num={3}
                            turn={turn}
                            setTurn={setTurn}
                            cells={cells}
                            setCells={setCells}
                            setWinner={setWinner}
                        />
                        <Cell
                            num={4}
                            turn={turn}
                            setTurn={setTurn}
                            cells={cells}
                            setCells={setCells}
                            setWinner={setWinner}
                        />
                        <Cell
                            num={5}
                            turn={turn}
                            setTurn={setTurn}
                            cells={cells}
                            setCells={setCells}
                            setWinner={setWinner}
                        />
                    </tr>
                    <tr>
                        <Cell
                            num={6}
                            turn={turn}
                            setTurn={setTurn}
                            cells={cells}
                            setCells={setCells}
                            setWinner={setWinner}
                        />
                        <Cell
                            num={7}
                            turn={turn}
                            setTurn={setTurn}
                            cells={cells}
                            setCells={setCells}
                            setWinner={setWinner}
                        />
                        <Cell
                            num={8}
                            turn={turn}
                            setTurn={setTurn}
                            cells={cells}
                            setCells={setCells}
                            setWinner={setWinner}
                        />
                    </tr>
                </tbody>
            </table>
            {winner && (
                <>
                    <p>{winner} is the winner!!!</p>
                    <button onClick={handleRestart}>Play Again</button>
                </>
            )}
        </div>
    );
};
