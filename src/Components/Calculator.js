import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [secondNumber, setSecondNumber] = useState("");

  const handleClick = (value) => {
    if (!isNaN(value) || value === ".") {
      if (operator === null) {
        setInput(input + value);
        setFirstNumber((prev) => (prev !== null ? prev + value : value));
      } else {
        setInput(input + value);
        setSecondNumber((prev) => prev + value);
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (firstNumber !== null && operator === null) {
        setInput(input + value);
        setOperator(value);
      }
    } else if (value === "=") {
      if (firstNumber !== null && operator && secondNumber !== "") {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        let result = 0;

        switch (operator) {
          case "+": result = num1 + num2; break;
          case "-": result = num1 - num2; break;
          case "*": result = num1 * num2; break;
          case "/": result = num2 !== 0 ? num1 / num2 : "Error"; break;
          default: break;
        }

        setInput(result.toString());
        setFirstNumber(result.toString());
        setOperator(null);
        setSecondNumber("");
      }
    } else if (value === "Clear") {
      setInput("");
      setFirstNumber(null);
      setOperator(null);
      setSecondNumber("");
    }
  };

  const buttons = [
    "1", "2", "3", "-",
    "4", "5", "6", "+",
    "7", "8", "9", "*",
    "0", ".", "=", "/"
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h1 className="title">Simple Calculator</h1>
        <input type="text" value={input} readOnly className="display" />
        <div className="buttons-grid">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="button"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={() => handleClick("Clear")}
            className="button clear-button"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
