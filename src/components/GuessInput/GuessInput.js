import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [userInput, setUserInput] = React.useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    if (userInput.length !== 5) {
      alert("Please Write Exactly 5 words! ❤️");
      return;
    }
    // Instead of this console log we give the value of userInput as handleSubmitGuess()
    console.log({ userInput });
    handleSubmitGuess(userInput);
    setUserInput("");
  }
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          disabled={gameStatus === "running!" ? false : true}
          required
          id="guess-input"
          type="text"
          value={userInput}
          minLength={5}
          maxLength={5}
          // These 2 added Because handle edge cases!
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          // Reason behind the adding pattern is Because when you add character with upperCase(holding Shift) the minLength and maxLength Doesn't work properly
          // and until here! title : to clarify the {5} error in pattern should be [a-zA-Z] not numbers
          onChange={(e) => {
            setUserInput(e.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
