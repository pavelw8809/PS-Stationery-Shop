import React, { useContext } from 'react';
import './Account.scss';
import { UserContext } from '../../containers/App';
import TitleBar from '../../components/TitleBar/TitleBar';

const Account = () => {
    const [User, setUser] = useContext(UserContext);

    return(
        <div className="SiteContainer">
            <TitleBar title="Dane konta"/>

            <p>Imię: {User.name}</p>
            <p>Nazwisko: {User.surname}</p>
        </div>
    )
}

export default Account;