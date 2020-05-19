import React from 'react'
import { NavLink } from 'react-router-dom';

const ShowAccountData = (props) => {

    let AccountData;

    if (props.cname === null) {
        AccountData = (
            <div className="AccountInfo">
                <h3>DANE KONTA</h3>
                <div className="AccountMainData">
                    <p>Login: {props.login}</p>
                    <p>E-mail: {props.mail}</p>
                </div>
                <hr className="separator"/>
                <h3>DANE PERSONALNE</h3>
                <div>
                    <p>Imię: {props.iname}</p>
                    <p>Nazwisko: {props.isurname}</p>
                </div>
                <hr className="separator"/>
                <h3>ADRES</h3>
                <div>
                    <p>{props.address}</p>
                    <p>{props.izip} {props.icity}</p>
                </div>
                <hr className="separator"/>
            </div>
        ) 
    }
    else {
        AccountData = (
            <div className="AccountInfo">
                <h3>DANE KONTA</h3>
                <div className="AccountMainData">
                    <p>Login: {props.login}</p>
                    <p>E-mail: {props.mail}</p>
                </div>
                <hr className="separator"/>
                <h3>DANE FIRMY</h3>
                <div>
                    <p>Nazwa firmy: {props.cname}</p>
                    <p>NIP: {props.cnip}</p>
                    <p>REGON: {props.cregon}</p>
                </div>
                <hr className="separator"/>
                <h3>ADRES</h3>
                <div>
                    <p>{props.address}</p>
                    <p>{props.czip} {props.ccity}</p>
                </div>
                <hr className="separator"/>
            </div>
        )
    }

    return (
        <div>
            {AccountData}
            <div className="AccountPanel">
                <button onClick={props.changetabshow}>EDYCJA KONTA</button>
                <NavLink to="/myorders"><button>MOJE ZAMÓWIENIA</button></NavLink>
                <button onClick={props.changetabpass}>ZMIEŃ HASŁO</button>
            </div>
        </div>
    )
}

export default ShowAccountData;