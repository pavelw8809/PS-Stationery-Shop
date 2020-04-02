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

import React from 'react';
import { NavLink } from 'react-router-dom';                                                         // Import komponentu Navlick - element react-router-dom
import logo0 from '../../images/icons/pands.png';                                                   // Logo firmy duże
import mglass from '../../images/icons/mg.png';                                                     // Ikona lupy
import CartBtn from '../CartBtn/CartBtn';                                                           // Import komponentu przycisku koszyka
import './Header.scss';

const header = (props) => {

    let total = parseFloat(props.totalprice).toFixed(2);                                            // Zaokrąglanie sumy do dwóch iejsc po przecinku

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
            <NavLink exact to="/">
                <img alt="PS Logo" className="Logo" src={logo0}></img>
            </NavLink>
            <div className="SearchBar">
                <input placeholder="szukaj"></input>
                <button type="submit"><img className="glassicon" src={mglass} alt="mg"/></button>
            </div>
            <div className="UserZone">
                <button className="LogBtn">ZALOGUJ</button>
                <NavLink to="/cart">
                    <CartBtn total={total}/>
                </NavLink>
            </div>
            <div className="ArtNav">
                <ul>
                    <li>
                        <NavLink to="/soffice">Art. biurowe</NavLink>
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