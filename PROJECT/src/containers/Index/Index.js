/*
    Plik:               Index.js
    Funkcja:            KONTENER STARTOWY - INDEX STRONY
    Opis:               Strona główna po wpisaniu adresu głównego
    Elementy:           
    Przykład użycia:    N/A
    Dodatkowe info:     Treści statyczne + slider z ofertą + randomowe karty z ofertami
*/

import React, { useEffect, useState } from 'react';
import ArtCard from '../../components/ArtCard/ArtCard';
//import { CartContext } from '../App';
import axios from 'axios';
import TitleBar from '../../components/TitleBar/TitleBar';
import "../../components/ArtCard/ArtCard.scss";
import { ServerPath } from '../App';
import Slider from '../../components/Slider/Slider';

const Index = () => {

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(ServerPath + `Index.php`)
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
        <div className="SiteContainer">
            <TitleBar title="Zapraszamy do skorzystania z naszej oferty"/>
            <Slider/>

            <TitleBar title="Top 5 najczęściej kupowanych produktów w naszym sklepie"/>

            {showCards}
        </div>
    )
}

export default Index;