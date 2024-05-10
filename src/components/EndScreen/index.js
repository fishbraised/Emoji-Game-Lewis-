import React from 'react';
import './index.css';

const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png';
const winImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png';

const EndScreen = (props) => {
  return (
    <div className="end-screen-con">
      <div className="details-con">
        <h1>YOU WON!</h1>
        <h3>Best Score</h3>
        <h2>12/12</h2>
        <button>Play Again</button>
      </div>
      <div className="image-con">
        <img src={winImg} alt="win-img" />
      </div>
    </div>
  );
};

export default EndScreen;
