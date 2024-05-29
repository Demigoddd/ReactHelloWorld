import React, { useState } from "react";
import "./style.css";

import { Game } from "./Game";
import { Result } from "./Result";

const questions = [
  {
    title: 'React is.. ?',
    variants: ['library', 'framework', 'application'],
    correct: 1,
  },
  {
    title: 'React is.. ?',
    variants: ['application', 'framework', 'library'],
    correct: 3,
  },
  {
    title: 'React is.. ?',
    variants: ['framework', 'library', 'application'],
    correct: 2,
  },
];

export const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const progressPercentage = Math.round((step / questions.length) * 100);

  const newGame = () => {
    setStep(0);
    setCorrect(0);
  }

  const stepHandler = (correctAnswerIndex: number) => {
    setStep(step + 1);

    if (questions[step].correct === correctAnswerIndex) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-container__game-progress">
        <div style={{ width: `${progressPercentage}%` }} className="quiz-container__game-progress__inner"></div>
      </div>
      {step !== questions.length ? (
        <Game
          currentQuestion={questions[step]}
          stepHandler={stepHandler}
        />
      ) : (
        <Result
          correct={correct}
          allStepCount={questions.length}
          newGame={newGame}
        />
      )}
    </div>
  );
};
