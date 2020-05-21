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
import { useHistory, NavLink } from 'react-router-dom';
import { IoMdLogIn } from "react-icons/io";
import Cookies from 'js-cookie';

const LoginSite = (props) => {

    const [ErrorInfo, setErrorInfo] = useState();
    const [LoginData, setLoginData] = useState();       // Temporary state for sending login data
    const [User, setUser] = useContext(UserContext);

    let cartoption;
    let addinfo;
    let infostyle;

    if (typeof(props.location.addProps) !== 'undefined') {
        addinfo = props.location.addProps.addinfo;
        cartoption = true;
    } else {
        infostyle = {display: 'none'};
    }


    //let addinfo = props.info;

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
                setUser({...User, userinfo: res.data, usercontrol: true});
                Cookies.set('pssession', res.data.sessionid);
                //setLogShow(false);
                if (cartoption === true) {
                    History.push('/cart');
                } else {
                    History.push('/');
                }
            } else {
                let errordata = (
                    <div className="LoginErrInfo">
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
    }

    return(
        <div className = "LoginAuthWindow">
            <IoMdLogIn size={70}/>
            <h3>OKNO LOGOWANIA</h3>
            <div className="LoginAddInfo" style={infostyle}>{addinfo}</div>
            <label htmlFor="mail">Nazwa użytkownika</label>
            <input type="text" name="mail" onChange={handleUsername} onKeyDown={handleUsername}></input><br/>
            <label htmlFor="password">Hasło</label>
            <input type="password" name="password" onChange={handlePassword} onKeyDown={handlePassword}></input><br/>
            <button className="LoginLogBtn" type="submit" onClick={handleLogin}>ZALOGUJ</button>
            {ErrorInfo}
            <hr className="separator"/>
            <p className="LoginRegP">Nie masz konta?</p>
            <NavLink className="LoginRegBtnContainer" to="/regform"><button className="LoginRegBtn" type="submit">ZAREJESTRUJ KONTO</button></NavLink>
        </div>
    )
}

export default LoginSite;