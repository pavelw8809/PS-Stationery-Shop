// Registration -> Login, RegCompany, RegIndividual

import React from 'react';
import './Registration.scss';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle, FaRegBuilding } from 'react-icons/fa';

const Registration = () => {

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