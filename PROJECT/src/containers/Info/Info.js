import React from 'react';
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
            <div className="InfoTitle">
                <IoIosInformationCircleOutline size={70}/>
                <TitleBar className="InfoTitle" title="Informacja"/>
            </div>

            <p>{information}</p>
        </div>
    )
}

export default Info;