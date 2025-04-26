import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => setInput(input + value);

  const calculate = () => {
    try {
      setResult(eval(input)); // Note: Using eval is not recommended for untrusted input
    } catch {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="Calculator">
      <div className="Calculator-leftbar">
        <input type="text" value={input} readOnly />
        <p>{result}</p>
      </div>
      <div className="Calculator-rightbar">
        <div>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
        <div>
          <button onClick={clear}>C</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

