import React from "react";

export const Counter = (props) => {
    const digits = [];
    
    // generate array with counter unit dividends
    for (let i = 0; i < props.numberOfDigits; i++){
        if(i == 0) digits.push('1');
        else digits.unshift(digits[0]+0);
        console.log(typeof props.startCounterAt, typeof props.time);
    }

    return (
        <>
            <h1 className="col px-3 py-4 m-1 text-bg-dark bg-dark bg-gradient rounded-3"><i className="fa-regular fa-clock"></i></h1>
            {digits.map((digit, i) => <h1 className="col px-3 py-4 m-1 text-bg-dark bg-dark bg-gradient rounded-3">{Math.floor((props.startCounterAt + props.time) / Number(digit)) % 10}</h1>)}
        </>
    );
}