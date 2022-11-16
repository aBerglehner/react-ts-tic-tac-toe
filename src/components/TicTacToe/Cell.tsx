import React from 'react';
import { useState } from 'react';

type PropData = {
    num: number;
    turn: string;
    setTurn: (v: string) => void;
    cells: string[];
    setCells: (v: string[]) => void;
    setWinner: (v: string) => void;
};

export const Cell = ({ num, turn, setTurn, cells, setCells, setWinner }: PropData) => {
    const checkForWinner = (squares: string[]) => {
        let combos: { [key: string]: number[][] } = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagnol: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''
                ) {
                    // do nothing
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]]);
                }
            });
        }
    };
    const handleClick = (): void => {
        if (cells[num] !== '') {
            alert('field already chosen!! Choose a free field');
            return;
        }
        const squares: string[] = [...cells];
        if (turn === 'x') {
            squares[num] = 'x';
            setTurn('o');
        } else {
            squares[num] = 'o';
            setTurn('x');
        }
        checkForWinner(squares);
        setCells(squares);
        console.log(squares);
    };

    return <td onClick={handleClick}>{cells[num]}</td>;
};
