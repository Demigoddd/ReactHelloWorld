import React, { useState } from "react";
import './style.css';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(5);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <div className="counter-countainer">
      <h2>Counter</h2>
      <h1>{count}</h1>
      <div className="counter-countainer__buttons">
        <button onClick={increase}>UP+</button>
        &nbsp;
        <button onClick={decrease}>Down-</button>
      </div>
      {count < 0 && <span>Hello Neagative Values</span>}
    </div>
  );
};
