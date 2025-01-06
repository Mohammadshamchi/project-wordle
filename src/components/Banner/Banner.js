import React from "react";

function Banner({ gameStatus }) {
  console.log({ gameStatus });
  if (gameStatus === "Won!") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>3 guesses</strong>
        </p>
      </div>
    );
  } else if (gameStatus === "lost!") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
