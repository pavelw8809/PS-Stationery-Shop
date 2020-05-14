import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './AccountEdit.scss';
import { UserContext } from '../App';
import Cookies from 'js-cookie';

const AccountEdit = (props) => {
    const [User, setUser] = useContext(UserContext);
    const [FormData, setFormData] = useState();

    const UserID = Cookies.get('pssession');
    const History = useHistory();

    useEffect(() => {
        if (!UserID) {
            History.push('/login');
        }
    }, [])

    console.log(User);
    let AccountForm;

    if (User.accinfo.cname === null) {
        AccountForm = (
            <div AccountEditForm>
                <h3>DANE KONTA</h3>
                <div className="AccountMainData">
                    <label htmlFor="Login">Login</label>
                    <input type="text"></input>
                    <p>E-mail: {User.accinfo.mail}</p>
                </div>
                <hr className="separator"/>
                <h3>DANE PERSONALNE</h3>
                <div>
                    <label htmlFor="Imię">Login</label>
                    <input type="text"></input>
                    <label htmlFor="Nazwisko">Login</label>
                    <input type="text"></input>
                </div>
                <hr className="separator"/>
                <h3>ADRES</h3>
                <div>
                    <label htmlFor="street">Ulica</label>
                    <input type="text"></input>
                    <label htmlFor="streetno">Nr domu</label>
                    <input type="text"></input>
                    <label htmlFor="flatno">Nr mieszkania</label>
                </div>
            </div>
        )
    } else {
        AccountForm = (
            <div>

            </div>
        )
    }

    return(
        <div className="AccountEdit">
            {AccountForm}
            <button>ZAPISZ ZMIANY</button>
            <button>ODRZUĆ</button>
        </div>
    )
}

export default AccountEdit;

                //<p>Login: {User.userinfo.login}</p>
                //<p>E-mail: {User.accinfo.mail}</p>
                //<p>Imię: {User.accinfo.iname}</p>
                //<p>Nazwisko: {User.accinfo.isurname}</p>
                //<p>{address}</p>
                //<p>{User.accinfo.izip} {User.accinfo.icity}</p>