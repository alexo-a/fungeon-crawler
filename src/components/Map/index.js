import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import React from 'react';
import {Square} from "./Square";

function Map() {
    let renderSquares = (x,y) => {
        return <Square x={x} y={y}/>;
    }
    let squares = [];
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x<10; x++){
            squares.push(<Square x={x} y={y}/>)
        }
    }
    return (
        <div>
            {squares}
        </div>
    )
}

export default Map;