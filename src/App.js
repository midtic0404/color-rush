import React from 'react';
import './App.css';

function App() {
  const generateColors = () => {
    let red;
    let green;
    let blue;
    let restColors;

    let randRGB = Math.floor(Math.random() * 3);

    if (randRGB === 0) {
      red = 255;
    } else if (randRGB === 1) {
      green = 255;
    } else {
      blue = 255;
    }

    //Todo: Set up the rest of the color
  };

  return (
    <div className='App'>
      <div className='board'>
        <div className='row'>
          <div
            className='circle'
            style={{ background: 'rgb(255,200,200)' }}
          ></div>
          <div
            className='circle'
            style={{ background: 'rgb(255,220,220)' }}
          ></div>
          <div
            className='circle'
            style={{ background: 'rgb(255,220,220)' }}
          ></div>
        </div>
        <div className='row'>
          <div
            className='circle'
            style={{ background: 'rgb(255,230,230)' }}
          ></div>
          <div
            className='circle'
            style={{ background: 'rgb(255,230,230)' }}
          ></div>
          <div
            className='circle'
            style={{ background: 'rgb(255,230,230)' }}
          ></div>
        </div>
        <div className='row'>
          <div
            className='circle'
            style={{ background: 'rgb(255,230,230)' }}
          ></div>
          <div
            className='circle'
            style={{ background: 'rgb(255,230,230)' }}
          ></div>
          <div
            className='circle'
            style={{ background: 'rgb(255,230,230)' }}
          ></div>
        </div>
      </div>
      <button onClick={generateColors}>Get color</button>
    </div>
  );
}

export default App;
