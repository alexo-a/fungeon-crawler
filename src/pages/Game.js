import React from "react";
import {Map} from "./components/Map"

function Game(){
    return (
        <div className="game">
            <div className="game-board">
                <Game />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}

export default Game;