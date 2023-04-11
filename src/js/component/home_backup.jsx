import React, { useState, useEffect } from "react";
import { Digit } from "./digit";
import { Counter } from "./counter";

//create your first component
const Home = () => {
  const [timer, setTimer] = useState(0);
  const [mode, setMode] = useState('timer');

  useEffect(() => {
    setInterval(() => {
      if (mode === 'timer') setTimer((timer) => timer + 1);
      if (mode === 'countdown' && timer > 0) setTimer((timer) => timer -1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="row text-center d-flex bg-black bg-gradient py-3 px-4 rounded-2 mt-3">
        <Counter time={timer} numberOfDigits={'000000'} />
      </div>
    </div>
  );
};

export default Home;
