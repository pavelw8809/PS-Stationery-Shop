import React, { useState, useContext} from 'react';
import './Login.scss'
import { NavLink } from 'react-router-dom';

const Login = (props) => {
/*
    const [LoginData, setLoginData] = useState({
        userdata: [
            {user: ''},
            {password: ''}
        ]
    });


    const [LoginData, setLoginData] = useState()
    const [User, setUser] = useContext(UserContext)

    const handleUsername = (event) => {
        setLoginData({...LoginData, user: event.target.value});
    }

    const handlePassword = (event) => {
        setLoginData({...LoginData, password: event.target.value});
    }

    let history = useHistory();

    const handleLogin = () => {
        //console.log(LoginData.user + "/" + LoginData.password);
        console.log(LoginData);
        Axios.post(ServerPath + "Login.php", LoginData)
        .then(function(res) {
            console.log(res.data);
            setUser({
               userinfo: {
                   id: res.data.u_id,
                   login: res.data.u_login
               } 
            })
            Cookies.set('psid', res.data.u_id);
            Cookies.set('psname', res.data.u_login);
            //props.LogShow = false;
        })
    }

    )
*/

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
                <button className="RegBtn">ZAREJESTRUJ SIĘ</button>
            </NavLink>
        </div>
    )
}

export default Login;
