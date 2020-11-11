import React from 'react';
//import { Link } from "react-router-dom";
//import Auth from "../../utils/auth";
//import { useQuery } from '@apollo/react-hooks';
//import { QUERY_MY_PROJECTS } from '../../utils/queries';

function Square({x,y, classNames}) {
    /*const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const { loading, data } = useQuery(QUERY_MY_PROJECTS);

    const projects = data?.myProjects || {};
    const me = data?.me || {};

    if (loading) {
        return (
            <></>
        )
    }*/
    const handleClick = event => {
        console.log(event.target.attributes.x.value)
    };
    return (
        <button x={x} y={y} className={classNames} onClick={(event)=> handleClick(event)}>
            {x}, {y}
        </button>
    );
};

export default Square;
