import React, { createContext, useContext } from "react";
import { useFungeonCrawlerReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    // Set default state here.
    const [state, dispatch] = useFungeonCrawlerReducer({
        playerPosition: {x:0,y:0},
        playerMoving: true,
        playerSpeed: 5,
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };