import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo0 from '../../images/pands.png';
import mglass from '../../images/mg.png';
import CartBtn from '../CartBtn/CartBtn';
import './Header.scss';

const header = (props) => {

    let total = parseFloat(props.totalprice).toFixed(2);

    return(
        <div className="Banner">
            <div className="Navbar">
                <ul>
                    <li>
                        <NavLink exact to="/">Strona główna</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Firma</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Usługi</NavLink>
                    </li>
                    <li>
                        <NavLink to="/orders">Zamówienia</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Kontakt</NavLink>
                    </li>
                </ul>
            </div>
            <img alt="PS Logo" className="Logo" src={logo0}></img>
            <div className="SearchBar">
                <input placeholder="szukaj"></input>
                <button type="submit"><img className="glassicon" src={mglass} alt="mg"/></button>
            </div>
            <div className="UserZone">
                <button className="LogBtn">ZALOGUJ</button>
                <CartBtn total={total}/>
            </div>
            <div className="ArtNav">
                <ul>
                    <li>
                        <NavLink exact to="/soffice">Art. biurowe</NavLink>
                    </li>
                    <li>
                        <NavLink to="/spaper">Papier</NavLink>
                    </li>
                    <li>
                        <NavLink to="/senvelopes">Koperty</NavLink>
                    </li>
                    <li>
                        <NavLink to="/spackages">Materiały opakowaniowe</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shygienic">Art. higieniczne</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

/*
                    <li>
                        <NavLink to="/offer">Oferta</NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog">Katalog</NavLink>
                    </li>
*/

export default header;