/*
    Plik:               NotFound.js
    Funkcja:            ERROR 404
    Opis:               Strona wyswietlana w momencie wpisania błędnego linku
    Elementy:           
    Przykład użycia:    N/A
    Dodatkowe info:     Do wypełnienia o treści statyczne - treść w funkcji return(). Info o błędnej stronie + button z powrotem do strony głównej
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.scss';
import TitleBar from '../../components/TitleBar/TitleBar';

const notfound = () => {
    return(
        <div className="SiteContainer">
            <div className="NotFound">
                <TitleBar title="error 404"/>
                <p>Z przykrością informujemy, że podstrona o podanym adresie nie istnieje.</p>
                <p>Zawsze jednak możesz wrócić do strony głównej</p>
                <NavLink exact to="/" className="ReturnBtnContainer">
                    <button>WRÓĆ DO STRONY GŁÓWNEJ</button>
                </NavLink>
            </div> 
        </div>
    )
}

export default notfound;