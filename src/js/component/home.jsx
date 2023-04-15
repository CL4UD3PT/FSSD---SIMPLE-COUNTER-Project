import React, { useState, useEffect, useRef } from "react";
import { Counter } from "./counter";

const Home = () => {
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(false);
  const [start, setStart] = useState(true);
  const [startCounterValue, setStartCounterValue] = useState('');

  // refresh counter
  useEffect(() => {
    if (start) {
      if (countdown && timer === 0){
        handleStop();
      }

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

  const handleStop = () => {
    setStart(false);
    setTimer(0);
    setStartCounterValue('');
  }

  return (
    <div className="container">
      <div className="row text-center d-flex bg-black bg-gradient py-3 px-4 rounded-2 mt-3">
        <Counter time={timer} modeCountdown={countdown} numberOfDigits={6} />
      </div>

      {/* PLAY/RESUME - STOP */}
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
          <input type="radio" className="btn-check" onClick={()=>{setCountdown(false)}} name="options-outlined" id="info-outlined" autocomplete="off" disabled={start} checked={!countdown}/>
          <label className="btn btn-outline-info m-3" htmlFor="info-outlined">Timer</label>

          <input type="radio" className="btn-check" onClick={()=>{setCountdown(true)}} name="options-outlined" id="warning-outlined" autocomplete="off" disabled={start} checked={countdown} />
          <label className="btn btn-outline-warning m-3" htmlFor="warning-outlined">Countdown</label>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6 d-flex flex-column mx-auto align-items-center">
          <input
            type="number"
            className="form-control text-center"
            id="numberToStartCounter"
            placeholder="Enter a number to set Timer|Countdown start and press [Enter] key..."
            value={startCounterValue}
            disabled={start}
            onChange={(e) => { setStartCounterValue(e.target.value) }}
            onKeyUp={(e) => { if(e.key === "Enter") {setTimer(Number(startCounterValue))} }}
          />
        </div>
      </div>
    </div>
  );
};


export default Home;
