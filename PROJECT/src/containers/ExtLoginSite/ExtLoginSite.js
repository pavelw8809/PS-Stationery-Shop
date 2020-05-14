/*
    Plik:               Login.js
    Funkcja:            STRONA Z FORMULARZEM REJESTRACYJNYM
    Opis:               Formularz rejestracyjny dla osób chcących założyć konto
    Elementy:           Formularz rejestracyjny
    Przykład użycia:    N/A
    Dodatkowe info:     Walidacja danych, dodawanie nowego usera
*/

import React, { useState, useContext, useEffect } from 'react';
import './ExtLoginSite.scss'
import Axios from 'axios';
import { UserContext, ServerPath } from '../App';
import { useHistory } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";
import Cookies from 'js-cookie';

const ExtLoginSite = (props) => {

    const [ErrorInfo, setErrorInfo] = useState();
    const [Login, setLogin] = useState();
    const [User, setUser] = useContext(UserContext);

    const UserID = Cookies.get('pssession');

    //const UserNo = JSON.stringify(User.userinfo.login);
    //console.log(UserNo);

    useEffect(() => {
        if (!UserID) {
            History.push("/login");
        }
    }, [])

    const handleLogin = (event) => {
        if (event.keyCode === 13) {
            console.log("A");
            submitCredentials();
        } else {
            setLogin({...Login, user: event.target.value});
        }
    }

    const handlePassword = (event) => {
        if (event.keyCode === 13) {
            submitCredentials();
        } else {
            setLogin({...Login, password: event.target.value, userid: User.userinfo.login});
        }
    }

    const History = useHistory();

    const submitCredentials = () => {
        setLogin({...Login, userid: User.userinfo.login});
        Axios.post(ServerPath + 'ExtLogin.php', Login)
        .then(res => {
            console.log(res.data);
            if(res.data.sessionid) {
                /*
                console.log(res.data);
                res.data.map((r, index) => {
                    setUser((prevState) => ({...prevState, accinfo: {
                        mail: r.u_mail,
                        cname: r.cc_name,
                        ccity: r.cc_city,
                        cstreet: r.cc_street,
                        chouse: r.cc_number,
                        cflat: r.cc_number_flat,
                        czip: r.cc_zip,
                        cnip: r.cc_NIP,
                        cregon: r.cc_REGON,
                        iname: r.ci_name,
                        isurname: r.ci_surname,
                        icity: r.ci_city,
                        istreet: r.ci_street,
                        ihouse: r.ci_number,
                        iflat: r.ci_number_flat,
                        izip: r.ci_zip
                    }}));
                })
                */

                //let sessionID = Cookies.get('pssession');
                let cookietime = 1/48;
                Cookies.set('psacc', res.data.sessionid, {expires: cookietime});
                //setUser((prevState => ({...prevState, acccontrol: true})));
                History.push('/account');
            } else {
                let errordata = (
                    <div className="ExtLoginErrInfo">
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

    //console.log(Login);

    return(
        <div className = "AuthWindow">
            <MdErrorOutline size={70}/>
            <h3>Dostęp do informacji: {props.feature}<br/>wymaga dodatkowego uwierzytelnienia.</h3>
            <p>Proszę zaloguj się ponownie</p>
            <label htmlFor="mail">Nazwa użytkownika</label>
            <input type="text" name="mail" onChange={handleLogin} onKeyDown={handleLogin}></input><br/>
            <label htmlFor="password">Hasło</label>
            <input type="text" name="password" onChange={handlePassword} onKeyDown={handlePassword}></input><br/>
            <button type="submit" onClick={submitCredentials}>ZALOGUJ</button>
            {ErrorInfo}
        </div>
    )
}

export default ExtLoginSite;