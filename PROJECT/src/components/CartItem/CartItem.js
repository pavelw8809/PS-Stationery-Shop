import React, { useState, useContext } from 'react';
import { CartContext, TotalContext } from '../../containers/App';
import './CartItem.scss';
import { TiDelete } from "react-icons/ti";

const CartItem = (props) => {

    const [initCart, Cart] = useContext(CartContext);
    const [initTotal, Total] = useContext(TotalContext);
    const [counter, setCounter] = useState({quantity: props.quantity})
    const [totalPrice, setTotalPrice] = useState({totalprice: props.prodtotal})

    const Image = require('../../images/images/' + props.imagename + '.png');

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
        if (counter.quantity > 0) {
            let newCart = [...initCart];
            newCart[index].quantity = newCart[index].quantity-1;

            setCounter({
                quantity: newCart[index].quantity
            })
        }
    }

    const handleQuantity = (event, index) => {
        let newCart = [...initCart];
        newCart[index].quantity = parseInt(event.handler.value)
    }

    return(
        <div className="CartItem">
            <img className="CartItemImg" src={Image} alt="prodimg"/>
            <div className="CartItemContainer">
                <h4 className="CartItemName">{props.name} - {props.desc}</h4>
                <div className="CartItemPrice">
                    <div className="CartProdPrice">{props.price}</div>
                    <div className="CartItemPanel">
                        <button className="qBtn" onClick={increaseQuantity.bind(this, props.id)}>+</button>
                        <input className="CartqInput" value={counter.quantity} onChange={handleQuantity.bind(this, props.id)}/>
                        <button className="qBtn" onClick={decreaseQuantity.bind(this, props.id)}>-</button>
                    </div>
                    <div className="CartItemTotal">
                        {parseFloat(totalPrice.totalprice).toFixed(2)}
                    </div>
                </div>
            </div>
            <button className="CartRemBtn"><TiDelete size={30} className="RemBtn"/></button>
        </div>
    )
}

export default CartItem;
