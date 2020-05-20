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
import { UserContext, TotalContext, ServerPath } from '../App';
import CartItem from '../../components/CartItem/CartItem';
import TitleBar from '../../components/TitleBar/TitleBar';
import './Cart.scss';
import { FaRegFrownOpen } from 'react-icons/fa';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const SCart = () => {

    const [User, setUser] = useContext(UserContext);
    const [Total, setTotal] = useContext(TotalContext);
    const [CartError, setCartError] = useState();


    let CartStorage = JSON.parse(localStorage.getItem('pscart'));
    const [Cart, setCart] = useState({articles: [CartStorage], uid: User.userinfo.id})
    //setCart(CartStorage)

    const removeItem = (index) => {
        let CartStorageN = CartStorage.slice();
        CartStorageN.splice(index, 1);
        localStorage.setItem('pscart', JSON.stringify(CartStorageN));

        const cartarray = [];
    
        const sum = Object.values(CartStorageN)
          .map(obj => { cartarray.push(obj.prodtotal); return obj.prodtotal
        })
          .reduce((sum, el) => {console.log(sum+el); return sum+el; }, 0);
    
        CartStorage = CartStorageN;
        setTotal({total: sum});
    }

    const History = useHistory();

    const sendOrder = () => {
        if (typeof(User.userinfo.uid) === 'undefined') {
            console.log("Użytkownik nie jest zalogowany")
            History.push({
                            pathname: '/login',
                            addProps: {
                                cartoption: true,
                                addinfo: "Aby złożyć zamówienie wymagane jest logowanie. Po zalogowaniu ponownie zatwierdź zamówienie."
                            }
                        });
        } else {
            let OrderData = {
                                articles: CartStorage, 
                                uid: User.userinfo.uid, 
                                compid: User.userinfo.compid, 
                                privid: User.userinfo.privid,
                                total: parseFloat(Total.total).toFixed(2)
                            };
            console.log(OrderData);
            Axios.post(ServerPath + 'Order.php', OrderData)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result === "success") {
                        localStorage.setItem('pscart', JSON.stringify([]));
                        History.push({
                                        pathname: '/confirmation',
                                        confProps: res.data.orderno
                                    });
                        setTotal({total: 0});
                    } else {
                        setCartError("BŁĄD: Problem z połączeniem. Sprawdź połączenie internetowe lub spróbuj później.");
                    }
                })
        }
    }

    let ShowCartItems;
    let OrderBtn;

    if (CartStorage.length === 0) {
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
                {CartStorage.map((r, index) => {
                    //console.log(r.id)
                    return(
                        <CartItem 
                            id={r.prodid}
                            name={r.name}
                            shortdesc={r.shortdesc}
                            desc={r.desc}
                            price={r.price}
                            quantity={r.quantity}
                            prodtotal={r.prodtotal}
                            imagename={r.imagename}
                            keyid={index}
                            key={index}
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

    //useEffect(() => {
        //let LocalStorage = JSON.parse(localStorage.getItem('pscart'));
        //setCart(LocalStorage);
        //localStorage.setItem('pscart', JSON.stringify(Cart));
        //localStorage.setItem('pstotal', Total.total);
        //let LocalStorage = localStorage.getItem('pstotal');
    //}, []);

    //localStorage.setItem('pscart', JSON.stringify(Cart));
    //localStorage.setItem('pstotal', Total.total);

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
                        <div className="CartError">{CartError}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SCart;