import { useReducer } from 'react';

import {
    FORCE_RENDER,
    MOVE_PLAYER
} from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
        case MOVE_PLAYER:
			return {
				...state,
				playerMoving: action.playerMoving
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