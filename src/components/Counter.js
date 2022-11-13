import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    
      <div style={{textAlign:"center",backgroundColor:"aqua" }}>
        <h1 className="text-center">COUNT APP </h1>
        <br />
        <div style={{fontSize : "100px"}}>{counter}</div>
        <br />
        <br />
        <button  className="mx-5"onClick={increment} >
          INCREMENT
        </button>
        <button onClick={decrement}>
          DECREMENT
        </button>
      </div>
    
  );
};

export default Counter;
