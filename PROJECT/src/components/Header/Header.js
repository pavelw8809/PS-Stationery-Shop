/*
    Plik:               Header.js
    Funkcja:            BANNER APLIKACJI
    Opis:               Górna część nawigacyjno-informacyjna
    Elementy:           Nawigacja górna (Navbar), 
                        Logo (PS Logo), 
                        Searching Bar (SearchBar), 
                        Przycisk Zaloguj (LogBtn => Login.js), 
                        Przycisk Koszyka (CartBtn => Cart.js), 
                        Suma zakupów {props.totalprice} - wyświetlane w przycisku Koszyk
                        Nawigacja dolna - sklep (ArtNav)
    Przykład użycia:    Komponent bazowy wyświetlany w App.js - <Header totalprice={suma} />
    Dodatkowe info:     <Navlink> - list przekierowujący do odpowiedniego kontenera w routingu - routing w pliku głównym App.js
*/

import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';                                                         // Import komponentu Navlick - element react-router-dom
import { TotalContext } from '../../containers/App';
import logo0 from '../../images/icons/pands.png';                                                   // Logo firmy duże
import logo1 from '../../images/icons/pands_small.png';
import mglass from '../../images/icons/mg.png';                                                     // Ikona lupy
import CartBtn from '../CartBtn/CartBtn';                                                           // Import komponentu przycisku koszyka
import { FaChevronDown } from "react-icons/fa";
import Login from '../Login/Login';
import './Header.scss';

const Header = () => {   
    
    const [initTotal, Total] = useContext(TotalContext);
    const [LogShow, setLogShow] = useState(false);
    const [Dropdown, setDropdown] = useState(false);

    let LoginW;

    const loginWindow = () => {
        if (!LogShow) {
            setLogShow(true);
        } else {
            setLogShow(false);

        }
    }

    if (LogShow) {
        LoginW = (
            <div className="LoginW">
                <Login/>
            </div>
        )
    } else {
        LoginW = (
            <div className="LoginW hidden">
                <Login/>
            </div>
        )
    }

    const dropDown = () => {
        if (!Dropdown) {
            setDropdown(true);
        } else {
            setDropdown(false);
        }
    }

    let DropdownClass = "ArtNavDropDown";
    let DropdownArrow = "DropdownArrow";

    if (Dropdown) {
        DropdownClass = "ArtNavDropDown unroll";
        DropdownArrow = "DropdownArrow dunroll";
    } else {
        DropdownClass = "ArtNavDropDown";
        DropdownArrow = "DropdownArrow";
    }

    return(
        <div className="Banner">
            {LoginW}
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
            <div className="NavContainer">
                <NavLink exact to="/">
                    <img alt="PS Logo" className="Logo" src={logo0}></img>
                    <img alt="PS Logo" className="LogoSmall" src={logo1}></img>
                </NavLink>
                <div className="SearchBar">
                    <input placeholder="szukaj"></input>
                    <button type="submit"><img className="glassicon" src={mglass} alt="mg"/></button>
                </div>
                <div className="UserZone">
                    <button className="LogBtn" onClick={loginWindow}>ZALOGUJ</button>
                    <NavLink to="/cart">
                        <CartBtn total={parseFloat(initTotal.total).toFixed(2)}/>
                    </NavLink>
                </div>
                <div className="ArtNav">
                    <ul>
                        <li>
                            <NavLink to="/sstationary">Art. piśmiennicze</NavLink>
                        </li>
                        <li>
                            <NavLink to="/soffice">Art. biurowe</NavLink>
                        </li>
                        <li>
                            <NavLink to="/senvelopes">Koperty</NavLink>
                        </li>
                        <li>
                            <NavLink to="/spaper">Art. papiernicze</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="ArtNavSmall" onClick={dropDown}>
                <FaChevronDown className={DropdownArrow}/>
                <div className={DropdownClass}>
                    <ul>
                        <li>
                            <NavLink to="/sstationary">Art. piśmiennicze</NavLink>
                        </li>
                        <li>
                            <NavLink to="/soffice">Art. Biurowe</NavLink>
                        </li>
                        <li>
                            <NavLink to="/senvelopes">Koperty</NavLink>
                        </li>
                        <li>
                            <NavLink to="/spaper">Art. papiernicze</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;