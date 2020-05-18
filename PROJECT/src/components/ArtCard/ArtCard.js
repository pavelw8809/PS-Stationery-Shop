/*
    Plik:               ArtCard.js
    Funkcja:            KARTA PRODUKTU
    Opis:               Wyświetla bieżący produkt w karcie.
    Elementy:           Zdjęcie {props.imagename}, 
                        nazwa produktu {props.name}, 
                        opis produktu {props.description}, 
                        cena {props.price}, 
                        wybór ilości +/-, 
                        przycisk koszyka
    Przykład użycia:    <ArtCard imagename={nazwa_zdjecia} name={nazwa_artykulu} description={opis artykulu} price={cena} />
    Dodatkowe info:     {nazwa_zdjecia} ma korespondowac z numerem artykulu w bazie danych
*/

import React, { useState, useContext, useEffect } from 'react';
import App, { TotalContext } from '../../containers/App';
import carticon from '../../images/icons/black_cart.png';
import "./ArtCard.scss";                                                            // Import arkusza stylu dla dla komponentu
import { NavLink } from 'react-router-dom';

const Artcard = (props) =>{

    const [counter, setCounter] = useState({
        quantity: 0
    })
    //const [Cart, setCart] = useContext(CartContext);
    const [Total, setTotal] = useContext(TotalContext);
    //const [CartTemp, setCartTemp] = useState([]);

    //let CartStorage
    const Image = require('../../images/images/' + props.imagename + '.png');       // Ścieżka do zdjęcia

    let ProdImgStyle;
    ProdImgStyle = {                                                                // Stylizacja zdjęcia - zdjęcie jako tło karty
        backgroundImage: "url(" + Image + ")",
        backgroundColor: 'white',
    }

    useEffect(() => {
        //CartStorage = JSON.parse(localStorage.getItem('pscart'));
        //setCartTemp(CartStorage);
        //console.log(CartTemp);
    }, []);

    //console.log(initCart);

    let CartStorage = JSON.parse(localStorage.getItem('pscart'));

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
            document.querySelector(".qInput").value = 0;
        }
    }

    const addProd = (prodid, name, desc, q, price, imagename) => {
        let check = 0;
        let idToChange;
        let orSum = parseFloat((q*price));
        //let CartStorage;

        CartStorage.map((r, index) => {
            if (r.prodid === prodid) {
                check = 1
                idToChange = parseInt(index);
            }
        })

        if (q > 0) {
            if (check === 0) {
                
                //setCart(prevCart => ([...Cart, {
                    //id: Cart.length, 
                //    prodid: prodid,
                //    name: name, 
                //    desc: desc,
                //    price: parseFloat(price),
                //   quantity: q, 
                //    prodtotal: q*price,
                //    imagename: imagename
                //}]))
                
                let CartStorageN = ([...CartStorage, {
                    //id: CartStorage.length,
                    prodid: prodid,
                    name: name, 
                    shortdesc: props.shortdesc,
                    desc: desc,
                    price: parseFloat(price),
                    quantity: q,                                                                               
                    prodtotal: q*price,                             
                    imagename: imagename
                }]);
                localStorage.setItem('pscart', JSON.stringify(CartStorageN))

                const cartarray = [];
    
                const sum = Object.values(CartStorageN)
                  .map(obj => { cartarray.push(obj.prodtotal); return obj.prodtotal
                })
                  .reduce((sum, el) => {console.log(sum+el); return sum+el; }, 0);

                setTotal({total: sum});
        
                //console.log(newCartStorage);
            } else {
                //let newCart = [...Cart];
                //newCart[idToChange].quantity = newCart[idToChange].quantity+q;
                //newCart[idToChange].prodtotal = newCart[idToChange].price*newCart[idToChange].quantity;
                let CartStorageN = [...CartStorage];
                console.log(CartStorageN[idToChange]);
                CartStorageN[idToChange].quantity = CartStorageN[idToChange].quantity+q;
                CartStorageN[idToChange].prodtotal = CartStorageN[idToChange].price*CartStorageN[idToChange].quantity;
                localStorage.setItem('pscart', JSON.stringify(CartStorageN))
            
                const cartarray = [];
    
                const sum = Object.values(CartStorageN)
                  .map(obj => { cartarray.push(obj.prodtotal); return obj.prodtotal
                })
                  .reduce((sum, el) => {console.log(sum+el); return sum+el; }, 0);

                setTotal({total: sum});
            }

            setCounter({
                quantity: 0
            })
        }
    }

    return(
        <div className="artCard">
            <NavLink className="LinkToArtDetails" to={{
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
                <div className="ProdImgContainer" style={ProdImgStyle}></div>
                <div className="ProdInfo">
                    <h4>{props.name}</h4>
                    <p>{props.shortdesc}</p>
            </div>
            </NavLink>
            <div className="ProdState">
                <div className="PriceOrder">
                    <p>{props.price}</p>
                    <div className="OrderBar">
                        <button className="qBtn" onClick={increaseQuantity}>+</button>
                        <input className="qInput" type="text" value={counter.quantity} onChange={handleQuantity}/>
                        <button className="qBtn" onClick={decreaseQuantity}>-</button>
                    </div>
                </div>
                <button className="ToCartBtn" onClick={addProd.bind(this, props.prodid, props.name, props.shortdesc, counter.quantity, props.price, props.imagename)}><img className="carticonBtn" src={carticon} alt="cart"/>DO KOSZYKA</button>
            </div>
        </div>
    );
}

export default Artcard;

