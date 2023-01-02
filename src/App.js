import { useState } from "react";
const App = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const fibonacciSeriesElements = [];
  let n1 = 0,
    n2 = 1,
    nextTerm;
  fibonacciSeriesElements.push(n1, n2); // print 0 and 1
  nextTerm = n1 + n2;
  while (nextTerm < +enteredNumber) {
    // print the next term
    fibonacciSeriesElements.push(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
  return (
    <div className="container">
      <h1>Enter Your Number to generate a fibonnaci series</h1>
      <input
        className="input-001"
        type="number"
        onChange={(e) => {
          setEnteredNumber(e.target.value);
        }}
      />
      <h2>
        Fibonacci series :
       <span> {enteredNumber === "" || enteredNumber <= 0
          ? ""
          : [...fibonacciSeriesElements].join(", ")}</span>
      </h2>
    </div>
  );
};

export default App;
