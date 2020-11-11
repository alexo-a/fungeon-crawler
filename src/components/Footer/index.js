import React, { useState } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import util from "util"; 


function Footer({playerIndex}) {
    const [state, dispatch] = useStoreContext();
    console.log(playerIndex, state.whoseTurn)
    return (
        <div className="footer">
            {playerIndex===state.whoseTurn ? 
                "Your Turn!"
             : "Their turn, please wait."}
        </div>
    )


}

export default Footer