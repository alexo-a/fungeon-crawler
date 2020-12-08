import React  from 'react';
import Square from "../Square";
import { useStoreContext } from '../../utils/GlobalState';
import util from "util";
import {calculateDistance} from "../../utils/GameData/calculations"
const playerIndex=0;

function Map() {
    let squares = [];
    let [state] = useStoreContext();
    const playersTurn = state.whoseTurn===playerIndex;
    let playerMoving = state.entities[0].movementRemaining > 0;
    let player = state.entities[0];
    let enemyPosition = state.entities[1].position;
    let hostilePositions = []
    //const playerSpeed = state.entities[0].speed;
    for (let x = 0; x < state.entities.length; x++){
        if (x!==playerIndex && state.entities[x].hitpoints > 0){
            hostilePositions.push(state.entities[x].position)
        }
    }
    console.log(hostilePositions)
    for (let y = 0; y < 10; y++) {
        squares.push([])
        for (let x = 0; x < 10; x++) {
            let classes = "square";
            if (player.position.x === x && player.position.y === y) { classes = "square gold" }
            else if (enemyPosition.x === x && enemyPosition.y === y) { classes = "square red" }
            else if (playersTurn && playerMoving && calculateDistance({x,y},player.position) <= player.movementRemaining && state.movementMode) { classes = "square green" }
            if (playersTurn && state.attackMode && calculateDistance({x,y},player.position) <= player.activeWeapon.range ){
                //console.log(`mob in range at ${x}, ${y}`)
                for (let i = 0; i < hostilePositions.length; i++){
                    if (hostilePositions[i].x === x && hostilePositions[i].y===y){
                        console.log(`changing border at ${x}, ${y}`)
                        classes="square red red-background"
                    }
                }
            }
            squares[y].push(<Square x={x} y={y} classNames={classes} key={x.toString() + y.toString()} />)
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