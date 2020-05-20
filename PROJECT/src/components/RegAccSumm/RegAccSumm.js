import React from 'react';
import './RegAccSumm.scss';

const RegAccSumm = (props) => {

    console.log(props.iname);

    let SummaryContent, address;

    if (props.type === 1) {
        if (props.iflat !== null) {
            address = props.ihouse + "/" + props.iflat;
        } else {
            address = props.ihouse;
        }
        SummaryContent = (
            <div className="AccSummDataTile">
                <p><span className="SummTitle">Imię:</span>{props.iname}</p>
                <p><span className="SummTitle">Nazwisko:</span>{props.isurname}</p>
                <p><span className="SummTitle">Adres:</span>{props.istreet} {address}</p>
                <p><span className="SummTitle"></span>{props.izip1}-{props.izip2} {props.icity}</p>
            </div>
        )
    } else {
        if (props.cflat !== null) {
            address = props.chouse + "/" + props.cflat;
        } else {
            address = props.chouse;
        }
        SummaryContent = (
            <div>
                <p><span className="SummTitle">Nazwa firmy:</span>{props.cname}</p>
                <p><span className="SummTitle">REGON:</span>{props.cregon}</p>
                <p><span className="SummTitle">NIP:</span>{props.cnip}</p>
                <p><span className="SummTitle">Adres:</span>{props.cstreet} {address}</p>
                <p><span className="SummTitle"></span>{props.czip1}-{props.czip2} {props.ccity}</p>
            </div>
        )
    }
    return(
        <div className="RegAccSummMain">
            <h3>PODSUMOWANIE</h3>
            <div className="RegAccSumm">
                <div class="AccSummDataTile">
                    <p><span className="SummTitle">Login:</span>{props.login}</p>
                    <p><span className="SummTitle">E-mail:</span>{props.email}</p>
                </div>
                {SummaryContent}
            </div>
            <hr className="Reghr"/>
            <div className="RegNavPanel">
                <button onClick={props.prev}>COFNIJ</button>
                <button onClick={props.next}>ZATWIERDŹ DANE</button>
            </div>
        </div>
    )
}

export default RegAccSumm;