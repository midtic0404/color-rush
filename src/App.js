import React, { useState } from 'react';
import './App.css';

function App() {
  const [normalColor, setNormalColor] = useState(null);
  const [targetColor, setTargetColor] = useState(null);

  const generateColors = () => {
    let restColors = Math.floor(Math.random() * 96) + 80;
    let red = restColors;
    let green = restColors;
    let blue = restColors;
    let offset = Math.floor(Math.random() * 2) === 0 ? -30 : 30;
    let randRGB = Math.floor(Math.random() * 3);

    if (randRGB === 0) {
      red = 255;
      setNormalColor(`rgb(${red}, ${blue}, ${green})`);
      blue += offset;
      green += offset;
    } else if (randRGB === 1) {
      green = 255;
      setNormalColor(`rgb(${red}, ${blue}, ${green})`);
      red += offset;
      blue += offset;
    } else {
      blue = 255;
      setNormalColor(`rgb(${red}, ${blue}, ${green})`);
      red += offset;
      green += offset;
    }

    setTargetColor(`rgb(${red}, ${blue}, ${green})`);
  };

  let rows = [];
  let targetRow = Math.floor(Math.random() * 3);
  let targetColumn = Math.floor(Math.random() * 3);
  for (let i = 0; i < 3; i++) {
    let circles = [];
    for (let j = 0; j < 3; j++) {
      let color = normalColor;
      if (i === targetRow && j === targetColumn) {
        color = targetColor;
      }
      circles.push(
        <div
          key={`${i}, ${j}`}
          className='circle'
          style={{ background: color }}
        ></div>
      );
    }
    let row = (
      <div key={i} className='row'>
        {circles}
      </div>
    );
    rows.push(row);
  }

  return (
    <div className='App'>
      <div className='board'>{rows}</div>
      <button onClick={generateColors}>Get color</button>
    </div>
  );
}

export default App;
