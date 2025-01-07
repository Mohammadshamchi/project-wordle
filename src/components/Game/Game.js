import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running!");
  // Game Status will be -> "running", "Lost", "Won".

  function handleSubmitGuess(userInput) {
    const nextGuess = {
      value: userInput,
      id: Math.random(),
    };
    // why we do this way? for future use : finalGuess.length
    // as you know in here for example if and it's equal to 5
    const finalGuess = [...guesses, nextGuess];
    // we expect after running this setGuesses([...gueses, nextGuesess]) immediatly it changes to 6
    // But in real world this does not happen
    // after this component run and also re-rendered it will be updated so in the line of *(star) for comapring updated number we use this way to get the updated value, right after changes.
    //  in simple word : nextGuesses not updated before Game component re-render but finalGuess is already update.
    setGuesses(finalGuess);
    // console.log("This is our lates guesses", guesses);
    console.log({ nextGuess });
    if (nextGuess.value === answer) {
      setGameStatus("Won!");
      // * line *
    } else if (finalGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost!");
    } else {
      setGameStatus("running!");
    }

    console.log(gameStatus);
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} gameStatus={gameStatus} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === "Won!" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost!" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
