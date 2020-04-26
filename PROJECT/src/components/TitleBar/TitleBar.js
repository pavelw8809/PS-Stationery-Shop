import React, { useState, useEffect } from 'react';
import './TitleBar.scss';

const Titlebar = (props) => {

    const [BarStyle, setBarStyle] = useState({color: 'black'});

    const listenScrollEvent = (event) => {
        if (window.scrollY > 100) {
            setBarStyle({color: 'red'});
        } else {
            setBarStyle({color: 'black'});
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, [])

    let firstLetter = props.title.charAt(0);
    let titleRest = (props.title.substring(1, props.title.length)).toUpperCase();
    console.log(firstLetter);
    console.log(titleRest);
    return(
        <div className="TitleBar">
            <h1 className="FirstLetter" style={BarStyle}>{firstLetter}</h1><h1 className="TitleRest">{titleRest}</h1>

        </div>
    )
}

export default Titlebar;