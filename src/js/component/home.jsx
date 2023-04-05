import React from "react";
import { Digit } from "./digit"

//create your first component
const Home = () => {
	return (
		<div className="d-flex p-2 text-center">
			<Digit text="0"/>
			<Digit text="0"/>
			<Digit text="0"/>
			<Digit text="0"/>
			<Digit text="0"/>
		</div>
	);
};

export default Home;
