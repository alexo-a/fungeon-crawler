import React, { useState } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { MOVE_ENTITY } from "../../utils/actions"
//import { Link } from "react-router-dom";
import util from "util";
//import { useQuery } from '@apollo/react-hooks';
import {calculateMovment} from '../../utils/GameData/calculations';

function Square({x,y, classNames}) {
    const [state, dispatch] = useStoreContext();

    const handleClick = event => {
        const targetX=event.target.attributes.x.value;
        const targetY = event.target.attributes.y.value;
        console.log(`${state.entities[state.whoseTurn].name} is attempting to move to (${targetX}, ${targetY})`)
        const attemptedMoveDistance = calculateMovment({ x: targetX, y: targetY }, state.entities[state.whoseTurn].position)
        if (state.entities[state.whoseTurn].movementRemaining >= attemptedMoveDistance){
            console.log("it was successful")
            dispatch({
                type: MOVE_ENTITY,
                newPosition: {
                    x: parseInt(targetX),
                    y: parseInt(targetY)
                },
                movementRemaining: state.entities[state.whoseTurn].movementRemaining - attemptedMoveDistance
            })
            console.log(util.inspect(state, true, null, true))
            //console.log(`${state.entities[state.whoseTurn].name} is now at (${state.entities[state.whoseTurn].position.x}, ${state.entities[state.whoseTurn].position.y})`)
        }
    };

    return (
        <button x={x} y={y} className={classNames} onClick={(event)=> handleClick(event)}>
            {x}, {y}
        </button>
    );
};

export default Square;
