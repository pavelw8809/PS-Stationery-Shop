import React, { useContext, useEffect, useState } from 'react';
import './Account.scss';
import { UserContext, ServerPath } from '../../containers/App';
import { useHistory } from 'react-router-dom';
import TitleBar from '../../components/TitleBar/TitleBar';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { FaRegUserCircle } from 'react-icons/fa';
import DataRecord from '../../components/DataRecord/DataRecord';

const Account = () => {
    const [User, setUser] = useContext(UserContext);
    const [AccountInfo, setAccountInfo] = useState([]);
    const [AccountFound, setAccountFound] = useState(false);
    const [UserLogged, setUserLogged] = useState(false);
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

    console.log(User.usercontrol);

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
                        if(res.data.length > 0) {
                            //setAccountInfo(res.data);
                            res.data.map((r, index) => {
                                setUser((prevState) => ({...prevState, accinfo: {
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
                                    izip: r.ci_zip
                                },
                                    acccontrol: true
                                }));
                            })
                            //console.log(res.data);
                            setAccountFound(true);
                        }
                    })
                } else {
                    console.log("We still have it");
                    setAccountFound(true);
                }
            }
        }
    }, [])

    let AccountData, AccountType, address, fullname;

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
/*
    console.log(AccountFound);

    let AccountData;

    let AccountType;

    if (AccountFound) {
        AccountInfo.map((r, index) => {
            console.log(r.cc_name);
            if (r.cc_name == null) {
                setUser({...User, userinfo: {
                    AccountType: "indywidualne",
                    login: r.u_login,
                    mail: r.u_mail,
                    name: r.ci_name,
                    surname: r.ci_surname,
                    fullname: r.ci_name + " " + r.ci_surname,
                    street: r.ci_street,
                    streetno: r.ci_number,
                    flatno: r.ci_number_flat,
                    city: r.ci_city,
                    zip: r.ci_zip
                }})

            } else {
                AccountType = "firmowe";
                login = r.u_login;
                mail = r.u_mail;
                name = r.cc_name;
                fullname = r.cc_name;
                street = r.cc_street;
                streetno = r.cc_number;
                flatno = r.cc_number_flat
                city = r.cc_city;
                zip = r.cc_zip;
                nip = r.cc_NIP;
                regon = r.cc_REGON;
            }
            //key = {index};
        })

        if (flatno) {
            address = streetno + "/" + flatno;
        } else {
            address = streetno;
        }
*/
        if (AccountType === "indywidualne") {
            AccountData = (
                <div className="AccountInfo">
                    <h3>DANE KONTA</h3>
                    <div className="AccountMainData">
                        <p>Login: {User.userinfo.login}</p>
                        <p>E-mail: {User.accinfo.mail}</p>
                    </div>
                    <hr className="separator"/>
                    <h3>DANE PERSONALNE</h3>
                    <div>
                        <p>Imię: {User.accinfo.iname}</p>
                        <p>Nazwisko: {User.accinfo.isurname}</p>
                    </div>
                    <hr className="separator"/>
                    <h3>ADRES</h3>
                    <div>
                        <p>{address}</p>
                        <p>{User.accinfo.izip} {User.accinfo.icity}</p>
                    </div>
                    <hr className="separator"/>
                </div>
            )
        }
        if (AccountType === "firmowe") {
            AccountData = (
                AccountData = (
                    <div className="AccountData">
                        <div className="AccountInfo">
                            <h3>DANE KONTA</h3>
                            <div className="AccountMainData">
                                <p>Login: {User.userinfo.login}</p>
                                <p>E-mail: {User.accinfo.mail}</p>
                            </div>
                            <hr className="separator"/>
                            <h3>DANE FIRMY</h3>
                            <div>
                                <p>Nazwa firmy: {User.accinfo.iname}</p>
                                <p>NIP: {User.accinfo.cnip}</p>
                                <p>REGON: {User.accinfo.cregon}</p>
                            </div>
                            <hr className="separator"/>
                            <h3>ADRES</h3>
                            <div>
                                <p>{address}</p>
                                <p>{User.accinfo.izip} {User.accinfo.icity}</p>
                            </div>
                            <hr className="separator"/>
                        </div>
                    </div>
                )
            )
        }

    return(
        <div className="SiteContainer">
            <TitleBar title="Dane konta"/>
            <div className="AccountData">
                <div className="AccountNameContainer">
                    <div className="AccountName">
                            <FaRegUserCircle size={50}/>
                            <h1>{fullname}</h1>
                        </div>
                        <div className="AccountType">Konto {AccountType}</div>
                    </div>
                    {AccountData}
                <div className="AccountPanel">
                    <button>EDYCJA KONTA</button>
                    <button>MOJE ZAMÓWIENIA</button>
                </div>
            </div>
        </div>
    )
}

export default Account;