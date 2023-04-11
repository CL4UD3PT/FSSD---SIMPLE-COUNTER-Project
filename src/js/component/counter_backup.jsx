import React from "react";

export const Counter = (props) => {
    const counterDividend = [];
    const numberOfDigits = [...props.counterInit].reverse();
    const digitConstructor = [];

    for (let i = 0; i < numberOfDigits.length; i++){
        if(i == 0){
            digitConstructor.push({
                value : Number(numberOfDigits[i]),
                dividend : '1'
            })
        }
        else {
            digitConstructor.unshift({
                value : Number(numberOfDigits[i]),
                dividend : (digitConstructor[0].dividend + 0)
            });
        }
    }

    // console.log(digitConstructor)

    // generate dividend and numbers for each digit
    // for (let i = 0; i < numberOfDigits.length; i++){
    //     if(i == 0) counterDividend.push('1');
    //     else counterDividend.unshift(counterDividend[0]+0);
    // }



    return (
        <>
            <h1 className="col px-3 py-4 m-1 text-bg-dark bg-dark bg-gradient rounded-3"><i className="fa-regular fa-clock"></i></h1>
            {digitConstructor.map((digit, i) => <h1 key={i} className="col px-3 py-4 m-1 text-bg-dark bg-dark bg-gradient rounded-3">{Math.floor((props.time + digit.value * digit.dividend) / Number(digit.dividend)) % 10}</h1>)}
            {/* {counterDividend.map((dividend, i) => <h1 key={i} className="col px-3 py-4 m-1 text-bg-dark bg-dark bg-gradient rounded-3">{Math.floor(props.time / Number(dividend)) % 10}</h1>)} */}
        </>
    );
}