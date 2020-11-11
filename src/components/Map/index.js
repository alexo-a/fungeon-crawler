import React, { useState }  from 'react';
import Square from "../Square";
import { useStoreContext } from '../../utils/GlobalState';
function Map() {
    const squares = [9,8,7,6,5,4,3,2,1,0];
    const [state, dispatch] = useStoreContext();
    return (
        <div>
            { squares.map(y => {
                return (
                    <div className="map-row">
                        { squares.map(x => {
                            return(<Square x={9-x} y={y} />)
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Map;