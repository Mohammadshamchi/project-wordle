import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessValue, answer }) {
  // console.log({ guessValue });
  const result = checkGuess(guessValue, answer);
  console.log({ result });
  return (
    <p className="guess">
      {/* and here instead of map through guessValue (guessValue.split(""))we add range to keep it 5 character */}
      {/* But there is a problem : last character become guessValue[num] become undefined as guessValue[6] here num act as index which start from 0-4  */}
      {/* so we handle it like this structure 
      if guessValue exicst equal to guessValue[num] else undefined
        guessValue ? guessValue[num] : undefined
      
      */}

      {/* and also instead of spliting the character we tell it should be 5 with range already
        so no need to add split again      

        No Need : 
        range(5)
        .split("")
        .map((num) => (
       

      */}
      {range(5).map((num) => (
        <span
          className={`cell ${result ? result[num].status : undefined}`}
          key={num}
        >
          {guessValue ? guessValue[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
