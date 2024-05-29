import React from "react";
import "./style.css";

export const Game: React.FC<any> = ({currentQuestion, stepHandler}) => {
  return (
    <div className="quiz-container__game">
      <h1>{currentQuestion.title}</h1>
      <ul className="quiz-container__game-list">
        {currentQuestion.variants.map((n: string, i: number) => (
          <li
            key={i}
            className="quiz-container__game-list__item"
            onClick={() => stepHandler(i+1)}
          >
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
