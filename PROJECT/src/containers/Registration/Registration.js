import React, { useState, useContext, useEffect } from 'react';
import './Registration.scss';
import { useHistory, NavLink } from 'react-router-dom';

const Registration = () => {
    const [error, setError] = React.useState(null);
    const [form, setForm] = React.useState({
    });
    const handleSubmit = async (event) => {
        error.preventDefault()
        console.log('form submitted', form)
    }

    return(
        <div className="RegForm">
            <h1>FORMULARZ REJESTRACYJNY</h1>
                    <p className="RegIndividual">Konto indywidualne</p>
                    <NavLink to="/regindividual" className="RegIndividualBtnContainer">
                <button className="RegIndividualBtn">ZAREJESTRUJ KONTO INDYWIDUALNE</button>
                    </NavLink>
            <hr className="separator"/>
                    <p className="LoginCompany">Konto firmowe</p>
                    <NavLink to="/regcompany" className="RegCompanyBtnContainer">
                <button className="RegCompanyBtn">ZAREJESTRUJ KONTO FIRMOWE</button>
                    </NavLink>
        </div>
    )
} 


export default Registration;