import React  from 'react';
import Square from "../Square";
import { useStoreContext } from '../../utils/GlobalState';
//import util from "util";
import { MOVE_ENTITY, TOGGLE_ATTACK_MODE } from "../../utils/actions"
import {calculateDistance, attackTarget} from "../../utils/GameData/calculations"

const playerIndex=0;


function Map({gridSize=10}) {
    let squares = [];
    let [state, dispatch] = useStoreContext();
    const playersTurn = state.whoseTurn===playerIndex;
    let playerMoving = state.entities[0].movementRemaining > 0;
    let player = state.entities[playerIndex];
    let hostilePositions = []
    //const playerSpeed = state.entities[0].speed;

    function doPositionsMatch(positionOne, positionTwo){
        return positionOne.x === positionTwo.x && positionOne.y === positionTwo.y
    }
    for (let x = 0; x < state.entities.length; x++){
        if (x!==playerIndex){
            /*if (state.entities[x].hitpoints <= 0){
                hostilePositions.push({x: null, y: null})
            }
            else { */
                hostilePositions.push(state.entities[x].position)
            //}
        }
        else {hostilePositions.push({x:null, y:null})}
    }

    const handleClick = event => {
        const targetPosition = { 
            x: parseInt(event.target.getAttribute("x") || event.target.parentElement.getAttribute("x")), 
            y: parseInt(event.target.getAttribute("y") || event.target.parentElement.getAttribute("y")) 
        }

        if (state.movementMode) {
            console.log(`${state.entities[state.whoseTurn].name} is attempting to move to (${targetPosition.x}, ${targetPosition.y})`)
            const attemptedMoveDistance = calculateDistance({ x: targetPosition.x, y: targetPosition.y }, state.entities[state.whoseTurn].position)

            if (state.entities[state.whoseTurn].movementRemaining >= attemptedMoveDistance) {
                let movePossible = true;
                for (let x = 0; x < state.entities.length; x++) {
                    if (doPositionsMatch(targetPosition,state.entities[x])){//targetPosition.x === state.entities[x].position.x && targetPosition.y === state.entities[x].position.y) {
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
                if (doPositionsMatch(hostilePositions[i], targetPosition)){
                    //hostilePositions[i].x === targetPosition.x && hostilePositions[i].y === targetPosition.y) {
                    targetMobIndex=i;
                    attackValid=true;
                }
            } 

            attackValid = attackValid && calculateDistance(targetPosition,state.entities[playerIndex].position)  <= state.entities[playerIndex].activeWeapon.range
            if (attackValid){
                console.log("attack was valid")
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

    for (let y = 0; y < gridSize; y++) {
        squares.push([])
        for (let x = 0; x < gridSize; x++) {
            let remainingHitpointsDisplay = undefined;
            let classes = "square";
            //if (x===9){console.log(player.position); console.log({x,y})}
            if (doPositionsMatch(player.position, { x, y })) { classes = "square activePlayer"; remainingHitpointsDisplay = state.entities[playerIndex].currentHitpoints / state.entities[playerIndex].maxHitpoints}
            //else if (enemyPosition.x === x && enemyPosition.y === y) { classes = "square mob" }
            
            else if (playersTurn && playerMoving && calculateDistance({x,y},player.position) <= player.movementRemaining && state.movementMode) { classes = "square green" }
            
            //if (playersTurn && calculateDistance({x,y},player.position) <= player.activeWeapon.range ){
                for (let i = 0; i < hostilePositions.length; i++){
                    if (doPositionsMatch(hostilePositions[i],{x,y})){
                        //if player's turn and attack mode and within wep range
                        if (state.whoseTurn === playerIndex && state.attackMode && calculateDistance({ x, y }, player.position) <= player.activeWeapon.range) { classes = "square mob red-background"; remainingHitpointsDisplay = state.entities[i].currentHitpoints / state.entities[i].maxHitpoints}
                        
                        
                        //else if mob is alive
                        else if (state.entities[i].isAlive()) { classes = `square mob`; remainingHitpointsDisplay = state.entities[i].currentHitpoints / state.entities[i].maxHitpoints}
                        
                        //else 
                        else { classes = "square dead-mob"}
                        
                    }
                }
            //}
            squares[y].push(<Square x={x} y={y} classNames={classes} key={x.toString() + y.toString()} handleClick={(event) => { handleClick(event) }} hitpointsRemainingDecimal={remainingHitpointsDisplay} />)
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