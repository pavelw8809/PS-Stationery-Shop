import React, { useContext, useState } from 'react';
import './UserBtn.scss';
import Login from '../Login/Login';
import AccountMenu from '../AccountMenu/AccountMenu';
import { NavLink, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { ServerPath, UserContext } from '../../containers/App';
import { FaRegUserCircle } from 'react-icons/fa';
import Cookies from 'js-cookie';

const UserBtn = (props) => {

    // LOGIN STATES

    const [User, setUser] = useContext(UserContext);    // User State
    const [LogShow, setLogShow] = useState(false);      // Show loggin button
    const [LoginData, setLoginData] = useState();       // Temporary state for sending login data
    const [ErrorInfo, setErrorInfo] = useState();       // Error container    

    // check content in username field and update LoginData state
    const handleUsername = (event) => {
        if (event.keyCode === 13) {
            handleLogin();
        } else {
            setLoginData({...LoginData, user: event.target.value});
        }
    }

    // check content in password field and update LoginData state
    const handlePassword = (event) => {
        if (event.keyCode === 13) {
            handleLogin();
        } else {
            setLoginData({...LoginData, password: event.target.value});
        }
    }

    // handle login action after subitting user data

    const handleLogin = () => {
        Axios.post(ServerPath + "Login.php", LoginData)
        .then(function(res) {
            //console.log(res.data);
            
            if (res.data.uid) {
                //console.log(res.data);
                setUser({...User, userinfo: res.data, usercontrol: true});
                Cookies.set('pssession', res.data.sessionid);
                setLogShow(false);
                setErrorInfo();
            } else {
                let errordata = (
                    <div className="ErrorInfo">
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
        //let sessionid = Cookies.get('pssession');
        //Axios.post(ServerPath + "Session.php", sessionid)
        //.then(function(res) {
            //console.log(User);
        //    console.log(res.data);
        //})
    }

    // hadle logout action
    const handleLogout = () => {
        let sessionid = Cookies.get('pssession');
        Axios.post(ServerPath + 'Logout.php', sessionid)
        .then(function(res) {
            if (res.data === "success") {
                Cookies.remove('pssession');
                Cookies.remove('psacc');
                setUser({usercontrol: false, userinfo: {}, acccontrol: false, accinfo: {}});
                setLogShow(false);
            }
        })
    }

    // hide account menu
    const hideMenu = () => {
        setLogShow(false);
    }

    // SHOW/HIDE USER BUTTON

    let windowstyle;

    const loginWindow = () => {
        setLogShow(!LogShow);
    }

    if (!LogShow) {
        windowstyle = {
            visibility: 'hidden',
            opacity: 0,
            transitionDuration: '0.5s'
        }
    }

    // DISPLAY ADEQUATE CONTENT ON THE USER BUTTON (User logged-in/logged-out)

    let UserInfoBtn;
    let UserMenu;

    if (!User.userinfo.login) {
        UserInfoBtn = <button className="LogBtn" onClick={loginWindow}>ZALOGUJ</button>
        UserMenu = <Login 
                        username={handleUsername} 
                        password={handlePassword} 
                        login={handleLogin}
                        errorinfo={ErrorInfo} />
    } else {
        UserInfoBtn = <button className="LogBtn AccountBtn" onClick={loginWindow}><FaRegUserCircle size={20} className="UserIcon"/>{User.userinfo.login}</button>
        UserMenu = <AccountMenu logout={handleLogout} hidemenu={hideMenu}/>
    }

    //console.log(User);

    return(
        <div className="UserBtnContainer">
            {UserInfoBtn}
            <div className="LoginW" style={windowstyle}>
                {UserMenu}
            </div>
        </div>
    )

}

export default UserBtn;

/*
            <div className="Login">
                <label htmlFor="login">Nazwa użytkownika:</label>
                <input type="text" onChange={handleUsername} name="login"/>
                <label htmlFor="pass">Hasło:</label>
                <input type="password" onChange={handlePassword} name="pass"/>
                <button className="LoginBtn" onClick={handleLogin}>ZALOGUJ</button>
                <p>Nie masz konta?</p>
                <NavLink to="/regform" className="RegBtnContainer">
                    <button className="RegBtn">ZAREJESTRUJ SIĘ</button>
                </NavLink>
            </div>
*/