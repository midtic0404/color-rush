import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='board'>
        <div className='row'>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
        <div className='row'>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
        <div className='row'>
          <div className='circle'></div>
          <div className='circle' style={{ background: 'hotpink' }}></div>
          <div className='circle'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
