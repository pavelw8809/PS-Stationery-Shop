import React, { useState, useContext } from 'react';
import { CartContext, TotalContext } from '../../containers/App';
import './CartItem.scss';
import { TiDelete } from "react-icons/ti";

const CartItem = (props) => {

    const [initCart, Cart] = useContext(CartContext);                               // stan globalny - stan koszyka
    const [initTotal, Total] = useContext(TotalContext);                            // stan globalny - suma do zapłaty
    const [counter, setCounter] = useState({quantity: props.quantity})              // stan lokalny - wyświetla ilość produktu
    const [totalPrice, setTotalPrice] = useState({totalprice: props.prodtotal})     // stan lokalny - wyświetla sumę do zapłaty

    const Image = require('../../images/images/' + props.imagename + '.png');       // Ścieżka do zdjęcia

    let ProdImgStyle;
    ProdImgStyle = {                                                                // Stylizacja zdjęcia - zdjęcie jako tło karty
        backgroundImage: "url(" + Image + ")"
    }



    const increaseQuantity = (index) => {
        let newCart = [...initCart];
        newCart[index].quantity = newCart[index].quantity+1;
        newCart[index].prodtotal = parseFloat(newCart[index].prodtotal) + parseFloat(newCart[index].price);
        
        setCounter({
            quantity: newCart[index].quantity
        })
        setTotalPrice({
            totalprice: newCart[index].prodtotal
        })
        Total({
            total: parseFloat(initTotal.total) + parseFloat(newCart[index].price)
        })
    }

    const decreaseQuantity = (index) => {
        if (counter.quantity > 1) {
            let newCart = [...initCart];
            newCart[index].quantity = newCart[index].quantity-1;
            newCart[index].prodtotal = parseFloat(newCart[index].prodtotal) - parseFloat(newCart[index].price);

            setCounter({
                quantity: newCart[index].quantity
            })
            setTotalPrice({
                totalprice: newCart[index].prodtotal
            })
            Total({
                total: parseFloat(initTotal.total) - parseFloat(newCart[index].price)
            })
        }
    }

    return(
        <div className="CartItem">
            <div className="CartItemImg" style={ProdImgStyle}></div>
            <div className="CartItemContainer">
                <h4 className="CartItemName">{props.name} - {props.desc}</h4>
                <div className="CartItemPrice">
                    <div className="CartProdPrice">{parseFloat(props.price).toFixed(2)}</div>
                    <div className="CartItemPanel">
                        <button className="qBtn" onClick={increaseQuantity.bind(this, props.id)}>+</button>
                        <input className="CartqInput" type="text" value={counter.quantity}/>
                        <button className="qBtn" onClick={decreaseQuantity.bind(this, props.id)}>-</button>
                    </div>
                    <div className="CartItemTotal">
                        {parseFloat(totalPrice.totalprice).toFixed(2)}
                    </div>
                </div>
            </div>
            <button className="CartRemBtn" onClick={props.removeitem}><TiDelete size={30} className="RemBtn"/></button>
        </div>
    )
}

export default CartItem;
