/*
    Plik:               Login.js
    Funkcja:            STRONA Z FORMULARZEM REJESTRACYJNYM
    Opis:               Formularz rejestracyjny dla osób chcących założyć konto
    Elementy:           Formularz rejestracyjny
    Przykład użycia:    N/A
    Dodatkowe info:     Walidacja danych, dodawanie nowego usera
*/

import React from 'react';

const login = () => {
    return(
        <div>
            <div>
                <h1>LOGOWANIE</h1>
                <label for="mail"/>
                <input type="text" name="mail"></input><br/>
                <label for="password"/>
                <input type="text" name="password"></input><br/>
                <button type="submit">ZALOGUJ</button>
            </div>
            <div>
                <h3>Nie masz jeszcze konta? Zarejestruj się!</h3>
                <h1>FORMULARZ REJESTRACYJNY</h1>
            </div>
        </div>
    )
}

export default login;