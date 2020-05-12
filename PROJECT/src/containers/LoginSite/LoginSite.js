/*
    Plik:               Login.js
    Funkcja:            STRONA Z FORMULARZEM REJESTRACYJNYM
    Opis:               Formularz rejestracyjny dla osób chcących założyć konto
    Elementy:           Formularz rejestracyjny
    Przykład użycia:    N/A
    Dodatkowe info:     Walidacja danych, dodawanie nowego usera
*/

import React, { useState, useContext, useEffect } from 'react';
import './LoginSite.scss'
import Axios from 'axios';
import { UserContext, ServerPath } from '../App';
import { useHistory } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";
import Cookies from 'js-cookie';

const LoginSite = (props) => {

    const [ErrorInfo, setErrorInfo] = useState();
    const [LoginData, setLoginData] = useState();       // Temporary state for sending login data
    const [User, setUser] = useContext(UserContext);

    const handleUsername = (event) => {
        if (event.keyCode === 13) {
            handleLogin();
        } else {
            setLoginData({...LoginData, user: event.target.value});
        }
    }

    const handlePassword = (event) => {
        if (event.keyCode === 13) {
            handleLogin();
        } else {
            setLoginData({...LoginData, password: event.target.value, userid: User.userinfo.login});
        }
    }

    const History = useHistory();

    const handleLogin = () => {
        Axios.post(ServerPath + "Login.php", LoginData)
        .then(function(res) {
            //console.log(res.data);
            
            if (res.data.uid) {
                //console.log(res.data);
                setUser({...User, userinfo: res.data});
                Cookies.set('pssession', res.data.sessionid);
                //setLogShow(false);
                History.push('/');
            } else {
                let errordata = (
                    <div className="ErrorInfo">
                        {res.data.map((r, index) => {
                            return(
                                <p key={index}>{r}</p>
                            )
                        })}
                    </div>
                
                )
                setErrorInfo(errordata);
            }
        })
        //let sessionid = Cookies.get('pssession');
        //Axios.post(ServerPath + "Session.php", sessionid)
        //.then(function(res) {
            //console.log(User);
        //    console.log(res.data);
        //})
    }

    return(
        <div className = "AuthWindow">
            <MdErrorOutline size={70}/>
            <h3>LOGOWANIE</h3>
            <label htmlFor="mail">Nazwa użytkownika</label>
            <input type="text" name="mail" onChange={handleUsername}></input><br/>
            <label htmlFor="password">Hasło</label>
            <input type="text" name="password" onChange={handlePassword}></input><br/>
            <button type="submit" onClick={handleLogin}>ZALOGUJ</button>
            <div>{ErrorInfo}</div>
            <p className="LoginRegP">Nie masz konta?</p>
            <button className="LoginRegBtn" type="submit">ZAREJESTRUJ KONTO</button>
        </div>
    )
}

export default LoginSite;