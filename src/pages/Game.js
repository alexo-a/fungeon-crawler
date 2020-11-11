import React from "react";
import Map from "../components/Map/index.js"
import { useStoreContext } from '../utils/GlobalState';
function Game(){
    const [state, dispatch] = useStoreContext();
    return (
        <div className="game">
            <div className="Map">
                <Map />
            </div>
        </div>
    )
}

export default Game;