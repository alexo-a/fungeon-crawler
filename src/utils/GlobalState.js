import React, { createContext, useContext } from "react";
import { useFungeonCrawlerReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;
const player = {
    name: "Geraldo",
    position: {x:0, y:0},
    speed: 5,
    movementRemaining: 5
}
const enemy = {
    name: "Boblin",
    position: { x: 3, y: 3 },
    speed: 5,
    movementRemaining: 5
}

const StoreProvider = ({ value = [], ...props }) => {
    // Set default state here.
    const [state, dispatch] = useFungeonCrawlerReducer({
        entities: [player,enemy],
        whoseTurn: 0
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };