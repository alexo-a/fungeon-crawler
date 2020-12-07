import React, { createContext, useContext } from "react";
import { useFungeonCrawlerReducer } from './reducers';
import Player from "./GameData/player"
import Items from "./GameData/Items"

const StoreContext = createContext();
const { Provider } = StoreContext;
const geraldo = new Player("Geraldo");
geraldo.setStats({speed: 5})
geraldo.setPosition({ x: 9, y: 9 })
geraldo.setInventory([{...Items.gold, quantity: 150}, {...Items.shortsword, quantity: 1}])
geraldo.setMovementRemaining()
geraldo.equipWeapon(Items.shortsword)

const boblin = new Player("Boblin");
boblin.setStats({ speed: 5 })
boblin.setPosition({ x: 4, y: 4 })
boblin.setInventory([{ ...Items.gold, quantity: 150 }, { ...Items.shortsword, quantity: 1 }])
boblin.setMovementRemaining()
boblin.equipWeapon(Items.shortsword)

const StoreProvider = ({ value = [], ...props }) => {
    // Set default state here.
    const [state, dispatch] = useFungeonCrawlerReducer({
        entities: [geraldo, boblin],
        whoseTurn: 0,
        movementMode: false,
        round: 0
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };