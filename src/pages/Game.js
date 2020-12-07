import React from "react";
import Map from "../components/Map/index.js"
import Footer from "../components/Footer"

function Game(){

    return (
        <>
        <div className="game">
            <div className="Map">
                <Map />
            </div>
        </div>

        {/* will need to figure out how to correctly get playerIndex here later. */}
        <Footer playerIndex={0}></Footer>
        </>
    )
}

export default Game;