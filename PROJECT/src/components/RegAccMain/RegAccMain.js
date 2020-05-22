// RegAccMain -> RegCompany, RegIndividual - Register component for company and individual clients - Main user data

import React from 'react';
import './RegAccMain.scss';
import { NavLink } from 'react-router-dom';

const RegAccMain = (props) => {

    return(
        <div className="RegAccMain">
            <div className="RegAccMainForm">
                <h3>DANE KONTA</h3>
                <label htmlFor="u_login">Login</label>
                <input type="text" onChange={props.handlelogin}></input>
                <label htmlFor="u_mail">E-mail</label>
                <input type="text" onChange={props.handleemail}></input>
                <label htmlFor="u_password">Hasło</label>
                <input type="password" onChange={props.handlepass0}></input>
                <label htmlFor="u_passwordAgain">Powtórz hasło</label>
                <input type="password" onChange={props.handlepass1}></input>
                <div className="RegNavPanel">
                    <NavLink to="/regform"><button>COFNIJ</button></NavLink>
                    <button onClick={props.next}>DALEJ</button>
                </div>
            </div>
        </div>
    )
}

export default RegAccMain;