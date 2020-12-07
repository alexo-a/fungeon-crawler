import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { MOVE_ENTITY } from "../../utils/actions"
import util from "util";
import {calculateMovment} from '../../utils/GameData/calculations';

function Square({x,y, classNames}) {
    const [state, dispatch] = useStoreContext();

    const handleClick = event => {
        const targetX=event.target.attributes.x.value;
        const targetY = event.target.attributes.y.value;
        const targetPosition = { x: parseInt(targetX), y: parseInt(targetY)}
        console.log(`${state.entities[state.whoseTurn].name} is attempting to move to (${targetX}, ${targetY})`)
        const attemptedMoveDistance = calculateMovment({ x: targetX, y: targetY }, state.entities[state.whoseTurn].position)
        
        if (state.entities[state.whoseTurn].movementRemaining >= attemptedMoveDistance){
            let movePossible=true;
            for (let x = 0; x < state.entities.length; x++){
                if (targetPosition.x === state.entities[x].position.x && targetPosition.y === state.entities[x].position.y){
                    movePossible=false;
                    break;
                }
            }

            if (movePossible){
                console.log("it was successful")
                dispatch({
                    type: MOVE_ENTITY,
                    newPosition: {
                        x: parseInt(targetX),
                        y: parseInt(targetY)
                    },
                    movementRemaining: state.entities[state.whoseTurn].movementRemaining - attemptedMoveDistance
                })
            }
            else {
                console.log("didn't work")
            }
            //console.log(util.inspect(state, true, null, false))
            //console.log(`${state.entities[state.whoseTurn].name} is now at (${state.entities[state.whoseTurn].position.x}, ${state.entities[state.whoseTurn].position.y})`)
        }
    };

    return (
        <div x={x} y={y} className={classNames} onClick={(event)=> handleClick(event)}>
            {x}, {y}
        </div>
    );
};

export default Square;