import React from "react";

export default function GuessInput({passingGuess}) {
  const [guess, setGuess] = React.useState('');
  

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess })
    passingGuess(guess);
    setGuess(''); // reset the input
  }

  return (
    <> 
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}
