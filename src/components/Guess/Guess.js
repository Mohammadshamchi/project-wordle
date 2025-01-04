import React from "react";

function Guess({ guessValue }) {
  return (
    <p className="guess">
      {guessValue.split("").map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
