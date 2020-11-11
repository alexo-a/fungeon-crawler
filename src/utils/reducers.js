import { useReducer } from 'react';

import {
    FORCE_RENDER,
    MOVE_ENTITY
} from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
        case MOVE_ENTITY:
            let tmpEntities= [...state.entities];
            let changedEntity=state.entities[state.whoseTurn]
            changedEntity.position=action.newPosition;
            changedEntity.movementRemaining=action.movementRemaining
            tmpEntities[state.whoseTurn]=changedEntity;
            return {
                ...state, 
                entities: tmpEntities
            }
		case FORCE_RENDER:
			return {
				...state,
				forceRender: action.forceRender
			}	
		default:
			return state;
	}
}

export function useFungeonCrawlerReducer(initialState) {
	return useReducer(reducer, initialState);
}