import React from "react";
import "./style.css";

export const Result: React.FC<any> = ({correct, allStepCount, newGame}) => {
  return (
    <div className="quiz-container__result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="congratulations" />
      <h2>You guessed {correct} answers out of {allStepCount}</h2>
      <button onClick={newGame}>Try Again</button>
    </div>
  );
}
