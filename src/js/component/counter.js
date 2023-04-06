import React from "react";

export const Counter = (props) => {
    return (
        <>
            <h1 className="col px-3 py-4 m-1 text-bg-dark rounded-3"><i class="fa-regular fa-clock"></i></h1>
            <h1 className="col px-3 py-4 m-1 text-bg-dark rounded-3">{Math.floor(props.time / 10000) % 10}</h1>
            <h1 className="col px-3 py-4 m-1 text-bg-dark rounded-3">{Math.floor(props.time / 1000) % 10}</h1>
            <h1 className="col px-3 py-4 m-1 text-bg-dark rounded-3">{Math.floor(props.time / 100) % 10}</h1>
            <h1 className="col px-3 py-4 m-1 text-bg-dark rounded-3">{Math.floor(props.time / 10) % 10}</h1>
            <h1 className="col px-3 py-4 m-1 text-bg-dark rounded-3">{Math.floor(props.time / 1) % 10}</h1>
        </>
    );
}