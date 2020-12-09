import React  from 'react';
import Square from "../Square";
import { useStoreContext } from '../../utils/GlobalState';
//import util from "util";
import { MOVE_ENTITY, TOGGLE_ATTACK_MODE } from "../../utils/actions"
import {calculateDistance, attackTarget} from "../../utils/GameData/calculations"

const playerIndex=0;

function Map() {
    let squares = [];
    let [state, dispatch] = useStoreContext();
    const playersTurn = state.whoseTurn===playerIndex;
    let playerMoving = state.entities[0].movementRemaining > 0;
    let player = state.entities[0];
    let enemyPosition = state.entities[1].position;
    let hostilePositions = []
    //const playerSpeed = state.entities[0].speed;
    for (let x = 0; x < state.entities.length; x++){
        if (x!==playerIndex){
            if (state.entities[x].hitpoints <= 0){
                hostilePositions.push({x: null, y: null})
            }
            else { 
                hostilePositions.push(state.entities[x].position)
            }
        }
        else {hostilePositions.push({x:null, y:null})}
    }

    const handleClick = event => {
        const targetPosition = { 
            x: parseInt(event.target.attributes.x.value), 
            y: parseInt(event.target.attributes.y.value) 
        }

        if (state.movementMode) {
            console.log(`${state.entities[state.whoseTurn].name} is attempting to move to (${targetPosition.x}, ${targetPosition.y})`)
            const attemptedMoveDistance = calculateDistance({ x: targetPosition.x, y: targetPosition.y }, state.entities[state.whoseTurn].position)

            if (state.entities[state.whoseTurn].movementRemaining >= attemptedMoveDistance) {
                let movePossible = true;
                for (let x = 0; x < state.entities.length; x++) {
                    if (targetPosition.x === state.entities[x].position.x && targetPosition.y === state.entities[x].position.y) {
                        movePossible = false;
                        break;
                    }
                }

                if (movePossible) {
                    console.log("move was successful")
                    dispatch({
                        type: MOVE_ENTITY,
                        newPosition: {
                            x: targetPosition.x,
                            y: targetPosition.y
                        },
                        movementRemaining: state.entities[state.whoseTurn].movementRemaining - attemptedMoveDistance
                    })
                }
                else {
                    console.log("move didn't work")
                }
            }
            //console.log(util.inspect(state, true, null, false))
            //console.log(`${state.entities[state.whoseTurn].name} is now at (${state.entities[state.whoseTurn].position.x}, ${state.entities[state.whoseTurn].position.y})`)
        }
        else if (state.attackMode) {
            let attackValid = false;
            let targetMobIndex = null;
            console.log(`attempting to attack mob at ${targetPosition.x}, ${targetPosition.y}`)
            for (let i = 0; i < hostilePositions.length; i++) {
                if (hostilePositions[i].x === targetPosition.x && hostilePositions[i].y === targetPosition.y) {
                    targetMobIndex=i;
                    attackValid=true;
                }
            } 

            attackValid = attackValid && calculateDistance(targetPosition,state.entities[playerIndex].position)  <= state.entities[playerIndex].activeWeapon.range
            if (attackValid){
                attackTarget(state.entities[playerIndex], state.entities[targetMobIndex]);
                //I don't think I need this first dispatch. Is it because there's a dispatch immediately afterwards that updates it anyway? I think so...
                /*
                dispatch({
                    type: UPDATE_ENTITY_STATS,
                    entity: newMobData,
                    entityIndex: targetMobIndex
                });*/
                dispatch({
                    type: TOGGLE_ATTACK_MODE,
                    setAttackMode: false
                });
            }
        }
    };

    //console.log(state)

    for (let y = 0; y < 10; y++) {
        squares.push([])
        for (let x = 0; x < 10; x++) {
            let classes = "square";
            if (player.position.x === x && player.position.y === y) { classes = "square activePlayer" }
            else if (enemyPosition.x === x && enemyPosition.y === y) { classes = "square mob" }
            else if (playersTurn && playerMoving && calculateDistance({x,y},player.position) <= player.movementRemaining && state.movementMode) { classes = "square green" }
            
            if (playersTurn && state.attackMode && calculateDistance({x,y},player.position) <= player.activeWeapon.range ){
                for (let i = 0; i < hostilePositions.length; i++){
                    if (hostilePositions[i].x === x && hostilePositions[i].y===y){
                        classes="square mob red-background"
                    }
                }
            }
            squares[y].push(<Square x={x} y={y} classNames={classes} key={x.toString() + y.toString()} handleClick={(event)=>{handleClick(event)}} />)
        }
    }

    //console.log(util.inspect(state, true, null, false))
    return (
        <>
            {squares.map((row, index) => {
                return (
                    <div className="map-row" key={"row"+ index.toString() }>
                        {row.map(sq => {
                            return (sq)
                        })}
                    </div>
                )
            })}
        </>
    )
}

export default Map;