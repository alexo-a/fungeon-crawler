import React, { useState }  from 'react';
import Square from "../Square";
import { useStoreContext } from '../../utils/GlobalState';
import util from "util";
function Map() {
    const squares = [];
    const [state, dispatch] = useStoreContext();
    const playerMoving = state.playerMoving;
    const playerPosition = state.playerPosition;
    const playerSpeed = state.playerSpeed;
    console.log(`playerSpeed: ${playerSpeed}`)
    console.log(`playerPosition: ${util.inspect(playerPosition, true, null, true)}`)
    console.log(`playerMoving: ${playerMoving}`)
    console.log(util.inspect(state, true, null, true))

    for (let y=0; y<10;y++){
        squares.push([])
        for(let x=0; x<10; x++){
            let classes="square";
            if (playerPosition.x === x && playerPosition.y === y) { classes += " gold"}
            else if (playerMoving && Math.floor(Math.sqrt(Math.pow(playerPosition.x - x, 2) + Math.pow(playerPosition.y - y, 2))) <= playerSpeed) { classes += " green" };
            squares[y].push(<Square x={x} y={y} classNames={classes}/>)
        }
    }
    console.log(squares)
    return (
        <div>
            {squares.map(row => {
                return (
                    <div className="map-row">
                        {row.map(sq => {
                            return (sq)
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Map;