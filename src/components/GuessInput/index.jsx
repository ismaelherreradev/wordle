import { useState } from "react";

export default function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert("Please enter exactly 5 characters. 💖");
      return;
    }

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter Guess</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toLocaleUpperCase();
          setTentativeGuess(nextGuess);
        }}
        type="text"
        id="guess-input"
      />
    </form>
  );
}
  