import React  from 'react';
import Square from "../Square";
import { useStoreContext } from '../../utils/GlobalState';
import util from "util";
const playerIndex=0;

function Map() {
    let squares = [];
    let [state] = useStoreContext();
    const playersTurn = state.whoseTurn===playerIndex;
    let playerMoving = state.entities[0].movementRemaining > 0;
    let player = state.entities[0];
    let enemyPosition = state.entities[1].position;
    //const playerSpeed = state.entities[0].speed;
    
    
    for (let y = 0; y < 10; y++) {
        squares.push([])
        for (let x = 0; x < 10; x++) {
            let classes = "square";
            if (player.position.x === x && player.position.y === y) { classes = "square gold" }
            else if (enemyPosition.x === x && enemyPosition.y === y) { classes = "square red" }
            else if (playersTurn && playerMoving && Math.floor(Math.sqrt(Math.pow(player.position.x - x, 2) + Math.pow(player.position.y - y, 2))) <= player.movementRemaining && state.movementMode) { classes = "square green" };
            squares[y].push(<Square x={x} y={y} classNames={classes} key={x.toString() + y.toString()} />)
        }
    }

    console.log(util.inspect(state, true, null, false))
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