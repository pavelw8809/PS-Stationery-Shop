import React, { useState, useContext } from 'react';
import { CartContext, TotalContext } from '../../containers/App';
import './ArtDetails.scss';
import carticon from '../../images/icons/black_cart.png';

const Artdetails = (props) => {

    const [Cart, setCart] = useContext(CartContext);                               // stan globalny - stan koszyka
    const [Total, setTotal] = useContext(TotalContext);                            // stan globalny - suma do zapłaty
    const [counter, setCounter] = useState({quantity: 0})              // stan lokalny - wyświetla ilość produktu
    
    const Image = require('../../images/images/' + props.location.artProps.imagename + '.png');       // Ścieżka do zdjęcia

    let ProdImgStyle;
    ProdImgStyle = {                                                                // Stylizacja zdjęcia - zdjęcie jako tło karty
        backgroundImage: "url(" + Image + ")",
        backgroundColor: 'white',
    }

    let NetPrice = (props.location.artProps.price/1.23).toFixed(2);

    const increaseQuantity = () => {
        if (counter.quantity < 100) {
            setCounter({
                quantity: counter.quantity+1
            })
        }
    }
    
    const decreaseQuantity = () => {
        if(counter.quantity > 0) {
            setCounter({
                quantity: counter.quantity-1
            })
        }
    }

    const handleQuantity = (event) => {
        let regexp = /^[0-9\b]+$/
        let input = event.target.value
        if (regexp.test(input)) {
        setCounter({
            quantity: parseInt(input)
        })
        } else {
            document.querySelector(".ArtDqInput").value = 0;
        }
    }

    const addProd = (prodid, name, desc, q, price, imagename) => {
        let check = 0;
        let idToChange;
        let orSum = parseFloat((q*price));

        Cart.map((r, index) => {
            if (r.prodid === prodid) {
                check = 1
                idToChange = parseInt(index);
            }
        })

        if (q > 0) {
            if (check === 0) {
                setCart(prevCart => ([...Cart, {
                    id: Cart.length, 
                    prodid: prodid,
                    name: name, 
                    desc: desc,
                    price: parseFloat(price),
                    quantity: q, 
                    prodtotal: q*price,
                    imagename: imagename
                }]))
            } else {
                let newCart = [...Cart];
                newCart[idToChange].quantity = newCart[idToChange].quantity+q;
                newCart[idToChange].prodtotal = newCart[idToChange].price*newCart[idToChange].quantity;
            }
            setTotal({
                total: parseFloat(Total.total+orSum)
            })
            setCounter({
                quantity: 0
            })
        }
    }

    return(
        <div className="ArtDetails">
            <div className="ArtDContainer">
                <div className="ArtImgContainer" style={ProdImgStyle}>
                    <p>Nr artykułu: {props.location.artProps.prodid}</p>
                </div>
                <div className="ArtDCard">
                    <div className="ArtDMain">
                        <h4 className="ArtDTitle">{props.location.artProps.name}</h4>
                        <p className="ArtDShortDesc">{props.location.artProps.shortdesc}</p>
                    </div>
                    <div className="ArtDDesc">
                        <p>{props.location.artProps.description}</p>
                    </div>
                    <div className="ArtDPrice">
                        <div>
                            Cena netto:
                            <p className="NetPrice">{NetPrice}</p>
                        </div>
                        <div className="GrossPriceContainer">
                            Cena brutto: 
                            <p className="GrossPrice">{props.location.artProps.price}</p>
                        </div>
                        <div className="ArtDOrderPanel">
                            <button className="ArtDqBtn" onClick={increaseQuantity}>+</button>
                            <input className="ArtDqInput" type="text" value={counter.quantity} onChange={handleQuantity}/>
                            <button className="ArtDqBtn" onClick={decreaseQuantity}>-</button>
                        </div>
                    </div>
                    <div className="ArtDOrderBar">

                    </div>
                </div>
                <button 
                    className="ArtDOrderBtn" 
                    onClick={addProd.bind(this, props.location.artProps.prodid, props.location.artProps.name, props.location.artProps.shortdesc, counter.quantity, props.location.artProps.price, props.location.artProps.imagename)}><img className="carticonBtn" src={carticon} alt="cart"/>DO KOSZYKA</button>
            </div>
        </div>
    )
}

export default Artdetails;

/*
            <p>{props.location.artProps.name}</p>
            <p>{props.location.artProps.shortdesc}</p>
            <p>{props.location.artProps.description}</p>
            <p>{props.location.artProps.price}</p>
*/