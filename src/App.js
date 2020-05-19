import React, { useState } from 'react';
import './App.css';
import Circle from './Circle';

function App() {
  const [gameRows, setGameRows] = useState([]);

  const startGame = () => {
    setUpRows();
  };

  const circleClicked = (isTarget) => {
    if (isTarget) {
      setUpRows();
    }
  };

  const setUpRows = () => {
    let baseColor = Math.floor(Math.random() * 256);
    let restColors = Math.floor(Math.random() * 96) + 80;
    let red = restColors;
    let green = restColors;
    let blue = restColors;
    let offset = Math.floor(Math.random() * 2) === 0 ? -30 : 30;
    let randRGB = Math.floor(Math.random() * 3);
    let normalColor = '';
    let targetColor = '';

    if (randRGB === 0) {
      red = baseColor;
      normalColor = `rgb(${red}, ${blue}, ${green})`;
      blue += offset;
      green += offset;
    } else if (randRGB === 1) {
      green = baseColor;
      normalColor = `rgb(${red}, ${blue}, ${green})`;
      red += offset;
      blue += offset;
    } else {
      blue = baseColor;
      normalColor = `rgb(${red}, ${blue}, ${green})`;
      red += offset;
      green += offset;
    }

    targetColor = `rgb(${red}, ${blue}, ${green})`;

    let rows = [];
    let newTargetRow = Math.floor(Math.random() * 3);
    let newTargetColumn = Math.floor(Math.random() * 3);
    for (let i = 0; i < 3; i++) {
      let circles = [];
      for (let j = 0; j < 3; j++) {
        let color = normalColor;
        let isTarget = false;
        if (i === newTargetRow && j === newTargetColumn) {
          color = targetColor;
          isTarget = true;
        }
        circles.push(
          <Circle
            key={`${i}, ${j}`}
            color={color}
            circleClicked={circleClicked}
            isTarget={isTarget}
          />
        );
      }
      let row = (
        <div key={i} className='row'>
          {circles}
        </div>
      );
      rows.push(row);
    }
    setGameRows(rows);
  };

  return (
    <div className='App'>
      <div className='board'>{gameRows}</div>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default App;
