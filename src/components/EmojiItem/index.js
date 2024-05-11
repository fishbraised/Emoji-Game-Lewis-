import React from "react";
import "./index.css";

const EmojiItem = (props) => {
  const { emojiData, emojiInput } = props;
  const { id, image } = emojiData;

  const onEmojiClick = () => {
    emojiInput(id);
  };

  return (
    <li>
      <button onClick={onEmojiClick}>
        <img src={image} alt={image} />
      </button>
    </li>
  );
};

export default EmojiItem;
