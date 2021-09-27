import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🏏": "Cricket Game",
  "🏑": "Field Hockey",
  "🏒": "Ice Hockey",
  "🥍": "Lacrosse",
  "🏓": "Ping Pong",
  "🏸": "Badminton",
  "🥊": "Boxing Glove",
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🎾": "Tennis",
  "🥏": "Flying Disc",
  "🎳": "Bowling"
};

var emojiArray = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, findMeaning] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We do not have this emoji in our database!";
    }
    findMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    findMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> SportsMoji </h1>
      <input onChange={inputHandler} />
      <div style={{ fontSize: "2rem", padding: "1rem" }}> {meaning} </div>
      <h3> Emojis </h3>
      {emojiArray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.6rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
