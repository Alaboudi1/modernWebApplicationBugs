import React, { useState } from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState("0");

  // Function to increment the counter
  const handleIncrement = () => {
    // Incorrect closure capturing the initial state setter
    const updateCounter = () => setCounter(counter + 1);
    updateCounter();
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>Counter value: {counter}</p>
    </div>
  );
};

export default CounterComponent;
