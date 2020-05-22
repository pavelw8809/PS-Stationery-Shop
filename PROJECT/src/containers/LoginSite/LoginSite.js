// LoginSite -> UserBtn, Account - Login site

import React, { useState, useContext } from 'react';
import './LoginSite.scss'
import Axios from 'axios';
import { UserContext, ServerPath } from '../App';
import { useHistory, NavLink } from 'react-router-dom';
import { IoMdLogIn } from "react-icons/io";
import Cookies from 'js-cookie';

const LoginSite = (props) => {

    // STATES

    const [ErrorInfo, setErrorInfo] = useState();
    const [LoginData, setLoginData] = useState();       // Temporary state for sending login data
    const [User, setUser] = useContext(UserContext);

    // USEHISTORY HOOK

    const History = useHistory();

    // SHOW INFORMATION FROM PROPS

    let cartoption;
    let addinfo;
    let infostyle;

    if (typeof(props.location.addProps) !== 'undefined') {
        addinfo = props.location.addProps.addinfo;
        cartoption = true;
    } else {
        infostyle = {display: 'none'};
    }

    // FUNCTIONS

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

    const handleLogin = () => {
        Axios.post(ServerPath + "Login.php", LoginData)
        .then(function(res) {
            if (res.data.uid) {
                setUser({...User, userinfo: res.data, usercontrol: true});
                Cookies.set('pssession', res.data.sessionid);
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