import React from 'react';
import { NavLink } from 'react-router-dom';
import './AccountMenu.scss';

const accountmenu = (props) => {
    return(
        <div className="AccountMenu">
            <ul>
                <li><NavLink to="/account" onClick={props.hidemenu}>Dane konta</NavLink></li>
                <li><NavLink to="/myorders" onClick={props.hidemenu}>Twoje zamówienia</NavLink></li>
                <li><NavLink exact to="/" onClick={props.logout}>Wyloguj</NavLink></li>
            </ul>
        </div>
    )
}

export default accountmenu;