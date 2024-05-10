import { Component } from "react";
import "./index.css";
import EmojiItem from "../EmojiItem";
import EndScreen from "../EndScreen";

// When you click the emoji:
// 1. If it is already clicked, end the game to you lose.
// 2. If it is the last item clicked, end the game to you win.
// 3. If not, update the score and shuffle.

class EmojiGame extends Component {
  state = { clickedEmojis: [], gameStatus: true };

  getShuffledEmojiArr = () => {
    const { emojiArr } = this.props;

    emojiArr.sort((a, b) => Math.random() - 0.5);

    return emojiArr;
  };

  endGame = () => {
    this.setState({ gameStatus: false });
  };

  emojiInput = (id) => {
    const { clickedEmojis } = this.state;
    const isEmojiThere = clickedEmojis.includes(id);

    if (isEmojiThere) {
      this.endGame();
    } else {
      this.setState((prevState) => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }));
    }
  };

  gameScreen = () => {
    const emojiArr = this.getShuffledEmojiArr();

    return (
      <ul>
        {emojiArr.map((eachEmoji) => (
          <EmojiItem
            key={eachEmoji.id}
            emojiData={eachEmoji}
            emojiInput={this.emojiInput}
          />
        ))}
      </ul>
    );
  };

  render() {
    const { clickedEmojis, gameStatus } = this.state;

    console.log(clickedEmojis);

    console.log(gameStatus);

    return (
      <div className="bg-con">
        <header>
          <div className="title-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="game-logo-img.png"
            />
            <h1>Emoji Game</h1>
          </div>
          <div className="score-con">
            <h1>Score: 0</h1>
            <h1>Top Score: 0</h1>
          </div>
        </header>

        <div className="emoji-con">
          {gameStatus ? this.gameScreen() : <EndScreen />}
        </div>
      </div>
    );
  }
}

export default EmojiGame;
