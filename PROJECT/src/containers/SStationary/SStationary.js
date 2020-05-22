/*
    Plik:               SOffice.js
    Funkcja:            SKLEP - ARTYKUŁY BIUROWE
    Opis:               Strona sklepu wyświetlająca artykuły z kategorii art. biurowe.
    Elementy:           Product Query - ComponentDidMount(), 
                        Karta Produktu dla każdego z elementów (ArdCard)
    Przykład użycia:    N/A
    Dodatkowe info:     Query + zwrócenie wyniku w kartach
*/

import React, { useState, useEffect } from 'react';
import ArtCard from '../../components/ArtCard/ArtCard';
import axios from 'axios';
import TitleBar from '../../components/TitleBar/TitleBar';
import "../../components/ArtCard/ArtCard.scss";
import { ServerPath } from '../App';

const SStationary = () => {

    const [Products, setProducts] = useState([]);  
    
    useEffect(() => {
        axios.get(ServerPath + 'SStationary.php')
        .then(res => {
            setProducts(res.data);
        })
    }, [])

    let showCards;

    showCards = (
        <div className="ProdFlexbox">
            {Products.map((record, index) => {
                return(
                    <ArtCard
                        imagename={record.p_code}
                        prodid = {record.p_id}
                        name={record.p_name}
                        shortdesc={record.p_shortdescription}
                        description={record.p_description}
                        price={record.p_price}
                        key={index}
                    />
                )
            })}
        </div>
    );

    return(
        <div className="MainProductBox">
            <TitleBar title="ARTYKUŁY PIŚMIENNICZE"/>
            {showCards}
        </div>     
    )
}

export default SStationary;