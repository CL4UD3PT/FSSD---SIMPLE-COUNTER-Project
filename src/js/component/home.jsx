import React, { useState, useEffect } from "react";
import { Digit } from "./digit";
import { Counter } from "./counter";

//create your first component
const Home = () => {
  const [timer, setTimer] = useState(0);
  const [mode, setMode] = useState("timer");
  const [initialCounter, setInitialCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (mode === "timer") setTimer((timer) => timer + 1);
      if (mode === "countdown" && timer > 0) setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="row text-center d-flex bg-black bg-gradient py-3 px-4 rounded-2 mt-3">
        <Counter time={timer} startCounterAt={initialCounter} numberOfDigits={6} />
      </div>
      <div className="mb-3">
        <label for="numberToStartCounter" className="form-label">
          Insert Number to Countdown Start:
        </label>
        <input
          type="number"
          className="form-control"
          id="numberToStartCounter"
          onKeyUp={(e)=>{
            if(e.key === 'Enter'){
              setInitialCounter(Number(e.target.value));
            }
          }}
        />
      </div>
    </div>
  );
};

export default Home;
