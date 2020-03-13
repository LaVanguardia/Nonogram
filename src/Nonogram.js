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
        changeSolutionGame(
            solutionGame.grid.map(row =>
                row.map(item => (Math.round(Math.random())))
            )
        )
    }
    // generateRandomSolution()

    return (
        <div className="game container-fluid" >
            {solutionGame.grid.map(e =>
                <div className="row">
                    <div className="col-2">{e}</div>
                </div>
            )}
        </div>
    )

}

export default Nonogram;