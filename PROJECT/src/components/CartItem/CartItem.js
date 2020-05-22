// CartItem -> Cart

import React, { useState, useContext } from 'react';
import { TotalContext } from '../../containers/App';
import './CartItem.scss';
import { TiDelete } from "react-icons/ti";
import { NavLink } from 'react-router-dom';

const CartItem = (props) => {

    // STATES

    const [Total, setTotal] = useContext(TotalContext);
    const [counter, setCounter] = useState({quantity: props.quantity});

    // IMAGE BACKGROUND STYLE

    const Image = require('../../images/images/' + props.imagename + '.png');

    let ProdImgStyle;
    ProdImgStyle = {
        backgroundImage: "url(" + Image + ")"
    };

    // LOAD CART CONTENT FROM LOCAL STORAGE

    let CartStorage = JSON.parse(localStorage.getItem('pscart'));

    // FUNCTIONS

    const increaseQuantity = (index) => {     
        let CartStorageN = [...CartStorage];
        CartStorageN[index].quantity = CartStorageN[index].quantity+1;
        CartStorageN[index].prodtotal = CartStorageN[index].price*CartStorageN[index].quantity;
        localStorage.setItem('pscart', JSON.stringify(CartStorageN));

        setCounter({
            quantity: CartStorageN[index].quantity
        })

        const cartarray = [];
        const sum = Object.values(CartStorageN)
          .map(obj => { cartarray.push(obj.prodtotal); return obj.prodtotal
        })
          .reduce((sum, el) => {return sum+el;}, 0);
    
        setTotal({...Total, total: sum});
    }

    const decreaseQuantity = (index) => {
        if (counter.quantity > 1) {
            let CartStorageN = [...CartStorage];
            CartStorageN[index].quantity = CartStorageN[index].quantity-1;
            CartStorageN[index].prodtotal = CartStorageN[index].price*CartStorageN[index].quantity;
            localStorage.setItem('pscart', JSON.stringify(CartStorageN));

            const cartarray = [];
            const sum = Object.values(CartStorageN)
              .map(obj => { cartarray.push(obj.prodtotal); return obj.prodtotal
            })
              .reduce((sum, el) => {return sum+el;}, 0);
        
            setTotal({...Total, total: sum});

            setCounter({
                quantity: CartStorageN[index].quantity
            })
        }
    }

    return(
        <div className="CartItem">
            <NavLink className="CartItemImg" style={ProdImgStyle} to={{
                pathname: "/artdetails",
                artProps: {
                    name: props.name,
                    shortdesc: props.shortdesc,
                    description: props.desc,
                    price: props.price,
                    imagename: props.imagename,
                    prodid: props.id
                }
                }}>
            </NavLink>
            <div className="CartItemContainer">
                <h4 className="CartItemName">{props.name} - {props.desc}</h4>
                <div className="CartItemPrice">
                    <div className="CartProdPrice">{parseFloat(props.price).toFixed(2)}</div>
                    <div className="CartItemPanel">
                        <button className="qBtn" onClick={increaseQuantity.bind(this, props.keyid)}>+</button>
                        <input className="CartqInput" type="text" value={counter.quantity}/>
                        <button className="qBtn" onClick={decreaseQuantity.bind(this, props.keyid)}>-</button>
                    </div>
                    <div className="CartItemTotal">
                        {parseFloat(props.prodtotal).toFixed(2)}
                    </div>
                </div>
            </div>
            <button className="CartRemBtn" onClick={props.removeitem}><TiDelete size={30} className="RemBtn"/></button>
        </div>
    )
}

export default CartItem;
