import React from "react";
import Map from "../components/Map/index.js"
import { useStoreContext } from '../utils/GlobalState';
import Footer from "../components/Footer"

function Game(){
    const [state, dispatch] = useStoreContext();
    return (
        <>
        <div className="game">
            <div className="Map">
                <Map />
            </div>
        </div>
        <Footer playerIndex={0}></Footer>
        </>
    )
}

export default Game;