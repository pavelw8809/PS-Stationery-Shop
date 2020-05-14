import React, { useContext, useEffect, useState } from 'react';
import './Account.scss';
import { UserContext, ServerPath } from '../../containers/App';
import { useHistory, NavLink } from 'react-router-dom';
import TitleBar from '../../components/TitleBar/TitleBar';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { FaRegUserCircle } from 'react-icons/fa';
import ShowAccountData from '../../components/ShowAccountData/ShowAccountData';
import EditAccountData from '../../components/EditAccountData/EditAccountData';

const Account = () => {
    const [User, setUser] = useContext(UserContext);
    //const [AccountInfo, setAccountInfo] = useState([]);
    const [AccountFound, setAccountFound] = useState(false);
    const [UserLogged, setUserLogged] = useState(false);
    const [TabDisp, setTabDisp] = useState({accshow: true, accedit: false, accpass: false})
    const [FormData, setFormData] = useState();
    const [IsError, setIsError] = useState(false);
    const [ErrorInfo, setErrorInfo] = useState([]);
    const [InfoType] = useState(["mail", "cname", "ccity", "cstreet"]);
    //let UserId = Cookies.get('psid');
    //let DecodedUserId = decodeURIComponent(UserId);
    let SessionId = Cookies.get('pssession');
    let ExtSession = Cookies.get('psacc');
    //let DecodedUserName = decodeURIComponent(UserName);
    //const [UserData, setUserData] = useState({
    //    id: DecodedUserId,
    //    login: DecodedUserName
    //});
    let History = useHistory();

    console.log(User);

    useEffect(() => {
        if (!ExtSession) {
            History.push('/extlogin');
        } else {
            if (SessionId !== null) {
                //console.log(User.accinfo);
                if (!User.acccontrol) {
                    
                    console.log("loading...");
                    Axios.post(ServerPath   + 'UserAccount.php', ExtSession)
                    .then(res => {
                        console.log(res.data);
                        if(res.data.length > 0) {
                            //setAccountInfo(res.data);
                            
                            res.data.map((r, index) => {
                                let zipA, zipB;
                                if (r.ci_zip !== null) {
                                    zipA = r.ci_zip.substring(0,2);
                                    zipB = r.ci_zip.substring(3,6);
                                }
                                if (r.cc_zip !== null) {
                                    zipA = r.cc_zip.substring(0,2)
                                    zipB = r.cc_zip.substring(3,6);
                                }
                                setUser((prevState) => ({...prevState, accinfo: {
                                    main: {
                                        login: r.u_login,
                                        mail: r.u_mail
                                    },
                                    comp: {
                                        cname: r.cc_name,
                                        ccity: r.cc_city,
                                        cstreet: r.cc_street,
                                        chouse: r.cc_number,
                                        cflat: r.cc_number_flat,
                                        czip: r.cc_zip,
                                        cnip: r.cc_NIP,
                                        cregon: r.cc_REGON,
                                        czip1: zipA,
                                        czip2: zipB
                                    },
                                    priv: {
                                        iname: r.ci_name,
                                        isurname: r.ci_surname,
                                        icity: r.ci_city,
                                        istreet: r.ci_street,
                                        ihouse: r.ci_number,
                                        iflat: r.ci_number_flat,
                                        izip: r.ci_zip,
                                        izip1: zipA,
                                        izip2: zipB,
                                    }
                                },
                                    acccontrol: true
                                }));
                                setFormData((prevState) => ({...prevState, 
                                    main: {
                                        login: r.u_login,
                                        mail: r.u_mail
                                    },
                                    comp: {
                                        cname: r.cc_name,
                                        ccity: r.cc_city,
                                        cstreet: r.cc_street,
                                        chouse: r.cc_number,
                                        cflat: r.cc_number_flat,
                                        czip: r.cc_zip,
                                        cnip: r.cc_NIP,
                                        cregon: r.cc_REGON,
                                        czip1: zipA,
                                        czip2: zipB
                                    },
                                    priv: {
                                        iname: r.ci_name,
                                        isurname: r.ci_surname,
                                        icity: r.ci_city,
                                        istreet: r.ci_street,
                                        ihouse: r.ci_number,
                                        iflat: r.ci_number_flat,
                                        izip: r.ci_zip,
                                        izip1: zipA,
                                        izip2: zipB,
                                    }
                                }));
                            })
                            //console.log(res.data);
                            setAccountFound(true);
                        }
                        
                    })
                } else {
                    console.log("We still have it");
                    setAccountFound(true);
                    setFormData((prevState) => ({...prevState, 
                        main: {
                            login: User.userinfo.login,
                            mail: User.accinfo.main.mail
                        },
                        comp: {
                            cname: User.accinfo.comp.cname,
                            ccity: User.accinfo.comp.ccity,
                            cstreet: User.accinfo.comp.cstreet,
                            chouse: User.accinfo.comp.chouse,
                            cflat: User.accinfo.comp.cflat,
                            czip: User.accinfo.comp.czip,
                            cnip: User.accinfo.comp.cnip,
                            cregon: User.accinfo.comp.cregon,
                            czip1: User.accinfo.comp.czip1,
                            czip2: User.accinfo.comp.czip2
                        },
                        priv: {
                            iname: User.accinfo.priv.iname,
                            isurname: User.accinfo.priv.isurname,
                            icity: User.accinfo.priv.icity,
                            istreet: User.accinfo.priv.istreet,
                            ihouse: User.accinfo.priv.ihouse,
                            iflat: User.accinfo.priv.iflat,
                            izip: User.accinfo.priv.izip,
                            izip1: User.accinfo.priv.izip1,
                            izip2: User.accinfo.priv.izip2,
                        }
                    }));
                }
            }
        }
    }, [])

    let AccountData, AccFormData, AccountType, address, fullname //zip1, zip2;

    let ACStyle, EAStyle, CPStyle;
    //ACStyle = {display: 'block'};
    EAStyle = {display: 'none'};
    CPStyle = {display: 'none'};

    if (TabDisp.accshow) {
        ACStyle = {display: 'block'};
        EAStyle = {display: 'none'};
        CPStyle = {display: 'none'};
    }
    if (TabDisp.accedit) {
        ACStyle = {display: 'none'};
        EAStyle = {display: 'block'};
        CPStyle = {display: 'none'};
    }

    const changeTab = (option) => {
        if (option === 0) {
            setTabDisp({...TabDisp, accshow: false, accedit: true, accpass: false});
        }
        if (option === 1) {
            setTabDisp({...TabDisp, accshow: false, accedit: false, accpass: true});
        }
        if (option === 2) {
            setTabDisp({...TabDisp, accshow: true, accedit: false, accpass: false});
        }
    }

    const handleFormData = (data, event) => {

        switch(data) {
            case "LOG": setFormData({...FormData, main: {login: event.target.value}}); break;
            case "CNM": setFormData({...FormData, comp: {cname: event.target.value}}); break;
            case "CST": setFormData({...FormData, comp: {cstreet: event.target.value}}); break;
            case "CCT": setFormData({...FormData, comp: {ccity: event.target.value}}); break;
            case "CHO": setFormData({...FormData, comp: {chouse: event.target.value}}); break;
            case "CFL": setFormData({...FormData, comp: {cflat: event.target.value}}); break;
            case "CNP": setFormData({...FormData, comp: {cnip: event.target.value}}); break;
            case "CRG": setFormData({...FormData, comp: {cregon: event.target.value}}); break;
            case "CZ1": setFormData({...FormData, comp: {czip1: event.target.value}}); break;
            case "CZ2": setFormData({...FormData, comp: {czip2: event.target.value}}); break;
            case "INM": setFormData({...FormData, priv: {iname: event.target.value}}); break;
            case "ISN": setFormData({...FormData, priv: {isurname: event.target.value}}); break;
            case "ICT": setFormData({...FormData, priv: {icity: event.target.value}}); break;
            case "IST": setFormData({...FormData, priv: {istreet: event.target.value}}); break;
            case "IHO": setFormData({...FormData, priv: {ihouse: event.target.value}}); break;
            case "IFL": setFormData({...FormData, priv: {iflat: event.target.value}}); break;
            case "IZ1": setFormData({...FormData, priv: {izip1: event.target.value}}); break;
            case "IZ2": setFormData({...FormData, priv: {izip2: event.target.value}}); break;
        }

        console.log(FormData);
    }

    const changeAccountData = () => {
        let valid = 0;
        let check = 0;
        let info1 = 'BŁĄD: Kod pocztowy powinien zawierać tylko cyfry';
        let info2 = 'BŁĄD: Numer REGON powinien zawierać wyłącznie cyfry';
        if (isNaN(FormData.priv.izip1) || isNaN(FormData.priv.izip2) || isNaN(FormData.comp.czip1) || isNaN(FormData.comp.czip2)) {
            if (!ErrorInfo.includes(info1)) {
            setErrorInfo([...ErrorInfo, info1]);
            valid++;
            }
        }
        if (isNaN(FormData.comp.cregon) && FormData.comp.cregon !== null) {
            if (!ErrorInfo.includes(info2)) {
            setErrorInfo([...ErrorInfo, info2]);
            valid++;
            }
        }

        if (valid > 0) {
            setIsError(true);
        } else {
            setIsError(false);
            setErrorInfo("");
            let izipcode = FormData.priv.izip1 + "-" + FormData.priv.izip2;
            let czipcode = FormData.comp.czip1 + "-" + FormData.comp.czip2;
            //console.log("Userdata: " + User.accinfo.izip + " / FormData: " + izipcode);
            if (User.userinfo.login !== FormData.main.login) {
                setFormData({...FormData, mainquery: true});
                check++;
            } else {
                setFormData({...FormData, mainquery: false});
                check--;
            }

            if (User.accinfo.comp !== FormData.comp) {
                setFormData({...FormData, compquery: true});
                check++;
            } else {
                setFormData({...FormData, compquery: false});
                check--;
            }

            if (User.accinfo.priv !== FormData.priv) {
                setFormData({...FormData, privquery: true});
                check++;                
            } else {
                setFormData({...FormData, privquery: false})
                check--
            }

            console.log("check: " + check)

            /*
            if (User.accinfo.cname !== FormData.cname || User.accinfo.cstreet !== FormData.cstreet || 
                User.accinfo.ccity !== FormData.ccity || User.accinfo.chouse !== FormData.chouse ||
                User.accinfo.cflat !== FormData.cflat || User.accinfo.cnip !== FormData.cnip || 
                User.accinfo.cregon !== FormData.cregon || User.accinfo.czip !== czipcode) {
                    setFormData({...FormData, compquery: true});
                    check++;
            } else {
                setFormData({...FormData, compquery: false});
                check--;
            }

            if (User.accinfo.iname !== FormData.iname || User.accinfo.isurname !== FormData.isurname ||
                User.accinfo.istreet !== FormData.istreet || User.accinfo.icity !== FormData.icity || 
                User.accinfo.ihouse !== FormData.ihouse || User.accinfo.iflat !== FormData.iflat || 
                User.accinfo.izip !== izipcode) {
                    setFormData({...FormData, privquery: true});
                    check++;
            } else {
                setFormData({...FormData, privquery: false})
                check--
            }
            */
            if (check > 0) {
                console.log("SENDING DATA");
                console.log(FormData);
                /*
                Axios.post(ServerPath + "editaccount.php", FormData)
                .then(res => {
                    console.log(res.data);
                })
                */
            } else {
                console.log("NOTHING CHANGED");
            }

        }
    }

    if (AccountFound) {
        if (User.accinfo.comp.cname === null) {
            AccountType = "indywidualne";
            fullname = User.accinfo.priv.iname + " " + User.accinfo.priv.isurname;
            address = User.accinfo.priv.istreet + " " + User.accinfo.priv.ihouse + "/" + User.accinfo.priv.iflat;
        } else {
            AccountType = "firmowe";
            fullname = User.accinfo.comp.cname;
            address = User.accinfo.comp.cstreet + " " + User.accinfo.comp.chouse + "/" + User.accinfo.comp.cflat;
        }
        AccountData = (
            <div>
            <div className="AccountData" style={ACStyle}>
                <div className="AccountNameContainer">
                    <div className="AccountName">
                        <FaRegUserCircle size={50}/>
                        <h1>{fullname}</h1>
                    </div>
                    <div className="AccountType">Konto {AccountType}</div>
                </div>
                <ShowAccountData
                    login={User.userinfo.login}
                    mail={User.accinfo.main.mail}
                    iname={User.accinfo.priv.iname}
                    isurname={User.accinfo.priv.isurname}
                    address={address}
                    izip={User.accinfo.priv.izip}
                    icity={User.accinfo.priv.icity}
                    cname={User.accinfo.comp.cname}
                    cnip={User.accinfo.comp.cnip}
                    cregon={User.accinfo.comp.cregon}
                    czip={User.accinfo.comp.czip}
                    ccity={User.accinfo.comp.ccity}
                    changetab={changeTab.bind(this, 0)}
                />
            </div>
            <div className="AccountData" style={EAStyle}>
                <div className="AccountNameContainer">
                    <div className="AccountName">
                        <FaRegUserCircle size={50}/>
                        <h1>{fullname}</h1>
                    </div>
                    <div className="AccountType">Konto {AccountType}</div>
                </div>
                <EditAccountData
                    login={User.userinfo.login}
                    mail={User.accinfo.main.mail}
                    iname={User.accinfo.priv.iname}
                    isurname={User.accinfo.priv.isurname}
                    istreet={User.accinfo.priv.istreet}
                    ihouse={User.accinfo.priv.ihouse}
                    iflat={User.accinfo.priv.iflat}
                    izip1={User.accinfo.priv.izip1}
                    izip2={User.accinfo.priv.izip2}
                    icity={User.accinfo.priv.icity}
                    cname={User.accinfo.comp.cname}
                    cnip={User.accinfo.comp.cnip}
                    cregon={User.accinfo.comp.cregon}
                    ccity={User.accinfo.comp.ccity}
                    cstreet={User.accinfo.comp.cstreet}
                    chouse={User.accinfo.comp.chouse}
                    cflat={User.accinfo.comp.cflat}
                    czip1={User.accinfo.comp.czip1}
                    czip2={User.accinfo.comp.czip2}
                    changetab={changeTab}
                    submitdatachange={changeAccountData}
                    iserror={IsError}
                    errorinfo={ErrorInfo}
                    log={handleFormData.bind(this, "LOG")}
                    cnm={handleFormData.bind(this, "CNM")}                  
                    cst={handleFormData.bind(this, "CST")}
                    cct={handleFormData.bind(this, "CCT")}
                    cho={handleFormData.bind(this, "CHO")}
                    cfl={handleFormData.bind(this, "CFL")}
                    czp={handleFormData.bind(this, "CZP")}
                    cnp={handleFormData.bind(this, "CNP")}
                    crg={handleFormData.bind(this, "CRG")}
                    inm={handleFormData.bind(this, "INM")}
                    isn={handleFormData.bind(this, "ISN")}
                    ict={handleFormData.bind(this, "ICT")}
                    ist={handleFormData.bind(this, "IST")}
                    iho={handleFormData.bind(this, "IHO")}
                    ifl={handleFormData.bind(this, "IFL")}
                    iz1={handleFormData.bind(this, "IZ1")}
                    iz2={handleFormData.bind(this, "IZ2")}
                    cz1={handleFormData.bind(this, "CZ1")}
                    cz2={handleFormData.bind(this, "CZ2")}
                />
            </div></div>
        )
    } else if (!UserLogged) {
        AccountData = (
            <div>
                Nie wykryto zalogowanego usera.
            </div>
        )
    } else {
        AccountData = (
            <div>
                Brak danych
            </div>
        )
    }

    console.log(FormData);

    return(
        <div className="SiteContainer">
            <TitleBar title="Konto użytkownika"/>
            {AccountData}
        </div>
    )
}

export default Account;

//<NavLink to="/accountedit"><button>EDYCJA KONTA</button></NavLink>
//<NavLink to="/myorders"><button>MOJE ZAMÓWIENIA</button></NavLink>
//<NavLink to="/myorders"><button>ZMIEŃ HASŁO</button></NavLink>