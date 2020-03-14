import React from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import Nonogram from './Nonogram.js'

function App() {
  return (
    <div className="App">
      <Nonogram/>
      <Button color="primary">Play!</Button>
    </div>
  );
}

export default App;
