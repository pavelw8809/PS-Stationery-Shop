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
                <div class="AccountOption">
                    <NavLink className="IABtn" to="/RegIndividual">
                        KONTO<br/>INDYWIDUALNE
                    </NavLink>
                    <NavLink className="CABtn" to="/RegCompany">
                        KONTO<br/>FIRMOWE
                    </NavLink>
                </div>
        </div>
    )
} 


export default Registration;