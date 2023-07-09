import React, { useState, useEffect } from 'react';
import './style.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [oddNumberList, setOddNumberList] = useState([]);
  const [evenNumberList, setEvenNumberList] = useState([]);
  const [perfectSquareList, setPerfectSquareList] = useState([]);

  useEffect(() => {
    createListBasedOnNumber();
  }, [counter]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const createListBasedOnNumber = () => {
    let oddNumberListArray = [];
    let evenNumberListArray = [];
    let perfectSquareListArray = [], ;
    let removeDuplicatesFromOdd, removeDuplicatesFromEven, removeDuplicatesFromPerfectSquare;

    const squareRootOfNumber = Math.sqrt(counter);
    if (Number.isInteger(squareRootOfNumber)) {
      perfectSquareListArray.push(...perfectSquareList, counter);
      removeDuplicatesFromPerfectSquare = perfectSquareListArray.filter((list, index) => {
          return perfectSquareListArray.indexOf(list) === index;
        }
      );
      setPerfectSquareList(removeDuplicatesFromPerfectSquare);
    }

    if (Math.abs(counter) % 2 === 1) {
      oddNumberListArray.push(...oddNumberList, counter);
      removeDuplicatesFromOdd = oddNumberListArray.filter((list, index) => {
        return oddNumberListArray.indexOf(list) === index;
      });
      setOddNumberList(removeDuplicatesFromOdd);
      console.log(oddNumberList);
    } else if (Math.abs(counter) % 2 === 0) {
      evenNumberListArray.push(...evenNumberList, counter);
      removeDuplicatesFromEven = evenNumberListArray.filter((list, index) => {
        return evenNumberListArray.indexOf(list) === index;
      });
      setEvenNumberList(removeDuplicatesFromEven);
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
        <h4>Odd numbers: </h4>
        <li className="display-list">
          {oddNumberList.length ? oddNumberList.join(', ') : '-'}
        </li>
        <h4>Even numbers: </h4>
        <li className="display-list">
          {evenNumberList.length ? evenNumberList.join(', ') : '-'}
        </li>
        <h4>Perfect Square numbers: </h4>
        <li className="display-list">
          {perfectSquareList.length ? perfectSquareList.join(', ') : '-'}
        </li>
      </div>
    </div>
  );
};

export default App;
