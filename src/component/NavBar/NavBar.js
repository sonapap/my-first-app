import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const styleActive = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '30px'
    }
    return (
        <nav>
            <ul>
                <li> <NavLink to='/home' activeStyle={styleActive}>Home</NavLink> </li>
                <li> <NavLink to='/list' activeStyle={styleActive}>List</NavLink> </li>
                <li> <NavLink to='/about' activeStyle={styleActive}>About</NavLink> </li>
            </ul>
        </nav>
    )
}
export default NavBar