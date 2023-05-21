import React, { useState } from "react";
import './App.css'

function Square ({value,handleClick}){
    return (
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    )
}

export default function App() {
    const [square,setSquare] = useState(Array(9).fill(null));
    const [isXnext,setIsXnext] = useState(true);

    function handleClick

  return (
    <>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    </>
  );
}
