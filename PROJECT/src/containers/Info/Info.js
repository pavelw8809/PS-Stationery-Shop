import React from 'react';
import { NavLink } from 'react-router-dom'
import './Info.scss';
import TitleBar from '../../components/TitleBar/TitleBar';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const Info = (props) => {

    let information;

    if (typeof(props.location.infoProp) === 'undefined') {
        information = "Tutaj wyświetlona zostanie informacja";
    } else {
        information = props.location.infoProp.info;
    }
    return(
        <div className="InfoContainer">
            <div class="InfoWindow">
                <div className="Info">
                    <IoIosInformationCircleOutline size={70}/>
                    <TitleBar className="InfoTitle" title="Informacja"/>
                    <p className="InfoContent">{information}</p>
                    <NavLink className="InfoBtn" to="/"><button>POWRÓT DO STRONY GŁÓWNEJ</button></NavLink>
                </div>
            </div>    
        </div>
    )
}

export default Info;