/*
    Plik:               Services.js
    Funkcja:            STRONA INFORMACYJNA - USŁUGI
    Opis:               Strona z informacją o usługach dodatkowych, świadczonych przez firmę
    Elementy:           
    Przykład użycia:    N/A
    Dodatkowe info:     Do wypełnienia o treści statyczne - treść w funkcji return().
*/

import React from 'react';
import TitleBar from '../../components/TitleBar/TitleBar';

const services = () => {
    return (
        <div className="SiteContainer">
            <TitleBar title= "Spełniamy oczekiwania naszych Klientów"/>
            <div className="InfoBox">
                <p>
                    Dysponujemy bogatym asortymentem, który obejmuje produkty niezbędne do sprawnego funkcjonowania każdego biura.  
                </p>
                <p>
                    W sprzedaży mamy artykuły papiernicze, artykuły biurowe, koperty oraz artykuły piśmiennicze. 
                </p>
                <p>
                    Zapewniamy atrakcyjne, przystępne ceny towarów oraz rzetelną obsługę. Służymy profesjonalnym doradztwem przy wyborze odpowiednich produktów.   
                </p>
                <p>
                    Opinia Klientów jest dla nas najważniejsza i to na jej podstawie przygotowujemy naszą ofertę i świadczymy usługi.
                </p>
            </div>
        </div>
    )
}

export default services;