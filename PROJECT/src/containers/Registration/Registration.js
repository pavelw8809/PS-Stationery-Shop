import React, { useState, useContext, useEffect } from 'react';
import './Registration.scss';
import { useHistory, NavLink } from 'react-router-dom';
import { FaRegUserCircle, FaRegBuilding  } from 'react-icons/fa';

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
                <div className="AccountOption">
                    <NavLink className="IABtn" to="/RegIndividual">
                        <FaRegUserCircle className="RegAccIcon" size={100}/>
                        <div>KONTO<br/>INDYWIDUALNE</div>
                    </NavLink>
                    <NavLink className="CABtn" to="/RegCompany">
                        <FaRegBuilding className="RegAccIcon" size={100}/>
                        KONTO<br/>FIRMOWE
                    </NavLink>
                </div>
        </div>
    )
} 


export default Registration;