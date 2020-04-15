/*
    Plik:               Cart.js
    Funkcja:            STRONA PODSUMOWANIA ZAKUPÓW - KOSZYK
    Opis:               Strona wyświetlająca dodane artykuły do koszyka i pokazująca sumę należności za zakupy
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

import React, { useContext, useEffect } from 'react';
import { CartContext, TotalContext } from '../App';
import CartItem from '../../components/CartItem/CartItem';
import './Cart.scss';

const SCart = () => {

    const [initCart, Cart] = useContext(CartContext);
    const [initTotal, Total] = useContext(TotalContext);

    const total = initCart.reduce((previousState, currentState) => previousState + currentState.prodtotal, 0);

    let ShowCartItems;

    if (initCart.length === 0) {
        ShowCartItems = "Twój koszyk jest pusty"
    } else {
        ShowCartItems = (
            <div className="CartItems">
                {initCart.map((r, index) => {
                    return(
                        <CartItem 
                            id={r.id}
                            name={r.name}
                            desc={r.desc}
                            price={r.price}
                            quantity={r.quantity}
                            prodtotal={r.prodtotal}
                            imagename={r.imagename}
                            key={index}
                        />
                    )
                })}
            </div>
        )
    }

    return(
        <div className="Card">
            <h1>CART</h1>
            <div className="CartContainer">
                <div className="CartList">
                    <h4>TWÓJ KOSZYK</h4>
                    {ShowCartItems}
                </div>
                <div className="CartSummary">
                    <h4>PODSUMOWANIE</h4>
                    <div className="CartSummaryInfo">
                        <p className="CartSummaryLabel">SUMA</p>
                        <div>{total}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SCart;