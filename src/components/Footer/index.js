import React, { useState } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import util from "util"; 


function Footer({playerIndex}) {
    const [state, dispatch] = useStoreContext();
    return (

        <div className="footer">
            <div>
                {playerIndex===state.whoseTurn ? 
                    "Your Turn!"
                : "Their turn, please wait."}
            </div>
            <div>
                {`${state.entities[state.whoseTurn].name} has ${state.entities[state.whoseTurn].movementRemaining} movement remaining`}
            </div>
        </div>
    )


}

export default Footer