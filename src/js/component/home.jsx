import React, { useState, useEffect, useRef } from "react";
import { Digit } from "./digit";
import { Counter } from "./counter";

//create your first component
const Home = () => {
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(false);

  useEffect(()=>{
    if(countdown && timer === 0) setCountdown(false);
    
    const intervalFunc = () => {
      if(!countdown) {setTimer(timer => timer + 1)};
      if(countdown && timer > 0) {setTimer(timer => timer - 1)};
    }

    const interval = setInterval(intervalFunc, 1000);
    return ()=> clearInterval(interval);
  });
  
  const handleInitialCounter = (startCounterValue) => {
    setCountdown(true);
    setTimer(startCounterValue);
  };

  return (
    <div className="container">
      <div className="row text-center d-flex bg-black bg-gradient py-3 px-4 rounded-2 mt-3">
        <Counter time={timer} numberOfDigits={6} />
      </div>

      <div className="mb-3">
        <label htmlFor="numberToStartCounter" className="form-label">
          Enter a Number to start Countdown:
        </label>

        <input
          type="number"
          className="form-control"
          id="numberToStartCounter"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleInitialCounter(Number(e.target.value));
            }
          }}
        />
      </div>
    </div>
  );
};

export default Home;
