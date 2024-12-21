import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function ShowGuess({ appliedGuesses }) {
  console.log(appliedGuesses)


  return (
    <div className="guess-results">
      {appliedGuesses.map((item) => (
        <p className="guess" key={uuidv4()}>{item}</p>
      ))}

    </div>
  )
}

export default ShowGuess;
