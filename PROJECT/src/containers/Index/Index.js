/*
    Plik:               Index.js
    Funkcja:            KONTENER STARTOWY - INDEX STRONY
    Opis:               Strona główna po wpisaniu adresu głównego
    Elementy:           
    Przykład użycia:    N/A
    Dodatkowe info:     Treści statyczne + slider z ofertą + randomowe karty z ofertami
*/

import React, { useContext } from 'react';
import TitleBar from '../../components/TitleBar/TitleBar';
import { UserContext } from '../App';

const Index = () => {
    const [User, setUser] = useContext(UserContext);

    let UserWelcome;

    if (User.name) {
        UserWelcome = (
            <div>
                Miło Cię znowu widzieć, {User.name}
            </div>
        )
    }

    return(
        <div className="SiteContainer">
            <TitleBar title= "Zapraszamy do skorzystania z naszej oferty"/>
            {UserWelcome}
        </div>
    )
}

export default Index;