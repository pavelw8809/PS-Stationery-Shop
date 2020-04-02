/*
    Plik:               CartBtn.js
    Funkcja:            PRZYCISK KOSZYKA W BANERZE APLIKACJI
    Opis:               Przekierowuje do konteneru Cart,js (koszyka). Pokazuje bieżącą sumę zamówienia.
    Elementy:           Suma zamówienia {props.total}
    Przykład użycia:    <CartBtn total={suma} />
    Dodatkowe info:     Wynik sumy na podstawie funkcji zapisującej wybór klienta po wciśnięciu koszyka w karcie produktu (ArtCard)
*/

import React from 'react';
import "./CartBtn.scss";
import carticon from '../../images/icons/black_cart.png';

const cartbtn = (props) => {
    return(
        <button className="CartBtn">
            <img className="carticon" src={carticon} alt="cart"/>
            {props.total} PLN
        </button>
    )
}

export default cartbtn