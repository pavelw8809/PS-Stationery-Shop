/*
    Plik:               Contact.js
    Funkcja:            STRONA INFORMACYJNA - KONTANT
    Opis:               Zakładka Kontakt w górnym menu nawigacyjnym
    Elementy:           
    Przykład użycia:    N/A
    Dodatkowe info:     Do wypełnienia o treści statyczne - treść w funkcji return()
*/

import React from 'react';

const contact = () => {
    return (
        <div>
            <h1>DANE KONTAKTOWE</h1>
            <h4>Biuro Obsługi Klienta</h4>
            <p> 
            darmowa infolinie - 100 707 100 
            <br></br>
            E-mail:  info@PAPER&SCISORS.pl
            <br></br>
            poniedziałek-piątek: od 8:00 do 16:00
            </p>
            <h4>Centrala Firmy</h4>
            <p> 
            PAPER&SCISORS Sp.z o.o.
            <br></br>
            ul. Tuecka 111, 11-111 Poznań
            <br></br>
            Tel. 11 40 30 222
            <br></br>
            E-mail:  info@PAPER&SCISORS.com.pl
            </p>
        </div>
    )
}
export default contact;