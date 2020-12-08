import React from 'react';
//import { useStoreContext } from '../../utils/GlobalState';

function Square({x,y, classNames, handleClick}) {

    return (
        <div x={x} y={y} className={classNames} onClick={(event) => { handleClick(event) }}>
            {/*{x}, {y}*/}
        </div>
    );
};

export default Square;