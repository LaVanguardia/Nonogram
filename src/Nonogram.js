import React, { useState, useEffect } from 'react';
import './Nonogram.scss';
// import { render } from '@testing-library/react';

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

    // Change the value of the cell 1/2/3 when click on it and change the state
    let changeCellValue = (x,y) => {
        let objeto = {...solutionUser};
        objeto.grid[x][y] = objeto.grid[x][y]===2 ?
            0 : objeto.grid[x][y]+1;
        // console.log(objeto)
        changeSolutionUser(objeto);
    }

    // We change the value of SolutionGame, making random values true/false we convert !!1 = true
    useEffect(() => { changeSolutionGame({grid: solutionGame.grid.map(row => row.map(item => item = (Math.round(Math.random()))))}) }, [])
    console.log(solutionGame)
    // ESTO ESTA FALLANDO...Seguir mirando
    // let sumaDePistas=()=>{
    //     // SUMA PISTAS VERTICALES
    //     console.log(solutionGame)
    //     let prueba
    //     let pistaVertical = solutionGame.grid.map(row => row.map(item =>
    //        item ? [prueba+1] : console.log('pruebafalse')
    //     ));
    //     console.log(pistaVertical)
    //     console.log(prueba)
    //     // SUMA PISTAS HORIZONTALES. Sumamos [i] de cada array
    //     var r = [];
    //     for (let i = 0; i < solutionGame.grid[0]; i++) {
    //         // solutionGame.grid.map(row => row[i])
    //         r[i] = solutionGame.grid[i] + solutionGame.grid[i];
    //     }
    //     console.log(r);
    // }
    // setTimeout(function () { sumaDePistas() }, 3000);
    //FIN -  ESTO ESTA FALLANDO

    //CODE TO GENERATE THE CLUES

    let horizontalClues = [];
    let verticalClues = [];

    function horizontalCounter(grid) {
        let values = [];
        let times = [];
        let prev;
        let tempArrayValues = [];
        let tempArrayTimes = [];
        let tempClues = [];
      
        //We generate two arrays of values and times these values are repeated
        for ( let i = 0; i < grid.length; i++ ) {
          for ( let j = 0; j < grid.length; j++) {
            if ( grid[i][j] !== prev ) {
              tempArrayValues.push(grid[i][j]);
              tempArrayTimes.push(1);
            } else {
              tempArrayTimes[tempArrayTimes.length-1]++;
            }
            prev = grid[i][j];
          }
          values.push(tempArrayValues);
          times.push(tempArrayTimes);
          tempArrayValues = [];
          tempArrayTimes = [];
          prev = null;
      
        }
      
      //We select only the values of 1 (which are the clues to be displayed) and store them in horizontalClues
        for ( let i = 0; i < grid.length; i++ ) {
          for ( let j = 0; j < grid.length; j++) {
            if (values[i][j] === 1) {
            tempClues.push(times[i][j]);
            }
          }
          horizontalClues.push(tempClues);
          tempClues = [];
        }
        values = [];
        times = [];

        return horizontalClues;
    }
    //We call the function with the randomly generated array as argument to calculate the horizontal clues
    horizontalCounter(solutionGame.grid);
    console.log(horizontalClues);

    function verticalCounter(grid) {
        let values = [];
        let times = [];
        let prev;
        let tempArrayValues = [];
        let tempArrayTimes = [];
        let tempClues = [];
        let tempVerticalGrid = [];
        let verticalGrid = [];
      
        //We transform the initial array into a vertical one to be able to read the vertical tracks
        for ( let i = 0; i < grid.length; i++ ) {
          for ( let j = 0; j < grid.length; j++) {
      
            tempVerticalGrid.push(grid[j][i])
          }
          verticalGrid.push(tempVerticalGrid);
          tempVerticalGrid=[];
        }
      
      //We divide the vertical array into two arrays of values and times that are repeated (same routine)
        for ( let i = 0; i < grid.length; i++ ) {
          for ( let j = 0; j < grid.length; j++) {
            if ( verticalGrid[i][j] !== prev ) {
              tempArrayValues.push(verticalGrid[i][j]);
              tempArrayTimes.push(1);
            } else {
              tempArrayTimes[tempArrayTimes.length-1]++;
            }
            prev = verticalGrid[i][j];
          }
          values.push(tempArrayValues);
          times.push(tempArrayTimes);
          tempArrayValues = [];
          tempArrayTimes = [];
          prev = null;
      
        }
      
        //We select only the values of 1 (which are the clues to be displayed) and store them in verticalClues
        for ( let i = 0; i < grid.length; i++ ) {
          for ( let j = 0; j < grid.length; j++) {
            if (values[i][j] === 1) {
            tempClues.push(times[i][j]);
            }
          }
          verticalClues.push(tempClues);
          tempClues = [];
        }

        return verticalClues;
      }
      
      //We call the function with the randomly generated array as argument to calculate the vertical clues
      verticalCounter(solutionGame.grid);
      console.log(verticalClues);
 

    return (
        <table className="center">
            <tbody>
                <tr>
                    {/*The first one goes empty*/}
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
                            {row.map((cell, cellIndex) => <td className={`cell_${cell}`} key={cellIndex} onClick={() => changeCellValue(rowIndex, cellIndex)} >{cell}</td>)}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Nonogram;