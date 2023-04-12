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
  });

  const handleInitialCounter = (startCounterValue) => {
    setStart(false);
    setCountdown(true);
    setTimer(startCounterValue);
  };

  const handleStop = () => {
    setStart(false);
    setTimer(0);
  }

  return (
    <div className="container">
      <div className="row text-center d-flex bg-black bg-gradient py-3 px-4 rounded-2 mt-3">
        <Counter time={timer} modeCountdown={countdown} numberOfDigits={6} />
      </div>

      {/* COUNTER - COUNTDOWN */}
      <div className="row mt-3">
        <div className="cor-6 d-flex justify-content-center">
          <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" />
          <label className="btn btn-outline-success" htmlFor="success-outlined">Timer</label>

          <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" />
          <label className="btn btn-outline-danger" htmlFor="danger-outlined">Countdown</label>
        </div>
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

      {/* PLAY - RESUME - STOP */}
      <div className="row mb-3 justify-content-center">
        <div className="col-6 d-flex justify-content-center">
          { <i className={`fa-solid fs-2 m-3 cursor-pointer ${start ? "fa-pause fa-bounce text-success" : "fa-play fa-fade text-primary"}`} onClick={()=>setStart(!start)}></i>}
          { <i className={`fa-solid fa-stop fs-2 m-3 ${start ? "text-danger cursor-pointer" : "text-secondary"}`} onClick={()=>{handleStop()}}></i>}
        </div>
      </div>
    </div>
  );
};

{/* <button className={`btn ${start?"btn-success":"btn-primary"} fs-2 m-3`} onClick={()=>setStart(!start)}>{ start ? <i className="fa-solid fa-pause fa-bounce"></i> : <i class="fa-solid fa-play fa-fade"></i> }</button> */}
          // {start ? <button className="btn btn-danger fs-2 m-3"><i class="fa-solid fa-stop"></i></button> : ""}

export default Home;
