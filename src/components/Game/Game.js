import React from 'react';

import GuessInput from './GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import ShowGuess from '../ShowGuess/ShowGuess';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [appliedGuesses, setAppliedGuesses] = React.useState([]);
  
  function handlePassData(newGuess) { 
    setAppliedGuesses([...appliedGuesses, newGuess]);
  }
  return (
    <>
      <ShowGuess appliedGuesses={ appliedGuesses} />
    <p>Can you guess the word?</p>
      <GuessInput passingGuess={handlePassData } />
  </>
  );
}

export default Game;
