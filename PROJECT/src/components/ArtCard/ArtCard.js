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

import React, { useState } from 'react';
import "./ArtCard.scss";                                                            // Import arkusza stylu dla dla komponentu

const Artcard = (props) => {

    const [counter, setCounter] = useState({
        quantity: 0
    })

    const Image = require('../../images/images/' + props.imagename + '.png');       // Ścieżka do zdjęcia

    let ProdImgStyle;
    ProdImgStyle = {                                                                // Stylizacja zdjęcia - zdjęcie jako tło karty
        backgroundImage: "url(" + Image + ")",
        backgroundColor: 'white',
    }

    const increaseQuantity = () => {
        setCounter({
            quantity: counter.quantity+1
        })
    }
    
    const decreaseQuantity = () => {
        if(counter.quantity > 0) {
            setCounter({
                quantity: counter.quantity-1
            })
        }
    }

    const handleQuantity = (event) => {
        setCounter({
            quantity: parseInt(event.target.value)
        })
    }

    return(
        <div className="artCard">
            <div className="ProdImgContainer" style={ProdImgStyle}>
            </div>
            <div className="ProdInfo">
                <h4>{props.name}</h4>
                <p>{props.shortdesc}</p>
            </div>
            <div className="ProdState">
                <p>{props.price}</p>
                <button onClick={increaseQuantity}>+</button>
                <input type="number" value={counter.quantity} onChange={handleQuantity}/>
                <button onClick={decreaseQuantity}>-</button>
                <button className="ToCartB">DO KOSZYKA</button>
            </div>
        </div>
    );
}

export default Artcard;

//<img className="ProdImg" src={Image} alt={props.imagename}/>

