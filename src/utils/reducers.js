import { useReducer } from 'react';

import {
    FORCE_RENDER,
    MOVE_ENTITY,
    TOGGLE_MOVEMENT_MODE,
    END_TURN
} from './actions';

export const reducer = (state, action) => {
    
	switch (action.type) {
        case MOVE_ENTITY:
            let tmpEntities= [...state.entities];
            let changedEntity=state.entities[state.whoseTurn];
            let movementMode = true;
            changedEntity.position=action.newPosition;
            changedEntity.movementRemaining=action.movementRemaining
            tmpEntities[state.whoseTurn]=changedEntity;
            if (changedEntity.movementRemaining === 0) { movementMode = false}
            return {
                ...state, 
                entities: tmpEntities,
                movementMode:movementMode
            }
        case FORCE_RENDER:
            return {
                ...state,
                forceRender: action.forceRender
            }	
        case TOGGLE_MOVEMENT_MODE:
            let tempMovementMode = state.movementMode;
            if (state.entities[state.whoseTurn].movementRemaining > 0){ tempMovementMode = !tempMovementMode}
            return {
                ...state,
                movementMode: tempMovementMode
            }	
        case END_TURN:
            console.log(`end of ${state.entities[state.whoseTurn].name}'s turn`)
            let newEntities = [...state.entities];
            let nextTurnIndex=0;
            if ( state.whoseTurn < state.entities.length - 1 ) { nextTurnIndex = state.whoseTurn + 1 }
            console.log(`start of ${state.entities[nextTurnIndex].name}'s turn`)
            if (nextTurnIndex === 0 ){
                for ( let x = 0; x < newEntities.length; x++){
                    newEntities[x].movementRemaining = newEntities[x].speed
                }
            }
            return {
                ...state,
                movementMode: false,
                whoseTurn: nextTurnIndex,
                entities: nextTurnIndex === 0 ? newEntities : state.entities,
                round: nextTurnIndex === 0 ? state.round++ : state.round
            }
		default:
			return state;
	}
}

export function useFungeonCrawlerReducer(initialState) {
	return useReducer(reducer, initialState);
}