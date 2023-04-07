import React, { useState, useEffect } from "react";
import { Digit } from "./digit";
import { Counter } from "./counter";

//create your first component
const Home = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="row text-center d-flex bg-dark bg-gradient py-3 px-4 rounded-2 mt-3">
        <Counter time={timer} numberOfDigits={6} />
      </div>
    </div>
  );
};

export default Home;
