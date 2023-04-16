import React, { useState, useEffect } from "react";
import { Counter } from "./counter";


const Home = () => {
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [startTimerValue, setStartTimerValue] = useState('');
  const [reachedTarget, setReachedTarget] = useState(false);
  const [timerStop, setTimerStop] = useState(0);

  // refresh counter
  useEffect(() => {
    if (isRunning) {
      // when countdown reaches 0
      if (countdown && timer === 0){
        setReachedTarget(true);
        setIsRunning(false);
      }
      console.log(timer, timerStop)
      if (!countdown && timer === timerStop && timer !== 0){
        setReachedTarget(true);
        setIsRunning(false);
      }

      const intervalFunc = () => {
        // increment timer
        if (!countdown) {
          setTimer((timer) => timer + 1);
        }
        // decrement timer
        if (countdown && timer > 0) {
          setTimer((timer) => timer - 1);
        }
      };
      
      const interval = setInterval(intervalFunc, 1000);
      return () => clearInterval(interval);
    }
  });

  // reset parameters
  const reset = () => {
    setTimer(0);
    setCountdown(false);
    setIsRunning(false);
    setStartTimerValue('');
    setReachedTarget(false);
    setTimerStop(0);
  }

  return (
    <div className="container">
      <div className="row text-center d-flex bg-black bg-gradient py-3 px-4 rounded-2 mt-3">
        <Counter time={timer} modeCountdown={countdown} numberOfDigits={6} countdownFinished={reachedTarget} />
      </div>

      {/* PLAY/RESUME - STOP */}
      <hr></hr>
      <div className="row my-2 justify-content-center">
        <div className="col-2 d-flex justify-content-between">
          { <i className={`fa-solid w-10 fs-2 m-3 cursor-pointer ${isRunning ? "fa-pause fa-bounce text-primary" : !isRunning && timer > 0 && !reachedTarget ? "fa-play fa-fade text-primary" : (countdown && reachedTarget || !isRunning && reachedTarget) ? "fa-play text-secondary" : "fa-play text-primary"}`} onClick={ () => {
              if(!isRunning && countdown && timer===0){console.log('Please... insert a number and press enter')}else{setIsRunning(!isRunning)}}
            }></i>}
          { <i className={`fa-solid w-10 fa-stop fs-2 m-3 ${isRunning || timer > 0 || countdown ? "text-primary cursor-pointerx" : "text-secondary"}`} onClick={() => {reset()}}></i>}
        </div>
      </div>

      {/* COUNTER - COUNTDOWN */}
      <hr></hr>
      <div className="row my-3">
        <div className="cor-6 d-flex justify-content-center">
          <input type="radio" className="btn-check" onClick={()=>{setCountdown(false)}} name="options-outlined" id="info-outlined"  autoComplete="off" disabled={isRunning || reachedTarget} checked={!countdown}/>
          <label className="btn btn-outline-info m-3" htmlFor="info-outlined">Timer</label>

          <input type="radio" className="btn-check" onClick={()=>{setCountdown(true)}} name="options-outlined" id="warning-outlined" autoComplete="off" disabled={isRunning || reachedTarget} checked={countdown} />
          <label className="btn btn-outline-warning m-3" htmlFor="warning-outlined">Countdown</label>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6 d-flex flex-column mx-auto align-items-center">
          {!reachedTarget 
            ?
            <input
              type="number"
              className="form-control text-center"
              id="numberToStartCounter"
              placeholder={countdown ? "Insert a number to set countdown start and press [Enter] key..." : "Insert a number to set stop timer and press [Enter] key..."}
              value={startTimerValue}
              disabled={isRunning}
              onChange={(e) => { setTimer(e.target.value); setStartTimerValue(e.target.value) }}
              onKeyUp={(e) => {
                // countdown
                if(e.key === "Enter" && countdown){
                  setTimer(Number(e.target.value))
                }
                // timer
                if(e.key === "Enter" && !countdown){
                  setTimer(0);
                  setTimerStop(Number(e.target.value))}
                }}
            />
            :
            <div className="alert alert-warning d-flex align-items-center" role="alert">
              <i className="bi bi-info-lg flex-shrink-0 me-2"></i>
              <div className="text-center">Timer has reached the {countdown ? "bottom!" : "top!"}!<br></br>Press stop button to reset it.</div>
            </div>
          }
        </div>
      </div>
      
    </div>
  );
};


export default Home;
