import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_MOVEMENT_MODE, END_TURN } from "../../utils/actions"

function Footer({ playerIndex }) {
    const [state, dispatch] = useStoreContext();

    function toggleMove() {
        dispatch({ type: TOGGLE_MOVEMENT_MODE })
    }

    function endTurn() {
        dispatch({ type: END_TURN })
    }
    return (
        <div className="footer">
            <div>
                {playerIndex === state.whoseTurn ?
                    "Your Turn!"
                    : "Their turn, please wait."}
            </div>
            {
                state.whoseTurn === playerIndex ? (
                <>
                    <div>
                        {`${state.entities[state.whoseTurn].name} has ${state.entities[state.whoseTurn].movementRemaining} movement remaining`}
                    </div>
                    <button className={state.entities[state.whoseTurn].movementRemaining > 0 ? "" : "disabled"} onClick={function () { toggleMove() }}>{state.movementMode ? "Moving" : "Move"}</button>
                    <button>Attack</button>
                    <button onClick={function () { endTurn() }}>End Turn</button>
                </>
                )
                : null
            }

        </div>
    )

}

export default Footer