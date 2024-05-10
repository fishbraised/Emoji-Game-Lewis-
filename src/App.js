import React from 'react';
import './style.css';
import EmojiGame from './components/EmojiGame';

const emojiArr = [
  {
    id: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 1,
    image:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
  {
    id: 2,
    image: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 3,
    image:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 4,
    image:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 5,
    image:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 6,
    image: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 7,
    image:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 8,
    image:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 9,
    image:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 10,
    image:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 11,
    image: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
];

const App = () => <EmojiGame emojiArr={emojiArr} />;

export default App;
