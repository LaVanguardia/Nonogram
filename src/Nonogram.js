import React, { Component } from 'react';
import './Nonogram.scss';

class Nonogram extends Component {

    state = {
        // We create a new grid here of 5x5
        grid: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
    }

    createNewGame = () => {
        // first we calculate how many numbers are we going to have per row
        let numbersToPlay = this.state.grid[0].length;

        let verticalClues = [];
        let horizontalClues = [];

        // To calculate the vertical clues, we use a random number
        for (let i = 0; i < numbersToPlay; i++) {
            verticalClues.push(Math.floor(Math.random() * numbersToPlay));
        }
        console.log(verticalClues);
       
        // Esto lo he visto en internet Javi, puede estar muy chulo para iterar en cada row y dentro de cada row, en cada item...
        //     let newPuzzle = () => {
        //     puzzleGrid.map(row =>
        //         row.map(item => (Math.floor(Math.random() * 3) === 0 ? 0 : 1))
        //     )
        // };
    }

    render() {
        return (
            <div className="game container-fluid" >
                <p>{this.numbersToPlay}</p>
                {this.createNewGame()}
            </div>
        )
    }
}

export default Nonogram;