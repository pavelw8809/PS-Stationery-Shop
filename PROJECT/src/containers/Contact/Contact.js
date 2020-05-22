// Contact -> Body - Static component

import React from 'react';
import TitleBar from '../../components/TitleBar/TitleBar';

const contact = () => {
    return (
        <div className="SiteContainer">
            <TitleBar title="Dane kontaktowe"/>
            <div className="InfoBox">
                <h4>Biuro Obsługi Klienta</h4>
                <p> 
                    darmowa infolinia - 100 707 100 
                <br></br>
                    E-mail:  info@PAPER&SCISORS.pl
                <br></br>
                    poniedziałek-piątek: od 8:00 do 16:00
                </p>
                <h4>Centrala Firmy</h4>
                <p> 
                    PAPER&SCISORS Sp.z o.o.
                <br></br>
                    ul. Św. Michała, 61-005 Poznań
                <br></br>
                    Tel. 11 40 30 222
                <br></br>
                    E-mail:  info@PAPER&SCISORS.com.pl
                </p>
            </div>
        </div>
    )
}
export default contact;