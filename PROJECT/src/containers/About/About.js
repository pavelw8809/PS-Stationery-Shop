/*
    Plik:               About.js
    Funkcja:            STRONA INFORMACYJNA - OPIS FIRMY
    Opis:               Zakładka O Nas w górnym menu nawigacyjnym
    Elementy:           
    Przykład użycia:    N/A
    Dodatkowe info:     Do wypełnienia o treści statyczne - treść w funkcji return()
*/

import React from 'react';
import TitleBar from '../../components/TitleBar/TitleBar';

const about = () => {
    return (
        <div className="SiteContainer">
            <TitleBar title="O firmie"/>
            <p>
            PAPER&SCISORS to firma, która z powodzeniem działa na rynku od ponad 5 lat. 
            </p>
            <p>
             Przez cały ten okres budowaliśmy naszą markę w oparciu o rzetelność i rozumienie potrzeb naszych klientów.
            </p>
            <p>
            W naszej ofercie znajdą Państwo artykuły papiernicze, artykuły biurowe, koperty oraz artykuły piśmiennicze. Wszystkie nasze produkty cechują się najwyższą jakością oraz spełniają standardy ochrony środowiska i bezpieczeństwa pracy.
            </p>
            <p>
            Mając na uwadze jak ważną rolę pełni szybka dostawa towaru, oferujemy usługę dostarczenia lub odbioru produktów już w dniu zamówienia. Jest to możliwe dzięki odpowiedniemu zaopatrzeniu naszych stanów magazynowych.
            </p>
            <p>
            Doświadczenie pozwoliło nam zdobyć zaufanie i uznanie naszych klientów. Spostrzeżenia naszych użytkowników oraz ich sugestie stanowią dla nas fundament kształtowania oferty i umożliwiają nam zbudowanie wyselekcjonowanego zbioru produktów o najwyższej jakości.
            </p>
            <p>
            Wychodząc naprzeciw oczekiwaniom naszych klientów cały czas zwiększamy asortyment produktów oraz dokonujemy usprawnień sklepu internetowego. Jednocześnie gorąco zachęcamy do zgłaszania Państwa pomysłów oraz propozycji, które pozwolą nam na jeszcze sprawniejszą obsługę.
            </p>
        </div>
    )
}

export default about;