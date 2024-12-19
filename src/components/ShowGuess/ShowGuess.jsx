import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function ShowGuess(x) {
  let myItems = []
  myItems.push(x)

  console.log(myItems)
  return (
    <div className="guess-results">
      <p className="guess">FIRST</p>
      <p className="guess" key={uuidv4()}>s</p>
    </div>
  )
}

export default ShowGuess;
