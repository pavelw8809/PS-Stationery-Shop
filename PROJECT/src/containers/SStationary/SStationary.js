/*
    Plik:               SOffice.js
    Funkcja:            SKLEP - ARTYKUŁY BIUROWE
    Opis:               Strona sklepu wyświetlająca artykuły z kategorii art. biurowe.
    Elementy:           Product Query - ComponentDidMount(), 
                        Karta Produktu dla każdego z elementów (ArdCard)
    Przykład użycia:    N/A
    Dodatkowe info:     Query + zwrócenie wyniku w kartach
*/

import React, { Component } from 'react';
import ArtCard from '../../components/ArtCard/ArtCard';             // import komponentu karty produktu
import axios from 'axios';
import TitleBar from '../../components/TitleBar/TitleBar';
import "../../components/ArtCard/ArtCard.scss";

class SOffice extends Component {

    state = ({
        products: [
        ]
    });

    componentDidMount() {
        axios.get(`http://localhost:80/WSB_SELCOR/SERVER/SStationary.php`)
            .then(res => {
                    //res.header('Access-Control-Allow-Origin', "*");
                    this.setState({products: res.data});
                    console.log(res.data);
                }
            )
    }

    render() {

        let showCards;                                                  // pusta zmienna dla tablicy z wynikami zapytania

        showCards = (
            <div className="ProdFlexbox">
                {this.state.products.map((record, index) => {            // mapowanie zapytania
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
}

export default SOffice;

// className Flexbox is stored in scss for ArtCard to not repeat it for all the containers!