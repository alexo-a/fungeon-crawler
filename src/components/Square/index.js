import React from 'react';
//import { useStoreContext } from '../../utils/GlobalState';

function Square({x,y, classNames, handleClick, hitpointsRemainingDecimal}) {
    let roundedPercentRemaining = typeof hitpointsRemainingDecimal === "undefined" ? "0" : Math.round((hitpointsRemainingDecimal*10));
    console.log(roundedPercentRemaining)
    let roundedPercentLost = typeof hitpointsRemainingDecimal === "undefined" ? "0" : ((10-roundedPercentRemaining)*10).toString();
    return (
        <div className={classNames} onClick={(event) => { handleClick(event) }}>
            <div className="hitpointsBar">
                <div className={`hitpointsRemaining w${(roundedPercentRemaining*10).toString()}`}>

                </div>
                <div className={`hitpointsLost w${roundedPercentLost}`}>

                </div>
            </div>
            <div className="img-loc" x={x} y={y}>

                {/*{x}, {y}*/}
            </div>
        </div>
    );
};

export default Square;