import React, { useState, useEffect } from 'react';
import './style.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isOddNumber, setIsOddNumber] = useState(false);
  const [isEvenNumber, setIsEvenNumber] = useState(false);
  const [isPerfectSquare, setIsPerfectSquare] = useState(false);

  useEffect(() => {
    findOddOrEvenNumber();
  }, [counter]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const findOddOrEvenNumber = () => {
    const squareRootOfNumber = Math.sqrt(counter);
    setIsPerfectSquare(Number.isInteger(squareRootOfNumber));
    if (Math.abs(counter) % 2 === 1) {
      setIsOddNumber(true);
      setIsEvenNumber(false);
    } else if (Math.abs(counter) % 2 === 0) {
      setIsOddNumber(false);
      setIsEvenNumber(true);
    }
  };

  return (
    <div>
      <h2>Counter Component</h2>
      <div className="counter">
        <button
          className="counter__btn counter__btn--increment"
          onClick={handleIncrement}
        >
          +
        </button>
        <div className="counter__display">{counter}</div>
        <button
          className="counter__btn counter__btn--decrement"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>

      <div>
        <li className="display-list">
          {counter}
          {isOddNumber ? ' is an odd number' : ' is not an odd number'}
        </li>
        <li className="display-list">
          {counter}
          {isEvenNumber ? ' is an even number' : ' is not an even number'}
        </li>
        <li className="display-list">
          {counter}
          {isPerfectSquare
            ? ' is a perfect square number'
            : ' is not a perfect square number'}
        </li>
      </div>
    </div>
  );
};

export default App;
