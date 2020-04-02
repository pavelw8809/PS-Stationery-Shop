/*
    Plik:               SOffice.js
    Funkcja:            SKLEP - ARTYKUŁY BIUROWE
    Opis:               Strona sklepu wyświetlająca artykuły z kategorii art. biurowe.
    Elementy:           Product Query - ComponentDidMount(), 
                        Karta Produktu dla każdego z elementów (ArdCard)
    Przykład użycia:    N/A
    Dodatkowe info:     Query + zwrócenie wyniku w kartach
*/

import React, {useState} from 'react';
import ArtCard from '../../components/ArtCard/ArtCard';             // import komponentu karty produktu
import "../../components/ArtCard/ArtCard.scss";

function SOffice() {
    const [sOffice] = useState({
        products: [
        {p_id: "6251", p_c_id: "ARTY", p_name: "Cienkopis PILOT V5", p_code: "ARTY62510", p_description: "czarny", p_price: 5.69},
        {p_id: "2267", p_c_id: "ARTY", p_name: "Długopis TOMA 059/050", p_code: "ARTY22670", p_description: "niebieski", p_price: 1.21},
        {p_id: "9571", p_c_id: "ARTY", p_name: "Długopis zwykły", p_code: "ARTY95710", p_description: "czarny", p_price: 0.41},
        {p_id: "9571", p_c_id: "ARTY", p_name: "Długopis zwykły", p_code: "ARTY95711", p_description: "niebieski", p_price: 0.41},
        {p_id: "1940", p_c_id: "ARTY", p_name: "Długopis automatyczny", p_code: "ARTY19400", p_description: "czerwony", p_price: 0.49},
        {p_id: "1319", p_c_id: "ARTY", p_name: "Flamaster", p_code: "ARTY13190", p_description: "czarny", p_price: 1.06}
        ]
    });

    let showCards;                                                  // pusta zmienna dla tablicy z wynikami zapytania

    showCards = (
        <div className="ProdFlexbox">
            {sOffice.products.map((sOfficeR, index) => {            // mapowanie zapytania
                return(
                    <ArtCard
                        imagename={sOfficeR.p_code}
                        name={sOfficeR.p_name}
                        description={sOfficeR.p_description}
                        price={sOfficeR.p_price}
                        key={index}
                    />
                )
            })}
        </div>
    );

    return(
        <div>
            <h1>SHOP - OFFICE ARTICLES</h1>
            {showCards}
        </div>
    )
}

export default SOffice;

// className Flexbox is stored in scss for ArtCard to not repeat it for all the containers!