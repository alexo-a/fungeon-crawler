import React from 'react';
//import { useStoreContext } from '../../utils/GlobalState';

function Square({x,y, classNames, handleClick}) {

    return (
        <div className={classNames} onClick={(event) => { handleClick(event) }}>
            <div className="hitpointsBar">
                <div className="hitpointsRemaining">

                </div>
                <div className="hitpointsLost">

                </div>
            </div>
            <div className="img-loc" x={x} y={y}>

                {/*{x}, {y}*/}
            </div>
        </div>
    );
};

export default Square;