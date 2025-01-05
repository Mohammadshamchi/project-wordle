import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  // console.log("This is our guessssss", { guesses });
  return (
    <div className="guess-results">
      {/* in Exercise 2 : instead of rendering guesses buy it self as i make it as an object with key of 
      value:userInput, 
      id:Random.math(),
      so I de-Structure it {value,id}.
      */}

      {/* And Also in Exercise 3 : 
      for rendering 6 row even though user not provide values 
      we use range instead of mapping through guesses ( which was users input)
      */}
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return (
          // Now in here instead of rendering the words

          // <p className="guess" key={id}>
          //   {value}
          // </p>

          // each time is expected to render a word I call the Guess Component!
          <Guess key={num} guessValue={guesses[num]?.value} answer={answer} />
        );
      })}
    </div>
  );
}

export default GuessResults;
