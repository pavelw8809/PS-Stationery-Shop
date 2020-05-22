// Header -> App (MAIN APP COMPONENT)

import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TotalContext } from '../../containers/App';
import logo0 from '../../images/icons/pands.png';
import logo1 from '../../images/icons/pands_small.png';
import CartBtn from '../CartBtn/CartBtn';
import { FaChevronDown } from "react-icons/fa";
import UserBtn from '../UserBtn/UserBtn';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

const Header = () => {   

    // STATES
    
    const [Total] = useContext(TotalContext);
    const [Dropdown, setDropdown] = useState(false);
    const [StyleNavBar, setStyleNavBar] = useState();
    const [StyleArtNav, setStyleArtNav] = useState();
    const [StyleLogo, setStyleLogo] = useState();

    // SCROLLING LISTENER FOR BANNER

    const listenScrollEvent = (event) => {
        if (window.scrollY >= 100) {
            setStyleNavBar({maxHeight: 0, overflow: 'hidden', transitionDuration: '1s'});
            setStyleArtNav({maxHeight: 0, overflow: 'hidden', transitionDuration: '1s'});
            setStyleLogo({margin: '5px 0', maxWidth: '300px', transitionDuration: '1s'});
        } 
        if (window.scrollY === 0) {
            setStyleNavBar({maxHeight: '30px', height: 'auto', transitionDuration: '1s'});
            setStyleArtNav({maxHeight: '50px', height: 'auto', transitionDuration: '1s'});
            setStyleLogo({transitionDuration: '1s'});
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, [])

    // FUNCTIONS

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
            <div className="Navbar" style={StyleNavBar}>
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
                <NavLink exact to="/" className="LogoContainer">
                    <img alt="PS Logo" className="Logo" src={logo0} style={StyleLogo}></img>
                    <img alt="PS Logo" className="LogoSmall" src={logo1}></img>
                </NavLink>
                <SearchBar/>
                <div className="UserZone">
                    <UserBtn />
                    <NavLink to="/cart">
                        <CartBtn total={parseFloat(Total.total).toFixed(2)}/>
                    </NavLink>
                </div>
                <div className="ArtNav" style={StyleArtNav}>
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
        </div>
    );
}

export default Header;