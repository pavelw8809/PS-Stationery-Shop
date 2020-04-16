import React from 'react';
import './Login.scss'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return(
        <div className="Login">
            <label htmlFor="login">Nazwa użytkownika:</label>
            <input type="text" name="login"/>
            <label htmlFor="pass">Hasło:</label>
            <input type="password" name="pass"/>
            <button className="LoginBtn">ZALOGUJ</button>
            <p>Nie masz konta?</p>
            <NavLink to="/regform" className="RegBtnContainer">
                <button className="RegBtn">ZAREJESTRUJ SIĘ</button>
            </NavLink>
        </div>
    )
}

export default Login;