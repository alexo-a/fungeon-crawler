import React, {useEffect} from "react";
import Map from "../components/Map"
import Footer from "../components/Footer"
import { useStoreContext } from '../utils/GlobalState';
import $ from "jquery"
//import Player from "./utils/GameData/Player"
//import { roll, attackTarget } from "../utils/GameData/calculations"
const playerIndex = 0;
const gridSize = 15
function Game(){

    let [state, dispatch] = useStoreContext();
    if (state.whoseTurn !== playerIndex){
        //AI turn
        let mob = state.entities[state.whoseTurn];
        /*if (mob.isAlive()){
            if (mob.fleeMode()){


            }
        }*/
    }
    useEffect(()=> {
        $(".square").css("height", `min(10vw, calc((100vh - 100px)/${gridSize}),calc(100vw/${gridSize}))`);
        $(".square").css("width", `min(10vw, calc((100vh - 100px)/${gridSize}),calc(100vw/${gridSize}))`)
    })

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