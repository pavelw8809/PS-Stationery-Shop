// Login -> UserBtn

import React from 'react';
import './Login.scss';
import { NavLink } from 'react-router-dom';

const Login = (props) => {

    return(
        <div className="Login">
            <label htmlFor="login">Nazwa użytkownika:</label>
            <input type="text" onChange={props.username} name="login"/>
            <label htmlFor="pass">Hasło:</label>
            <input type="password" onChange={props.password} onKeyDown={props.password} name="pass"/>
            <button className="LoginBtn" onClick={props.login}>ZALOGUJ</button>
            <div className="ErrorInfo">{props.errorinfo}</div>
            <p>Nie masz konta?</p>
            <NavLink to="/regform" className="RegBtnContainer">
                <button className="RegBtn" onClick={props.hidemenu}>ZAREJESTRUJ SIĘ</button>
            </NavLink>
        </div>
    )
}

export default Login;
