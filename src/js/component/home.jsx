import React, { useState, useEffect } from "react";
import { Counter } from "./counter";


const Home = () => {
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [startTimerValue, setStartTimerValue] = useState('');
  const [reachedZero, setReachedZero] = useState(false);

  // refresh counter
  useEffect(() => {
    if(countdown && reachedZero)console.log('condição 2')

    if (isRunning) {
      // when countdown reaches 0
      if (countdown && timer === 0){
        setReachedZero(true);
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

  const reset = () => {
    setTimer(0);
    setCountdown(false);
    setIsRunning(false);
    setStartTimerValue('');
    setReachedZero(false)
  }

  return (
    <div className="container">
      <div className="row text-center d-flex bg-black bg-gradient py-3 px-4 rounded-2 mt-3">
        <Counter time={timer} modeCountdown={countdown} numberOfDigits={6} />
      </div>

      {/* PLAY/RESUME - STOP */}
      <hr></hr>
      <div className="row my-2 justify-content-center">
        <div className="col-2 d-flex justify-content-between">
          { <i className={`fa-solid w-10 fs-2 m-3 cursor-pointer ${isRunning ? "fa-pause fa-bounce text-primary" : !isRunning && timer > 0 ? "fa-play fa-fade text-primary" : (countdown && reachedZero) ? "fa-play text-secondary" : "fa-play text-primary"}`} onClick={ () => {
              if(!isRunning && countdown && timer===0){console.log('Please... insert a number and press enter')}else{setIsRunning(!isRunning)}}
            }></i>}
          { <i className={`fa-solid w-10 fa-stop fs-2 m-3 ${isRunning || timer > 0 || countdown ? "text-primary cursor-pointerx" : "text-secondary"}`} onClick={() => {reset()}}></i>}
        </div>
      </div>

      {/* COUNTER - COUNTDOWN */}
      <hr></hr>
      <div className="row my-3">
        <div className="cor-6 d-flex justify-content-center">
          <input type="radio" className="btn-check" onClick={()=>{setCountdown(false)}} name="options-outlined" id="info-outlined"  autoComplete="off" disabled={isRunning} checked={!countdown}/>
          <label className="btn btn-outline-info m-3" htmlFor="info-outlined">Timer</label>

          <input type="radio" className="btn-check" onClick={()=>{setCountdown(true)}} name="options-outlined" id="warning-outlined" autoComplete="off" disabled={isRunning} checked={countdown} />
          <label className="btn btn-outline-warning m-3" htmlFor="warning-outlined">Countdown</label>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6 d-flex flex-column mx-auto align-items-center">
          {!reachedZero 
            ?
            <input
              type="number"
              className="form-control text-center"
              id="numberToStartCounter"
              placeholder="Enter a number for counting start and press [Enter] key..."
              value={startTimerValue}
              disabled={isRunning}
              onChange={(e) => { setStartTimerValue(e.target.value) }}
              onKeyUp={(e) => { if(e.key === "Enter") {setTimer(Number(startTimerValue))} }}
            />
            :
            <div className="col-6">
              <div className="alert alert-primary d-flex align-items-center" role="alert">
                <i className="bi bi-info-lg flex-shrink-0 me-2"></i>
                <div>0 time has been reached! Press stop button to reset timer.</div>
              </div>
            </div>
          }
        </div>
      </div>
      
    </div>
  );
};


export default Home;
