// RegCompany -> Registration, RegAccMain, RegAccComp, RegAccSumm

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './RegCompany.scss';
import Titlebar from '../../components/TitleBar/TitleBar';
import RegAccMain from '../../components/RegAccMain/RegAccMain';
import RegAccComp from '../../components/RegAccComp/RegAccComp';
import RegAccSumm from '../../components/RegAccSumm/RegAccSumm';
import { FaArrowRight } from 'react-icons/fa';
import Axios from 'axios';
import { ServerPath } from '../App';

const RegCompany = () => {

    // STATES

    const [Error, setError] = useState([]);
    const [Form, setForm] = useState({
        accounttype: 0,
        login: null,
        email: null,
        pass0: null,
        pass1: null,
        cname: null,
        cnip: null,
        cregon: null,
        cstreet: null,
        chouse: null,
        cflat: null,
        czip1: null,
        czip2: null,
        ccity: null
    });
    const [ControlMenu, setControlMenu] = useState({step1: true, step2: false, step3: false});

    // USEHISTORY HOOK

    const History = useHistory();

    // FIELDS LISTENER

    const handleFields = (option, event) => {
        switch(option) {
            case 0: setForm({...Form, login: event.target.value}); break;
            case 1: setForm({...Form, email: event.target.value}); break;
            case 2: setForm({...Form, pass0: event.target.value}); break;
            case 3: setForm({...Form, pass1: event.target.value}); break;
            case 4: setForm({...Form, cname: event.target.value}); break;
            case 5: setForm({...Form, cnip: event.target.value}); break;
            case 6: setForm({...Form, cregon: event.target.value}); break;
            case 7: setForm({...Form, cstreet: event.target.value}); break;
            case 8: setForm({...Form, chouse: event.target.value}); break;
            case 9: setForm({...Form, cflat: event.target.value}); break;
            case 10: setForm({...Form, czip1: event.target.value}); break;
            case 11: setForm({...Form, czip2: event.target.value}); break;
            case 12: setForm({...Form, ccity: event.target.value}); break;
            default: // do nothing
        }
    }

     // ERROR LIST

     let info0 = "Pole Login jest puste";
     let info1 = "Pole E-mail jest puste";
     let info2 = "Pole Hasło jest puste";
     let info3 = "Pole Powtórz hasło jest puste";
     let info4 = "Login musi składać się przynajmniej z 3 liter";
     let info5 = "Błędny format adresu e-mail";
     let info6 = "Hasło powinno składać się przynajmniej z 8 znaków, 1 dużej litery i znaku specjalnego";
     let info7 = "Hasła nie są identyczne";
     let info8 = "Pole Nazwa firmy jest puste";
     let info9 = "Pole Numer NIP jest puste";
     let info10 = "Pole Numer REGON jest puste";
     let info11 = "Pole Ulica jest puste";
     let info12 = "Pole Nr domu jest puste";
     //let info13 = "Pole Kod pocztowy jest puste";
     let info14 = "Kod pocztowy powinien składać się z cyfr - format: 00-000";
     let info15 = "Pole Miejscowość jest puste";
     let info16 = "Numer NIP powinien składać się z 10 cyfr - wzór: 0000000000";
     let info17 = "Numer REGON powinien składać się z 9 cyfr - wzór: 000000000";
     let info20 = "Konto o podanym loginie już istnieje";

     // FUNCTIONS

     const nextSite = (option) => {
        let valid = true;
        let ErrorContent = [];
        let passFormat = new RegExp("^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\\W]).*$");

        switch(option) {
            case 1:
                if(Form.login === null || Form.login === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info0];
                } else if (Form.login.length < 3) {
                    valid = false;
                    ErrorContent = [...ErrorContent, info4];
                }
                if(Form.email === null || Form.email === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info1];
                } else if (!/\S+@\S+\.\S+/.test(Form.email)) {
                    valid = false;
                    ErrorContent = [...ErrorContent, info5];
                }
                if(Form.pass0 === null || Form.pass0 === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info2];
                }
                if(Form.pass1 === null || Form.pass1 === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info3];
                } else if (!passFormat.test(Form.pass1)) {
                    valid = false;
                    ErrorContent = [...ErrorContent, info6];
                } else if (Form.pass0 !== Form.pass1) {
                    valid = false;
                    ErrorContent = [...ErrorContent, info7];
                }

                if (valid === true) {
                    Axios.post(ServerPath + "CheckLogin.php", Form.login)
                    .then(res => {
                        if (res.data > 0) {
                            valid = false;
                            ErrorContent = [...ErrorContent, info20];
                            setError(ErrorContent);
                        } else {
                            setControlMenu({step1: false, step2: true, step3: false})
                        }
                    })
                } else {
                    setError(ErrorContent);
                }
            break;
            case 2:
                if(Form.cname === null || Form.cname === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info8];
                }
                if(Form.cnip === null || Form.cnip === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info9];
                } else if (Form.cnip.length !== 10 || isNaN(Form.cnip)) {
                    valid = false;
                    ErrorContent = [...ErrorContent, info16];
                }
                if(Form.cregon === null || Form.cregon === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info10];
                } else if (Form.cregon.length !== 9 || isNaN(Form.cregon)) {
                    valid = false;
                    ErrorContent = [...ErrorContent, info17];
                }
                if(Form.cstreet === null || Form.cstreet === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info11];
                }
                if(Form.chouse === null || Form.chouse === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info12];
                }
                if( Form.czip1 === null || Form.czip1 === "" || Form.czip2 === null || 
                    Form.czip2 === "" || isNaN(Form.czip1) || isNaN(Form.czip2) ||
                    Form.czip1.length !== 2 || Form.czip2.length !== 3) {
                    valid = false;
                    ErrorContent = [...ErrorContent, info14];
                }
                if(Form.ccity === null || Form.ccity === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info15];
                } 

                setError(ErrorContent)

                if (valid === true) {
                    let czip = Form.czip1 + "-" + Form.czip2;
                    setForm({...Form, czip: czip});
                    setControlMenu({step1: false, step2: false, step3: true})
                }
            break;
            default: //nothing
        }
    }

    const prevSite = (option) => {
        switch(option) {
            case 0: {
                setControlMenu({step1: true, step2: false, step3: false}); break;
            }
            case 1: {
                setControlMenu({step1: false, step2: true, step3: false}); break;
            }
            default: //nothing
        }
    }

    const sendAccData = () => {
        Axios.post(ServerPath + "CreateAccount.php", Form)
            .then(res => {
                if (res.data === "success") {
                    History.push({
                        pathname: '/login',
                        addProps: {
                            cartoption: true,
                            addinfo: "Konto zostało pomyślnie założone. Możesz teraz zalogować się."
                        }
                    })
                } else {
                    ErrorInfo = res.data;
                }
            })
    }

    // DISPLAY FEATURE COMPONENTS

    let RMStyle, RCStyle, RSStyle;
    let s1, s2, s3;

    if (ControlMenu.step1) {
        RMStyle = {display: 'block'}; 
        RCStyle = {display: 'none'};
        RSStyle = {display: 'none'};
        s1 = "RegMilestone StepActive"; s2 = "RegMilestone"; s3 = "RegMilestone"
    }
    if (ControlMenu.step2) {
        RMStyle = {display: 'none'};
        RCStyle = {display: 'block'};
        RSStyle = {display: 'none'};
        s1 = "RegMilestone"; s2 = "RegMilestone StepActive"; s3 = "RegMilestone"
    }
    if (ControlMenu.step3) {
        RMStyle = {display: 'none'};
        RCStyle = {display: 'none'};
        RSStyle = {display: 'block'};
        s1 = "RegMilestone"; s2 = "RegMilestone"; s3 = "RegMilestone StepActive"
    }

    let ErrorInfo;

    if (Error.length > 0) {
        ErrorInfo = (
            Error.map((r, index) => {
                return(
                <p key={index}>{r}</p>
                )
            })
        )
    }

    return(
        <div className="RegAccWindow">
            <div className="RegTitle">
                <Titlebar title="Rejestracja konta firmowego"/>
            </div>
            <div className="RegMilestones">
                <div className={s1}>1</div>
                <FaArrowRight size={30}/>
                <div className={s2}>2</div>
                <FaArrowRight size={30}/>
                <div className={s3}>3</div>
            </div>
            <div className="RegMain" style={RMStyle}>
                <RegAccMain
                    next={nextSite.bind(this, 1)}
                    handlelogin={handleFields.bind(this, 0)}
                    handleemail={handleFields.bind(this, 1)}
                    handlepass0={handleFields.bind(this, 2)}
                    handlepass1={handleFields.bind(this, 3)}
                />
            </div>
            <div className="RegComp" style={RCStyle}>
                <RegAccComp
                    prev={prevSite.bind(this, 0)}
                    next={nextSite.bind(this, 2)}
                    handlename={handleFields.bind(this, 4)}
                    handlenip={handleFields.bind(this, 5)}
                    handleregon={handleFields.bind(this, 6)}
                    handlestreet={handleFields.bind(this, 7)}
                    handlehouse={handleFields.bind(this, 8)}
                    handleflat={handleFields.bind(this, 9)}
                    handlezip1={handleFields.bind(this, 10)}
                    handlezip2={handleFields.bind(this, 11)}
                    handlecity={handleFields.bind(this, 12)}
                />
            </div>
            <div className="RegSumm" style={RSStyle}>
                <RegAccSumm
                    prev={prevSite.bind(this, 1)}
                    sendaccdata={sendAccData}
                    type={Form.accounttype}
                    login={Form.login}
                    email={Form.email}
                    cname={Form.cname}
                    cnip={Form.cnip}
                    cregon={Form.cregon}
                    cstreet={Form.cstreet}
                    chouse={Form.chouse}
                    cflat={Form.cflat}
                    czip1={Form.czip1}
                    czip2={Form.czip2}
                    ccity={Form.ccity}
                />
            </div>
            <div className="RegErrorInfo">{ErrorInfo}</div>
        </div>
    )
}

export default RegCompany;