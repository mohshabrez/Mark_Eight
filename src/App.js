import React, { useState } from "react";
import "./styles.css";
// var counter = 0;

const emojiDictionary = {
  "😊": "Smiling",
  "😲": "Disbelief",
  "😔": "sad",
  "🤯": "takeout box",
  "😍": "love",
  "😑": "Annoyance"
};

var emojisWeknow = Object.keys(emojiDictionary);
//made a list from object using keys

export default function App() {
  const [meaning, setMeaning] = useState("");
  //use state makes a retrive value and change set value to other
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    //event gets captured and stored in userInput
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our data";
    }
    setMeaning(meaning);
    //setting the meaning using useState
  }
  function emojiClickHandler(emoji) {
    //  console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Outtt</h1>
      <input onChange={emojiInputHandler}></input>
      {/* use onchange to get the input each step of input */}

      <h2>{meaning}</h2>

      <h3>Emojis we know</h3>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            //onclick handler gets a retrive output when click happens
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}

      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}

// var shoppingList = ["A", "B", "c", "d", "e", "f"];
// function getBy(index) {
//   if (index % 2 === 0) {
//     return "white";
//   }
//   return "gray";
// }
// function listItemClickHandler(item){
//   console.log("clicked", item)

// }

// <h2>Print the list</h2>
// <ul>
//   {shoppingList.map(function (item, index) {
//     return (<li
//     Key = {item}
//     onClick = {() => listItemClickHandler(item)}
//      style={{ backgroundColor: getBy(index) }}> {item}</li>;
//   })})
// </ul>
