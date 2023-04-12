import React, { useState, useEffect, useRef } from "react";
import { Digit } from "./digit";
import { Counter } from "./counter";

//create your first component
const Home = () => {
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      if (countdown && timer === 0) setCountdown(false);

      const intervalFunc = () => {
        if (!countdown) {
          setTimer((timer) => timer + 1);
        }
        if (countdown && timer > 0) {
          setTimer((timer) => timer - 1);
        }
      };

      const interval = setInterval(intervalFunc, 1000);
      return () => clearInterval(interval);
    }
  }, [start]);

  const handleInitialCounter = (startCounterValue) => {
    setCountdown(true);
    setTimer(startCounterValue);
  };

  return (
    <div className="container">
      <div className="row text-center d-flex bg-black bg-gradient py-3 px-4 rounded-2 mt-3">
        <Counter time={timer} numberOfDigits={6} />
      </div>

      <div className="row mb-3">
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
      <div className="row mb-3">
        <div className="col-6 d-flex justify-content-center">
          <button className={`btn ${start?"btn-success":"btn-primary"} fs-2`} onClick={()=>setStart(!start)}>{ start ? <i className="fa-solid fa-pause fa-bounce"></i> : <i class="fa-solid fa-play fa-fade"></i> }</button>
          {start ? <button className="btn btn-danger fs-2"><i class="fa-solid fa-stop"></i></button> : ""}
        </div>
      </div>
    </div>
  );
};

export default Home;
