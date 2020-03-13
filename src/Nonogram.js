import React, { useState } from 'react';
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

    // componentDidMount () {
    //     generateRandomSolution()
    // }

    let generateRandomSolution = () => {
        return (solutionGame.grid.map(row => row.map(item => item = (Math.round(Math.random())))))
    }

    return (
        <div>
            {generateRandomSolution()}
            <table>
                {
                    solutionUser.grid.map((row, index) => (
                        <tr key={row[0]}>
                            {row.map(cellId => <th key={cellId}>{cellId}</th>)}
                        </tr>
                    ))
                }
            </table>
        </div>

    )

}

export default Nonogram;