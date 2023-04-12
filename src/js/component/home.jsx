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

      {/* PLAY - RESUME - STOP */}
      <hr></hr>
      <div className="row my-2 justify-content-center">
        <div className="col-6 d-flex justify-content-center">
          { <i className={`fa-solid w-10 fs-2 m-3 cursor-pointer ${start ? "fa-pause fa-bounce text-success" : "fa-play fa-fade text-primary"}`} onClick={()=>setStart(!start)}></i>}
          { <i className={`fa-solid w-10 fa-stop fs-2 m-3 ${start || timer > 0 ? "text-danger cursor-pointer" : "text-secondary"}`} onClick={()=>{if(timer > 0)handleStop()}}></i>}
        </div>
      </div>

      {/* COUNTER - COUNTDOWN */}
      <hr></hr>
      <div className="row my-3">
        <div className="cor-6 d-flex justify-content-center">
          <input type="radio" className="btn-check m-3" onClick={()=>{setCountdown(false)}} name="options-outlined" id="success-outlined" autocomplete="off" checked={!countdown}/>
          <label className="btn btn-outline-success" htmlFor="success-outlined">Timer</label>

          <input type="radio" className="btn-check m-3" onClick={()=>{setCountdown(true)}} name="options-outlined" id="danger-outlined" autocomplete="off" checked={countdown} />
          <label className="btn btn-outline-danger" htmlFor="danger-outlined">Countdown</label>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6 d-flex flex-column mx-auto align-items-center">
          <label htmlFor="numberToStartCounter" className="form-label">
            Enter a Number to start Timer/Countdown:
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
    </div>
  );
};


export default Home;
