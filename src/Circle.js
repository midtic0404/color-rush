import React from 'react';

const Circle = ({ circleClicked, color, isTarget }) => {
  return (
    <div
      className='circle'
      style={{ background: color }}
      onClick={circleClicked.bind(this, isTarget)}
    ></div>
  );
};

export default Circle;
