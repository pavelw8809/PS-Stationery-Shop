import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './RegIndividual.scss';
import Titlebar from '../../components/TitleBar/TitleBar';
import RegAccMain from '../../components/RegAccMain/RegAccMain';
import RegAccPers from '../../components/RegAccPers/RegAccPers';
import RegAccSumm from '../../components/RegAccSumm/RegAccSumm';
import { FaArrowRight } from 'react-icons/fa';
import Axios from 'axios';
import { ServerPath } from '../App';

const RegIndividual = (props) => {
    const [Error, setError] = useState([]);
    const [Form, setForm] = useState({
        
        accounttype: 1,
        login: null,
        email: null,
        pass0: null,
        pass1: null,
        iname: null,
        isurname: null,
        istreet: null,
        ihouse: null,
        iflat: null,
        izip1: null,
        izip2: null,
        icity: null
    /*
       accounttype: 1,
       login: 'ldij3455',
       email: 'gtr@gmail.com',
       pass0: null,
       pass1: null,
       iname: 'Janusz',
       isurname: 'Nosacz',
       istreet: 'Cebulowa',
       ihouse: 23,
       iflat: 5,
       izip1: 55,
       izip2: 100,
       icity: 'Trzebnica'
    */
    });

    const [ControlMenu, setControlMenu] = useState({step1: true, step2: false, step3: false});

    const handleFields = (option, event) => {
        switch(option) {
            case 0: {setForm({...Form, login: event.target.value})}; break;
            case 1: {setForm({...Form, email: event.target.value})}; break;
            case 2: {setForm({...Form, pass0: event.target.value})}; break;
            case 3: {setForm({...Form, pass1: event.target.value})}; break;
            case 4: {setForm({...Form, iname: event.target.value})}; break;
            case 5: {setForm({...Form, isurname: event.target.value})}; break;
            case 6: {setForm({...Form, istreet: event.target.value})}; break;
            case 7: {setForm({...Form, ihouse: event.target.value})}; break;
            case 8: {setForm({...Form, iflat: event.target.value})}; break;
            case 9: {setForm({...Form, izip1: event.target.value})}; break;
            case 10: {setForm({...Form, izip2: event.target.value})}; break;
            case 11: {setForm({...Form, icity: event.target.value})}; break;
        }
    }

    // ERRORS

    let info0 = "Pole Login jest puste";
    let info1 = "Pole E-mail jest puste";
    let info2 = "Pole Hasło jest puste";
    let info3 = "Pole Powtórz hasło jest puste";
    let info4 = "Login musi składać się przynajmniej z 3 liter";
    let info5 = "Błędny format adresu e-mail";
    let info6 = "Hasło powinno składać się przynajmniej z 8 znaków, 1 dużej litery i znaku specjalnego";
    let info7 = "Hasła nie są identyczne";
    let info8 = "Pole Imię jest puste";
    let info9 = "Pole Nazwisko jest puste";
    let info10 = "Pole Ulica jest puste";
    let info11 = "Pole Nr domu jest puste";
    let info12 = "Pole kod pocztowy jest puste";
    let info13 = "Pole Miejscowość jest puste";
    let info14 = "Kod pocztowy powinien składać się z cyfr - format: 00-000";
    let info20 = "Konto o podanym loginie już istnieje";

    const nextSite = (option) => {
        let valid = true;
        let ErrorContent = [];
        let passFormat = new RegExp("^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\\W]).*$");

        switch(option) {
            case 1: {
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
                        console.log(res.data);
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
            } break;
            case 2: {
                if(Form.iname === null || Form.iname === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info8];
                }
                if(Form.isurname === null || Form.isurname === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info9];
                }
                if(Form.istreet === null || Form.istreet === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info10];
                }
                if(Form.ihouse === null || Form.ihouse === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info11];
                }
                if(Form.isurname === null || Form.isurname === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info12];
                }
                if( Form.izip1 === null || Form.izip1 === "" || Form.izip2 === null || 
                    Form.izip2 === "" || isNaN(Form.izip1) || isNaN(Form.izip2) ||
                    Form.izip1.length !== 2 || Form.izip2.length !== 3) {
                    valid = false;
                    ErrorContent = [...ErrorContent, info14];
                }
                if(Form.icity === null || Form.icity === "") {
                    valid = false;
                    ErrorContent = [...ErrorContent, info13];
                } 

                setError(ErrorContent)

                if (valid === true) {
                    let izip = Form.izip1 + "-" + Form.izip2;
                    setForm({...Form, izip: izip});
                    setControlMenu({step1: false, step2: false, step3: true})
                }
            }; break;
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
        }
    }

    const History = useHistory();

    const sendAccData = () => {
        Axios.post(ServerPath + "CreateAccount.php", Form)
            .then(res => {
                console.log(res.data);
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

    let RMStyle, RIStyle, RSStyle;
    let s1, s2, s3;
    //let sActive = {backgroundColor: $color2, color: $color3}

    if (ControlMenu.step1) {
        RMStyle = {display: 'block'}; 
        RIStyle = {display: 'none'};
        RSStyle = {display: 'none'};
        s1 = "RegMilestone StepActive"; s2 = "RegMilestone"; s3 = "RegMilestone"
    }
    if (ControlMenu.step2) {
        RMStyle = {display: 'none'};
        RIStyle = {display: 'block'};
        RSStyle = {display: 'none'};
        s1 = "RegMilestone"; s2 = "RegMilestone StepActive"; s3 = "RegMilestone"
    }
    if (ControlMenu.step3) {
        RMStyle = {display: 'none'};
        RIStyle = {display: 'none'};
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

    console.log(Form);

    return(
        
        <div className="RegAccWindow">
            <div className="RegTitle">
                <Titlebar title="Rejestracja konta indywidualnego"/>
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
            <div className="RegInd" style={RIStyle}>
                <RegAccPers
                    prev={prevSite.bind(this, 0)}
                    next={nextSite.bind(this, 2)}
                    handlename={handleFields.bind(this, 4)}
                    handlesurname={handleFields.bind(this, 5)}
                    handlestreet={handleFields.bind(this, 6)}
                    handlehouse={handleFields.bind(this, 7)}
                    handleflat={handleFields.bind(this, 8)}
                    handlezip1={handleFields.bind(this, 9)}
                    handlezip2={handleFields.bind(this, 10)}
                    handlecity={handleFields.bind(this, 11)}
                />
            </div>
            <div className="RegSumm" style={RSStyle}>
                <RegAccSumm
                    prev={prevSite.bind(this, 1)}
                    sendaccdata={sendAccData}
                    type={Form.accounttype}
                    login={Form.login}
                    email={Form.email}
                    iname={Form.iname}
                    isurname={Form.isurname}
                    istreet={Form.istreet}
                    ihouse={Form.ihouse}
                    iflat={Form.iflat}
                    izip1={Form.izip1}
                    izip2={Form.izip2}
                    icity={Form.icity}
                />
            </div>
            <div className="RegErrorInfo">{ErrorInfo}</div>
        </div>
    )
}

export default RegIndividual;