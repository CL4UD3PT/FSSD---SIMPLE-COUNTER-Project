import React from "react";
import { Digit } from "./digit";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <div className="row text-center d-flex bg-dark bg-gradient py-3 px-4 rounded-2 mt-3">
        <Digit text="0" />
        <Digit text="0" />
        <Digit text="0" />
        <Digit text="0" />
        <Digit text="0" />
        <Digit text="0" />
        <Digit text="0" />
      </div>
    </div>
  );
};

export default Home;
