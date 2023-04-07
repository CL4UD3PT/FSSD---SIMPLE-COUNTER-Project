import React from "react";

export const Counter = (props) => {

    const digits = [];
    for (let i = 0; i < props.numberOfDigits; i++){
        if(i == 0) digits.unshift('1');
        else digits.unshift(digits[i-1]+0);
    }

    return (
        <>
            <h1 className="col px-3 py-4 m-1 text-bg-dark rounded-3"><i className="fa-regular fa-clock"></i></h1>
            {digits.map((digit, i) => <h1 className="col px-3 py-4 m-1 text-bg-dark rounded-3">{Math.floor(props.time / Number(digit)) % 10}</h1>)}
        </>
    );
}