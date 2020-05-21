import React, { useState } from 'react';
import { ServerPath } from '../../containers/App';
import './RemoveAccount.scss';
import '../../containers/Account/Account.scss';
import Axios from 'axios';

const RemoveAccount = (props) => {

    const [RemOption, setRemOption] = useState(false);
    const [RemError, setRemError] = useState();

    let rembtnstyle;
    let remchecked = {
        backgroundColor: 'maroon'
    }

    const removeAcc = () => {
        if (!RemOption) {
            setRemError("Aby usunąć konto musisz zaznaczyć checkbox.");
        } else {
            Axios.post(ServerPath + "RemoveAccount.php", props.uid)
                .then(res => {
                    console.log(res.data);
                });
            console.log(props.uid);
        }
    }

    const remStatus= () => {
        setRemOption(!RemOption);
    }

    if (RemOption) {
        rembtnstyle = remchecked;
    } else {
        rembtnstyle = null;
    }

    return(
        <div className="RemAccount">
            <div className="RemConfirmBox">
                <button className="RemConfirm" style={rembtnstyle} onClick={remStatus}></button><span>Niniejszym oświadczam, że chce usunąć moje konto.</span>
            </div>
            <div className="RemError">{RemError}</div>
            <hr className="remseparator"/>
            <div className="AccountPanel">
                <button className="AccountPanelBtn" onClick={props.changetab}>POWRÓT</button>
                <button className="AccountPanelBtn AccRemBtn" onClick={removeAcc}>USUŃ KONTO</button>
            </div>
        </div>
    )
}

export default RemoveAccount;