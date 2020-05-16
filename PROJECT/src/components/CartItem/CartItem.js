import React, { useState, useContext } from 'react';
import { CartContext, TotalContext } from '../../containers/App';
import './CartItem.scss';
import { TiDelete } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import { MdSettingsBackupRestore } from 'react-icons/md';

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

    let CartStorage = JSON.parse(localStorage.getItem('pscart'));

    const increaseQuantity = (index) => {
        let newCart = [...initCart];
        newCart[index].quantity = newCart[index].quantity+1;
        newCart[index].prodtotal = parseFloat(newCart[index].prodtotal) + parseFloat(newCart[index].price);
        
        console.log(index);
        let CartStorageN = [...CartStorage];
        CartStorageN[index].quantity = CartStorageN[index].quantity+1;
        CartStorageN[index].prodtotal = CartStorageN[index].price*CartStorageN[index].quantity;
        localStorage.setItem('pscart', JSON.stringify(CartStorageN));
        //Cart({...initCart, CartStorageN});
        
        //const cartarray = [];
    
        //const sum = Object.values(CartStorageN)
        //  .map(obj => { cartarray.push(obj.prodtotal); return obj.prodtotal
        //})
        //  .reduce((sum, el) => {console.log(sum+el); return sum+el; }, 0);
    
        //Total({total: sum});

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

            let CartStorageN = [...CartStorage];
            console.log(CartStorageN);
            CartStorageN[index].quantity = CartStorageN[index].quantity-1;
            CartStorageN[index].prodtotal = CartStorageN[index].price*CartStorageN[index].quantity;
            localStorage.setItem('pscart', JSON.stringify(CartStorageN));
            //Cart({...initCart, CartStorageN});

            const cartarray = [];
    
            const sum = Object.values(CartStorageN)
              .map(obj => { cartarray.push(obj.prodtotal); return obj.prodtotal
            })
              .reduce((sum, el) => {console.log(sum+el); return sum+el; }, 0);
        
            Total({total: sum});

            setCounter({
                quantity: newCart[index].quantity
            })
            //setTotalPrice({
            //    totalprice: newCart[index].prodtotal
            //})
            //Total({
            //    total: parseFloat(initTotal.total) - parseFloat(newCart[index].price)
            //})
        }
    }

    //localStorage.setItem('pscart', JSON.stringify(Cart));
    //localStorage.setItem('pstotal', Total.total);

    return(
        <div className="CartItem">
        <NavLink className="CartItemImg" style={ProdImgStyle} to={{
            pathname: "/artdetails",
            artProps: {
                name: props.name,
                shortdesc: props.shortdesc,
                description: props.description,
                price: props.price,
                imagename: props.imagename,
                prodid: props.prodid
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
