import React from "react";

export const Counter = (props) => {
    const digits = [];

    // generate array with counter unit dividends
    for (let i = 0; i < props.numberOfDigits; i++){
        if(i == 0) digits.push('1');
        else digits.unshift(digits[0]+0);
    }

    return (
        <>
            <h1 className="col px-3 py-4 m-1 text-bg-dark bg-dark bg-gradient rounded-3"><i className={`fa-solid ${props.modeCountdown ? "fa-hourglass-start" : "fa-stopwatch"}`}></i></h1>
            {digits.map((digit, i) => <h1 key={i} className="col px-3 py-4 m-1 text-bg-dark bg-dark bg-gradient rounded-3">{Math.floor(props.time / Number(digit)) % 10}</h1>)}
        </>
    );
}