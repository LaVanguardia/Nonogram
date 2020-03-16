import React, { useState, useEffect } from 'react';
import './Nonogram.scss';
import { render } from '@testing-library/react';

function Nonogram() {

    // ---STATES---
    const [newGame, changeNewGame] = useState({
        // We create a new grid of 5x5
        grid: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
    })
    const [solutionGame, changeSolutionGame] = useState({
        // Here will be the solution (0 and 1) generate randomly
        grid: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
    })
    const [solutionUser, changeSolutionUser] = useState({
        // Here will be the solution (0 and 1) of the user. We compare it with the solutionGame to see if its ok or not
        grid: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
    })
    // ---END OF STATES---

    let changeCellValue = (x,y) => {
        let objeto = {...solutionUser};
        objeto.grid[x][y] = !objeto.grid[x][y];
        changeSolutionUser(objeto);
    }

    // We change the value of SolutionGame, making random values 1 or
    useEffect(() => { changeSolutionGame(solutionGame.grid.map(row => row.map(item => item = (!!Math.round(Math.random()))))) }, [])
    console.log({ solutionGame })

    return (
        <table className="center">
            <tbody>
                <tr>
                    {/* El primero va vacio */}
                    <td></td>
                    <td>pista</td>
                    <td>pista</td>
                    <td>pista</td>
                    <td>pista</td>
                    <td>pista</td>
                </tr>
                {
                    solutionUser.grid.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>pista</td>
                            {row.map((cell, cellIndex) => <td className="cell" key={cellIndex} onClick={() => changeCellValue(rowIndex, cellIndex)} >{cell? 'X' : 'O'}</td>)}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Nonogram;