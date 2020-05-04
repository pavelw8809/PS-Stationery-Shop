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
import TitleBar from '../../components/TitleBar/TitleBar';
import './Cart.scss';
import { FaRegFrownOpen } from 'react-icons/fa';

const SCart = () => {

    const [Cart, setCart] = useContext(CartContext);
    const [Total, setTotal] = useContext(TotalContext);

    const removeItem = (index) => {
        console.log(index);
        let newCart = Cart.slice();
        newCart.splice(index, 1);
        setCart(newCart);
        const total = newCart.reduce((previousState, currentState) => previousState + currentState.prodtotal, 0);
        setTotal({total});
    }

    const sendOrder = (orderdata) => {
        console.log(orderdata);
    }

    let ShowCartItems;
    let OrderBtn;

    if (Cart.length === 0) {
        ShowCartItems = (
            <div className="CartEmpty">
                <FaRegFrownOpen className="EmptyCartIcon" size={50}/>
                <p>Twój koszyk jest pusty</p>
            </div>
        )
        OrderBtn = ("");
    } else {
        ShowCartItems = (
            <div className="CartItems">
                {Cart.map((r, index) => {
                    return(
                        <CartItem 
                            id={r.id}
                            name={r.name}
                            shortdesc={r.shortdesc}
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
                <button className="CartSubmit" onClick={sendOrder.bind(this, Cart)}>ZŁÓŻ ZAMÓWIENIE</button>
            </div>
        )
    }

    return(
        <div className="Cart">
            <TitleBar title="koszyk"/>
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
                            <div className="CartSummaryTotal">{parseFloat(Total.total).toFixed(2)}</div>
                        </div>
                        {OrderBtn}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SCart;