import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { ServerPath, UserContext } from '../../containers/App';

const ChangePassword = (props) => {

    const [Pass, setPass] = useState({oldpass: "", newpass0: "", newpass1: ""});
    const [PassError, setErrorPass] = useState();

    const History = useHistory();

    const handlePassword = (option, event) => {
        switch(option) {
            case 0: setPass({...Pass, oldpass: event.target.value}); break;
            case 1: setPass({...Pass, newpass0: event.target.value}); break;
            case 2: setPass({...Pass, newpass1: event.target.value}); break;
        }
    }

    const changePass = () => {
        let sendPass = false;
        let passFormat = new RegExp("^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\\W]).*$");
        let testPass = passFormat.test(Pass.newpass1);
        if (Pass.oldpass.length === 0 || Pass.newpass0.length === 0 || Pass.newpass1.length === 0) {
            setErrorPass("Pola nie mogą być puste");
            sendPass = false;
        } else if (Pass.newpass0 !== Pass.newpass1) {
            setErrorPass("Nowopodane hasła nie brzmią identycznie");
            sendPass = false;
        } else if (Pass.oldpass === Pass.newpass0) {
            setErrorPass("Nowe i stare hasło jest takie samo")
            sendPass = false
        } else if (!testPass) {
            setErrorPass("Hasło musi mieć przynajmniej 8 znaków i składać sie z małych i dużych liter oraz cyfr i znaków specjalnych.");
            sendPass = false;
        } else {
            setErrorPass();
            sendPass = true
        }

        if (sendPass === true) {
            let passData = {...Pass, userid: props.uid};
            console.log(passData);
            Axios.post(ServerPath + "ChangePass.php", passData)
                .then(res => {
                    console.log(res.data);
                    if (res.data === "success") {
                        History.push({
                            pathname: '/info', 
                            infoProp: {info: "Hasło zostało pomyślnie zmienione"}});
                    } else {
                        setErrorPass(res.data);
                    }
                })
        }

        console.log(testPass);
    }

    console.log(Pass);

    return(
        <div className="AccountInfo">
            <div className="PassPanelContainer">
                <div className="PassPanel">
                    <h3>ZMIANA HASŁA</h3>
                    <label htmlFor="oldpass">Stare hasło</label>
                    <input type="password" name="oldpass" onChange={handlePassword.bind(this, 0)}/>
                    <label htmlFor="oldpass">Nowe hasło</label>
                    <input type="password" name="oldpass" onChange={handlePassword.bind(this, 1)}/>
                    <label htmlFor="oldpass">Powtórz nowe hasło</label>
                    <input type="password" name="oldpass" onChange={handlePassword.bind(this, 2)}/>
                </div>
                <hr className="passseparator"/>
            </div>
            <div className="PassError">{PassError}</div>
            <div className="AccountPanel">
                <button onClick={changePass}>ZMIEŃ HASŁO</button>
                <button onClick={props.changetab}>POWRÓT</button>
            </div>
        </div>
    )
}

export default ChangePassword;