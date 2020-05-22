import React, { useState, useEffect } from 'react';
import './CookieInfo.scss';
import { FaCookieBite } from 'react-icons/fa';
import Cookies from 'js-cookie';

const CookieInfo = () => {

    const [IsVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (Cookies.get('pscookie')) {
            setIsVisible(false);
        }
    })

    let infoStyle;

    const hideCookiesInfo = () => {
        setIsVisible(!IsVisible);
        Cookies.set('pscookie', true);
    }

    if (IsVisible) {
        infoStyle = {display: 'block'}
    } else {
        infoStyle = {display: 'none'}
    }

    return(
        <div className="CookiesInfo" style={infoStyle}>
            <div className="CookiesContent">
                <div className="CookieIcon">
                    <FaCookieBite size={70}/>
                </div>
                <div className="CookiesText">
                    <h4>CIASTECZKO?</h4>
                    <p>Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. <br/>Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.</p>
                </div>
                <div className="CookiesAgree">
                    <button className="CookiesBtn" onClick={hideCookiesInfo}>ROZUMIEM</button>
                </div>
            </div>
        </div>
    )
}

export default CookieInfo;