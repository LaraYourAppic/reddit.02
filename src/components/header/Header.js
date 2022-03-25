import React from 'react';
import {NavLink} from "react-router-dom";
import Home from "../../pages/home/Home";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="subreddit">Subreddit</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;