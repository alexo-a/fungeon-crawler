import React from "react";
import Map from "../components/Map"
import Footer from "../components/Footer"
//import { useStoreContext } from '../utils/GlobalState';
import $ from "jquery"

const gridSize = 15
function Game(){
    //let [state, dispatch] = useStoreContext();
    let playerIndex = 0;

    $(".square").css("height",`min(10vw, calc((100vh - 100px)/${gridSize}))`);
    $(".square").css("width", `min(10vw, calc((100vh - 100px)/${gridSize}))`)
    return (
        <>
        <div className="game">
            <div className="Map">
                    <Map gridSize={gridSize} />
            </div>
        </div>

        {/* will need to figure out how to correctly get playerIndex here later. */}
        <Footer playerIndex={playerIndex}></Footer>
        </>
    )
}

export default Game;