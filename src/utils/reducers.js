import { useReducer } from 'react';

import {
    FORCE_RENDER,
    MOVE_ENTITY,
    TOGGLE_MOVEMENT_MODE
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
		default:
			return state;
	}
}

export function useFungeonCrawlerReducer(initialState) {
	return useReducer(reducer, initialState);
}