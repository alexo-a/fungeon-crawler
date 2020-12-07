import React from "react";
import Map from "../components/Map/index.js"
import Footer from "../components/Footer"
import { useStoreContext } from '../utils/GlobalState';

function Game(){
    let [state, dispatch] = useStoreContext();
    let playerIndex = 0;
    if (state.whoseTurn){}
    return (
        <>
        <div className="game">
            <div className="Map">
                <Map />
            </div>
        </div>

        {/* will need to figure out how to correctly get playerIndex here later. */}
        <Footer playerIndex={playerIndex}></Footer>
        </>
    )
}

export default Game;