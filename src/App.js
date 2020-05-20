import React, { useState, useRef, Fragment } from 'react';
import './App.css';
import Circle from './Circle';

function App() {
  const [gameRows, setGameRows] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalRef = useRef(null);

  const startGame = () => {
    setScore(0);
    setIsPlaying(true);
    startTimer();
    setUpRows();
  };

  const startTimer = () => {
    setTimeLeft(5);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft > 1) {
          return timeLeft - 1;
        }
        gameOver();
        return 0;
      });
    }, 1000);
  };

  const gameOver = () => {
    setIsPlaying(false);
    stopTimer();
  };

  const circleClicked = (isTarget) => {
    if (isTarget) {
      setScore((score) => {
        return score + 1;
      });
      resetTimer();
      setUpRows();
    } else {
      setTimeLeft((timeLeft) => {
        return timeLeft - 1;
      });
    }
  };

  const resetTimer = () => {
    stopTimer();
    startTimer();
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const setUpRows = () => {
    let baseColor = Math.floor(Math.random() * 256);
    let restColors = Math.floor(Math.random() * 96) + 80;
    let red = restColors;
    let green = restColors;
    let blue = restColors;
    let offset = Math.floor(Math.random() * 2) === 0 ? -20 : 20;
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
      {isPlaying && (
        <Fragment>
          <h1 className='count-down'>{timeLeft}</h1>
          <div className='board'>{gameRows}</div>
        </Fragment>
      )}
      <h1 className='score'>Score: {score}</h1>
      {!isPlaying && (
        <button className='button' onClick={startGame}>
          Start Game
        </button>
      )}
    </div>
  );
}

export default App;
