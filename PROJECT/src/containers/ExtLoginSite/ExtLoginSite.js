// ExtLoginSite -> UserBtn (component runs when extended login procedure is necessary)

import React, { useState, useContext, useEffect } from 'react';
import './ExtLoginSite.scss'
import Axios from 'axios';
import { UserContext, ServerPath } from '../App';
import { useHistory } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";
import Cookies from 'js-cookie';

const ExtLoginSite = (props) => {

    // STATES

    const [ErrorInfo, setErrorInfo] = useState();
    const [Login, setLogin] = useState();
    const [User] = useContext(UserContext);

    // LOAD SESSION COOKIE FILE

    const UserID = Cookies.get('pssession');

    // USEHISTORY HOOK

    const History = useHistory();

    // USEEFFECT HOOK - If pssession token is not present redirect to Login site.

    useEffect(() => {
        if (!UserID) {
            History.push("/login");
        }
    }, [History, UserID])

    // FUNCTIONS

    const handleLogin = (event) => {
        if (event.keyCode === 13) {
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

    const submitCredentials = () => {
        setLogin({...Login, userid: User.userinfo.login});
        Axios.post(ServerPath + 'ExtLogin.php', Login)
        .then(res => {
            if(res.data.sessionid) {
                let cookietime = 1/48;
                Cookies.set('psacc', res.data.sessionid, {expires: cookietime});
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

    return(
        <div className = "AuthWindow">
            <MdErrorOutline size={70}/>
            <h3>Dostęp do informacji: {props.feature}<br/>wymaga dodatkowego uwierzytelnienia.</h3>
            <p>Proszę zaloguj się ponownie</p>
            <label htmlFor="mail">Nazwa użytkownika</label>
            <input type="text" name="mail" onChange={handleLogin} onKeyDown={handleLogin}></input><br/>
            <label htmlFor="password">Hasło</label>
            <input type="password" name="password" onChange={handlePassword} onKeyDown={handlePassword}></input><br/>
            <button type="submit" onClick={submitCredentials}>ZALOGUJ</button>
            {ErrorInfo}
        </div>
    )
}

export default ExtLoginSite;