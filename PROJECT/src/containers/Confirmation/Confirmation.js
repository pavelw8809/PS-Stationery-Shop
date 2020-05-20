import React from 'react';
import './Confirmation.scss';
import { IoIosCheckboxOutline } from 'react-icons/io';
import Titlebar from '../../components/TitleBar/TitleBar';
import { NavLink } from 'react-router-dom';

const Confirmation = (props) => {
    return (
        <div class="ConfirmContainer">
            <IoIosCheckboxOutline className="ConfirmIcon" size={70}/>
            <Titlebar title="Informacje o zamówieniu"/>
            <hr className="separator"/>
            <h3>ZAMÓWIENIE NR {props.location.confProps} ZOSTAŁO ZŁOŻONE</h3>
            <p>Aby sfinalizować zamówienie opłać je dokonując przelewu bankowego na konto: </p>
            <p>90 1440 3331 0000 0001 3456 0789<br/>
            Paper&amp;Scissors sp. z o.o.<br/>
            ul. Św. Michała 100<br/>
            61-005 POZNAŃ</p>
            <p>Wpłaty należy dokonać w ciągu 14 dni od dnia zamówienia.</p>
            <hr className="separator"/>
            <NavLink className="ConfirmOrderBtn" to="/"><button>POWRÓT DO STRONY GŁÓWNEJ</button></NavLink>
        </div>
    )
}

export default Confirmation;