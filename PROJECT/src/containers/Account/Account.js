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

    console.log(ExtSession);

    useEffect(() => {
        if (!ExtSession) {
            History.push('/extlogin');
        } else {
            if (SessionId !== null) {
                console.log(User.accinfo);
                if (!User.acccontrol) {
                    
                    console.log("loading...");
                    Axios.post(ServerPath   + 'UserAccount.php', ExtSession)
                    .then(res => {
                        console.log(res.data);
                        if(res.data.length > 0) {
                            res.data.map((r, index) => {
                                let izipA, izipB, czipA, czipB;
                                if (r.ci_zip !== null) {
                                    izipA = r.ci_zip.substring(0,2);
                                    izipB = r.ci_zip.substring(3,6);
                                    czipA = null;
                                    czipB = null;
                                }
                                if (r.cc_zip !== null) {
                                    czipA = r.cc_zip.substring(0,2)
                                    czipB = r.cc_zip.substring(3,6);
                                    izipA = null;
                                    izipB = null;
                                }
                                setUser((prevState) => ({...prevState, accinfo: {
                                    login: r.u_login,
                                    mail: r.u_mail,
                                    cname: r.cc_name,
                                    ccity: r.cc_city,
                                    cstreet: r.cc_street,
                                    chouse: r.cc_number,
                                    cflat: r.cc_number_flat,
                                    czip: r.cc_zip,
                                    cnip: r.cc_NIP,
                                    cregon: r.cc_REGON,
                                    iname: r.ci_name,
                                    isurname: r.ci_surname,
                                    icity: r.ci_city,
                                    istreet: r.ci_street,
                                    ihouse: r.ci_number,
                                    iflat: r.ci_number_flat,
                                    izip: r.ci_zip,
                                    izip1: izipA,
                                    izip2: izipB,
                                    czip1: czipA,
                                    czip2: czipB
                                },
                                    acccontrol: true
                                }));
                                setFormData((prevState) => ({...prevState,
                                    login: r.u_login, 
                                    mail: r.u_mail,
                                    cname: r.cc_name,
                                    ccity: r.cc_city,
                                    cstreet: r.cc_street,
                                    chouse: r.cc_number,
                                    cflat: r.cc_number_flat,
                                    czip: r.cc_zip,
                                    cnip: r.cc_NIP,
                                    cregon: r.cc_REGON,
                                    iname: r.ci_name,
                                    isurname: r.ci_surname,
                                    icity: r.ci_city,
                                    istreet: r.ci_street,
                                    ihouse: r.ci_number,
                                    iflat: r.ci_number_flat,
                                    izip: r.ci_zip,
                                    izip1: izipA,
                                    izip2: izipB,
                                    czip1: czipA,
                                    czip2: czipB
                                    //zip2: r.ci_zip.substring(3,6)
                                
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
                        login: User.userinfo.login,
                        mail: User.accinfo.mail,
                        cname: User.accinfo.cname,
                        ccity: User.accinfo.ccity,
                        cstreet: User.accinfo.cstreet,
                        chouse: User.accinfo.chouse,
                        cflat: User.accinfo.cflat,
                        czip: User.accinfo.czip,
                        cnip: User.accinfo.cnip,
                        cregon: User.accinfo.cregon,
                        iname: User.accinfo.iname,
                        isurname: User.accinfo.isurname,
                        icity: User.accinfo.icity,
                        istreet: User.accinfo.istreet,
                        ihouse: User.accinfo.ihouse,
                        iflat: User.accinfo.iflat,
                        izip: User.accinfo.izip,
                        izip1: User.accinfo.izip1,
                        izip2: User.accinfo.izip2,
                        czip1: User.accinfo.czip1,
                        czip2: User.accinfo.czip2
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
            case "LOG": setFormData({...FormData, login: event.target.value}); break;
            case "CNM": setFormData({...FormData, cname: event.target.value}); break;
            case "CST": setFormData({...FormData, cstreet: event.target.value}); break;
            case "CCT": setFormData({...FormData, ccity: event.target.value}); break;
            case "CHO": setFormData({...FormData, chouse: event.target.value}); break;
            case "CFL": setFormData({...FormData, cflat: event.target.value}); break;
            //case "CZP": setFormData({...FormData, czip: event.target.value}); break;
            case "CNP": setFormData({...FormData, cnip: event.target.value}); break;
            case "CRG": setFormData({...FormData, cregon: event.target.value}); break;
            case "INM": setFormData({...FormData, iname: event.target.value}); break;
            case "ISN": setFormData({...FormData, isurname: event.target.value}); break;
            case "ICT": setFormData({...FormData, icity: event.target.value}); break;
            case "IST": setFormData({...FormData, istreet: event.target.value}); break;
            case "IHO": setFormData({...FormData, ihouse: event.target.value}); break;
            case "IFL": setFormData({...FormData, iflat: event.target.value}); break;
            case "IZ1": setFormData({...FormData, izip1: event.target.value}); break;
            case "IZ2": setFormData({...FormData, izip2: event.target.value}); break;
            case "CZ1": setFormData({...FormData, czip1: event.target.value}); break;
            case "CZ2": setFormData({...FormData, czip2: event.target.value}); break;
        }

        console.log(FormData);
    }


    const changeAccountData = () => {
        //let errorlist = new Array;
        let valid = 0;
        let info1 = 'BŁĄD: Kod pocztowy powinien zawierać tylko cyfry';
        let info2 = 'BŁĄD: Numer REGON powinien zawierać wyłącznie cyfry';

        if (isNaN(FormData.czip1) || isNaN(FormData.czip2)) {

                setIsError(true);
                setErrorInfo((prevState) => ({...prevState, info1: info1}))
                valid = 1 
        } else {
            setErrorInfo((prevState) => ({...prevState, info1: ""}))
        }

        if (isNaN(FormData.cregon) && FormData.cregon !== null) {
                setIsError(true);
                setErrorInfo((prevState) => ({...prevState, info2: info2}))
                valid = 1;
        } else {
            setErrorInfo((prevState) => ({...prevState, info2: ""}))
        }

        if (valid === 0) {
            let check = 0;
            setIsError(false);
            let izipcode, czipcode;
            if (FormData.izip1 === null) {
                izipcode = null
            } else {
                izipcode = FormData.izip1 + "-" + FormData.izip2;
            }
            if (FormData.czip1 === null) {
                czipcode = null;
            } else {
                czipcode = FormData.czip1 + "-" + FormData.czip2;
            }
            
            //console.log("Userdata: " + User.accinfo.czip + " / FormData: " + czipcode);
            if (User.accinfo.login !== FormData.login) {
                setFormData((prevState) => ({...prevState, mainquery: true}));
                check = 1
            } else {
                setFormData((prevState) => ({...prevState, mainquery: false}));
            }


            if (User.accinfo.cname !== FormData.cname || User.accinfo.cstreet !== FormData.cstreet || 
                User.accinfo.ccity !== FormData.ccity || User.accinfo.chouse !== FormData.chouse ||
                User.accinfo.cflat !== FormData.cflat || User.accinfo.cnip !== FormData.cnip || 
                User.accinfo.cregon !== FormData.cregon || User.accinfo.czip !== czipcode) {
                    setFormData((prevState) => ({...prevState, compquery: true}));
                    check = 1
            } else {
                setFormData((prevState) => ({...prevState, compquery: false}));
            }

            if (User.accinfo.iname !== FormData.iname || User.accinfo.isurname !== FormData.isurname ||
                User.accinfo.istreet !== FormData.istreet || User.accinfo.icity !== FormData.icity || 
                User.accinfo.ihouse !== FormData.ihouse || User.accinfo.iflat !== FormData.iflat || 
                User.accinfo.izip !== izipcode) {
                    check = 1
                    setFormData((prevState) => ({...prevState, privquery: true}));
            } else {
                setFormData((prevState) => ({...prevState, privquery: false}));
            }


            if (check > 0) {
                console.log("SENDING DATA");
                console.log(FormData);
            } else {
                console.log("NOTHING CHANGED");
            }
        }
    }

    if (AccountFound) {
        if (User.accinfo.cname === null) {
            AccountType = "indywidualne";
            fullname = User.accinfo.iname + " " + User.accinfo.isurname;
            address = User.accinfo.istreet + " " + User.accinfo.ihouse + "/" + User.accinfo.iflat;
        } else {
            AccountType = "firmowe";
            fullname = User.accinfo.cname;
            address = User.accinfo.cstreet + " " + User.accinfo.chouse + "/" + User.accinfo.cflat;
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
                    mail={User.accinfo.mail}
                    iname={User.accinfo.iname}
                    isurname={User.accinfo.isurname}
                    address={address}
                    izip={User.accinfo.izip}
                    icity={User.accinfo.icity}
                    cname={User.accinfo.cname}
                    cnip={User.accinfo.cnip}
                    cregon={User.accinfo.cregon}
                    czip={User.accinfo.czip}
                    ccity={User.accinfo.ccity}
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
                    mail={User.accinfo.mail}
                    iname={User.accinfo.iname}
                    isurname={User.accinfo.isurname}
                    istreet={User.accinfo.istreet}
                    ihouse={User.accinfo.ihouse}
                    iflat={User.accinfo.iflat}
                    izip1={User.accinfo.izip1}
                    izip2={User.accinfo.izip2}
                    icity={User.accinfo.icity}
                    cname={User.accinfo.cname}
                    cnip={User.accinfo.cnip}
                    cregon={User.accinfo.cregon}
                    ccity={User.accinfo.ccity}
                    cstreet={User.accinfo.cstreet}
                    chouse={User.accinfo.chouse}
                    cflat={User.accinfo.cflat}
                    czip1={User.accinfo.czip1}
                    czip2={User.accinfo.czip2}
                    changetab={changeTab.bind(this, 2)}
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

    console.log(User);

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