/** @format */

import React, { useState } from "react";

const Counter = () => {
  const [count,setCount] = useState(0)

  const handleCount = () => {
    setCount(count => count + 1)
  }

  return (
    <div>
        <h1>Counter App</h1>
        <h3>Count: {count}</h3>
        <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default Counter;
