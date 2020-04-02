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

import React from 'react';
import "./ArtCard.scss";                                                            // Import arkusza stylu dla dla komponentu

const artcard = (props) => {

    const Image = require('../../images/images/' + props.imagename + '.png');       // Ścieżka do zdjęcia

    let ProdImgStyle;

    ProdImgStyle = {                                                                // Stylizacja zdjęcia - zdjęcie jako tło karty
        backgroundImage: "url(" + Image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "200px 150px"
    }

    return(
        <div style={ProdImgStyle} className="artCard">
            <div className="ProdName">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
            <p>{props.price}</p>
        </div>
    );
}

export default artcard;

//<img className="ProdImg" src={Image} alt={props.imagename}/>