import React from "react";
import './style.css';

export const Init: React.FC = () => {
  return (
    <div className="init-container">
      <img
        className="init-container__image"
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="congratulations"
      />
      <h1 className="init-container__text">
        Hello World!
      </h1>
    </div>
  );
};
