import React from "react";
import { Digit } from "./digit";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <div className="row text-center d-flex">
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
