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

import React, { useContext, useEffect, useState } from 'react';
import { CartContext, TotalContext } from '../App';
import CartItem from '../../components/CartItem/CartItem';
import './Cart.scss';

const SCart = () => {

    const [initCart, Cart] = useContext(CartContext);
    const [initTotal, Total] = useContext(TotalContext);

    const removeItem = (index) => {
        console.log(index);
        let newCart = initCart.slice();
        newCart.splice(index, 1);
        Cart(newCart);
        const total = newCart.reduce((previousState, currentState) => previousState + currentState.prodtotal, 0);
        Total({total});
    }

    const sendOrder = (orderdata) => {
        console.log(orderdata);
    }

    let ShowCartItems;
    let OrderBtn;

    if (initCart.length === 0) {
        ShowCartItems = (
            <div className="CartEmpty">
                <p>Twój koszyk jest pusty</p>
            </div>
        )
        OrderBtn = ("");
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
                            key={r.id}
                            removeitem={removeItem.bind(this, index)}
                        />
                    )
                })}
            </div>
        )
        OrderBtn = (
            <div className="CartSubmitContainer">
                <button className="CartSubmit" onClick={sendOrder.bind(this, initCart)}>ZŁÓŻ ZAMÓWIENIE</button>
            </div>
        )
    }

    return(
        <div className="Cart">
            <h1>CART</h1>
            <div className="CartContainer">
                <div className="CartList">
                    <h4>TWÓJ KOSZYK</h4>
                    {ShowCartItems}
                </div>
                <div className="CartSummary">
                    <h4>PODSUMOWANIE</h4>
                    <div className="CartSummaryInfo">
                        <div className="CartSummaryContainer">
                            <p className="CartSummaryLabel">SUMA</p>
                            <div className="CartSummaryTotal">{parseFloat(initTotal.total).toFixed(2)}</div>
                        </div>
                        {OrderBtn}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SCart;