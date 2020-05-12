/*
    Plik:               SEnvelopes.js
    Funkcja:            SKLEP - KOPERTY
    Opis:               Strona sklepu wyświetlająca artykuły z kategorii koperty.
    Elementy:           Product Query - ComponentDidMount(), 
                        Karta Produktu dla każdego z elementów (ArdCard)
    Przykład użycia:    N/A
    Dodatkowe info:     Query + zwrócenie wyniku w kartach
*/

import React, { useContext, useEffect, useState } from 'react';
import ArtCard from '../../components/ArtCard/ArtCard';
import { ServerPath } from '../App';
import axios from 'axios';
import TitleBar from '../../components/TitleBar/TitleBar';
import "../../components/ArtCard/ArtCard.scss"

const Shopenvelopes = () => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(ServerPath + "SEnvelopes.php")
        .then(res => {
            setProducts(res.data);
        })
    }, [])

    let showCards;

    showCards = (
        <div className="ProdFlexbox">
            {Products.map((r, index) => {
                return(
                    <ArtCard 
                        imagename={r.p_code}
                        prodid = {r.p_id}
                        name = {r.p_name}
                        shortdesc = {r.p_shortdescription}
                        description = {r.p_description}
                        price={r.p_price}
                        key={index}
                    />
                )
            })}
        </div>
    )

    return(
        <div className="MainProductBox">
            <TitleBar title="KOPERTY"/>
            {showCards}
        </div>
    )
}

export default Shopenvelopes;