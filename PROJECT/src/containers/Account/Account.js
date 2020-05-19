import React, { useContext, useEffect, useState } from 'react';
import './Account.scss';
import { UserContext, ServerPath } from '../../containers/App';
import { useHistory, NavLink } from 'react-router-dom';
import TitleBar from '../../components/TitleBar/TitleBar';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { FaRegUserCircle } from 'react-icons/fa';
//import AccountPanel from '../../components/AccountPanel/AccountPanel';
import ShowAccountData from '../../components/ShowAccountData/ShowAccountData';
import EditAccountData from '../../components/EditAccountData/EditAccountData';
import ChangePassword from '../../components/ChangePassword/ChangePassword';

const Account = () => {
    const [User, setUser] = useContext(UserContext);
    //const [AccountInfo, setAccountInfo] = useState([]);
    const [AccountFound, setAccountFound] = useState(false);
    const [UserLogged, setUserLogged] = useState(false);
    const [TabDisp, setTabDisp] = useState({accshow: true, accedit: false, accpass: false})
    const [FormData, setFormData] = useState();
    const [IsError, setIsError] = useState(false);
    const [ErrorInfo, setErrorInfo] = useState([]);
    //const [InfoType] = useState(["mail", "cname", "ccity", "cstreet"]);
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
                        userid: User.userinfo.uid,
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
    if (TabDisp.accpass) {
        ACStyle = {display: 'none'};
        EAStyle = {display: 'none'};
        CPStyle = {display: 'block'};
    }
    if (TabDisp.accord) {
        ACStyle = {display: 'none'};
        EAStyle = {display: 'none'};
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
    }

    const addError = (info) => {
        console.log("arg: " + info);
        let checkErr = 0
        if (ErrorInfo.length > 0) {
            ErrorInfo.map((r, index) => {
                console.log(r);
                if (r === info) {
                    checkErr = 1;
                }
                console.log(checkErr);
            })
            if (checkErr === 0) {
                console.log("B: " + info);
                setErrorInfo((prevState) =>[...prevState, info]);
            }
        } else {
            console.log(info);
            setErrorInfo((prevState) =>[...prevState, info]);
        }
    }

    //console.log(ErrorInfo);

    const remError = (info) => {
        
        console.log("Removing: " + info);
        let newErrorList = ErrorInfo.slice();
        newErrorList.map((r, index) => {
            console.log(r + " / " + info);
            if (r === info) {
                console.log("slicing")
                newErrorList.splice(index, 1);
                setErrorInfo(newErrorList);
            }
        });
        
    }

    const changeAccountData = () => {
        //let errorlist = new Array;
        let valid = 0;
        let EmptyFields = false;
        let NotANumber = false;
        let InvalidRegon = false;
        let InvalidNip = false;
        let info1 = 'BŁĄD: Kod pocztowy powinien zawierać tylko cyfry w formacie XX-XXX';
        let info2 = 'BŁĄD: Format nr REGON jest niepoprawny (9 cyfr).';
        let info3 = 'BŁĄD: Format nr NIP jest niepoprawny (10 cyfr).';
        let info8 = 'BŁĄD: Pola nie mogą być puste';
        let isPropEmpty = false;

        if (AccountType === "indywidualne") {
            let propArray = [FormData.login, FormData.iname, FormData.isurname, FormData.istreet, FormData.icity, 
                            FormData.ihouse];


            propArray.map((r, index) => {
                if (r.length === 0) {
                    console.log("isEmpty");
                    //setIsError(true);
                    //addError(info8);
                    isPropEmpty = true;
                    //setErrorInfo((prevState) => ({...prevState, info8}))
                    valid = 1;
                }
            })
            if (isPropEmpty === true) {
                console.log("A");
                EmptyFields = true;
                //addError(info8);
            } else {
                //remError(info8);
            }

            if (isNaN(FormData.izip1) || FormData.izip1 === null || FormData.izip1.length !== 2 ||
                isNaN(FormData.izip2) || FormData.izip2 === null || FormData.izip2.length !== 3) {
                    NotANumber = true;
            }

        } else {
            let propArray = [FormData.login, FormData.cname, FormData.cstreet, FormData.ccity, FormData.chouse];
 
            propArray.map((r, index) => {
                console.log(r);
                if (r.length === 0) {
                    isPropEmpty = true;
                    //setIsError(true);
                    //setErrorInfo((prevState) => ({...prevState, info8}))
                    valid = 1;
                }
            })
            if (isPropEmpty === true) {
                EmptyFields = true;
                //addError(info8);
            } else {
                //remError(info8);
            }

            if (isNaN(FormData.czip1) || FormData.czip1 === null || FormData.czip1.length !== 2 ||
            isNaN(FormData.czip2) || FormData.czip2 === null || FormData.czip2.length !== 3) {
                NotANumber = true;
                valid = 1;
            }

            if (isNaN(FormData.cregon) || FormData.cregon === null || FormData.cregon.length !== 9) {
                InvalidRegon = true;
                valid = 1;
            }

            if (isNaN(FormData.cnip) || FormData.cnip === null || FormData.cnip.length !== 10) {
                InvalidNip = true;
                valid = 1;
            }
        }

        if (EmptyFields) { addError(info8); } else { remError(info8); }
        if (NotANumber) { addError(info1); } else { remError(info1); }
        if (InvalidRegon) { addError(info2); } else { remError(info2); }
        if (InvalidNip) { addError(info3); } else { remError(info3); }

        if (valid === 0) {
            let check = 0;
            let mainquery = false; 
            let compquery = false; 
            let privquery = false;
            //setIsError(false);
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

            if (User.accinfo.login !== FormData.login) {
                mainquery = true;
                check = 1
            } else {
                mainquery = false;
            }

            if (User.accinfo.cname !== FormData.cname || User.accinfo.cstreet !== FormData.cstreet || 
                User.accinfo.ccity !== FormData.ccity || User.accinfo.chouse !== FormData.chouse ||
                User.accinfo.cflat !== FormData.cflat || User.accinfo.cnip !== FormData.cnip || 
                User.accinfo.cregon !== FormData.cregon || User.accinfo.czip !== czipcode) {
                    compquery = true;
                    check = 1
            } else {
                compquery = false;
            }

            if (User.accinfo.iname !== FormData.iname || User.accinfo.isurname !== FormData.isurname ||
                User.accinfo.istreet !== FormData.istreet || User.accinfo.icity !== FormData.icity || 
                User.accinfo.ihouse !== FormData.ihouse || User.accinfo.iflat !== FormData.iflat || 
                User.accinfo.izip !== izipcode) {
                    privquery = true;
                    check = 1
            } else {
                privquery = false;
                //setFormData((prevState) => ({...prevState, privquery: false}));
            }

            let fullFormData = {...FormData, mainquery: mainquery, compquery: compquery, privquery: privquery, izip: izipcode, czip: czipcode};


            if (check > 0) {
                console.log("SENDING DATA");
                let fullAccData = {...fullFormData, userid: User.userinfo.uid};
                console.log(fullAccData);
                Axios.post(ServerPath + "EditAccount.php", fullAccData)
                    .then(res => {
                        console.log(res.data);
                        if (res.data === "success") {
                            setUser((prevState) => ({...prevState,
                                accinfo: fullAccData, userinfo: {uid: fullAccData.userid, login: fullAccData.login}
                            }));
                            changeTab(2);
                        } else {
                            setErrorInfo(res.data);
                        }
                    });
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
                <div className="AccountData">
                    <div className="AccountNameContainer">
                        <div className="AccountName">
                            <FaRegUserCircle size={50}/>
                            <h1>{fullname}</h1>
                        </div>
                        <div className="AccountType">Konto {AccountType}</div>
                    </div>
                    <div style={ACStyle}>
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
                            changetabshow={changeTab.bind(this, 0)}
                            changetabpass={changeTab.bind(this, 1)}
                        />
                    </div>
                    <div style={EAStyle}>
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
                    </div>
                    <div style={CPStyle}>
                    <ChangePassword
                        uid={User.userinfo.uid}
                        changetab={changeTab.bind(this, 2)}
                    />
                    </div>
                </div>
            </div>
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