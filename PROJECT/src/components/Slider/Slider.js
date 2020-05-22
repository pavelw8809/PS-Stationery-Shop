import React, { useEffect, useState } from 'react';
import './Slider.scss';

const Slider = () => {

    const [SlideNo, setSlideNo] = useState(0);
    
    let boxStyle, boxText;
    let img0 = require('../../images/images/APS.jpg');
    let img1 = require('../../images/images/ABI.jpg');
    let img2 = require('../../images/images/KOP.jpg');
    let img3 = require('../../images/images/APP.jpg');

    const changeSlide = () => {
        setSlideNo(SlideNo + 1);
        if(SlideNo > 2) {
            setSlideNo(0);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide();
        }, 5000);
        return () => clearInterval(interval);
    })

    switch(SlideNo) {
        case 0: {boxStyle = {backgroundImage: "url(" + img0 + ")", transitionDuration: '1s'}; boxText="Artykuły piśmiennicze"}; break;
        case 1: {boxStyle = {backgroundImage: "url(" + img1 + ")", transitionDuration: '1s'}; boxText="Artykuły biurowe"}; break;
        case 2: {boxStyle = {backgroundImage: "url(" + img2 + ")", transitionDuration: '1s'}; boxText="Koperty"}; break;
        case 3: {boxStyle = {backgroundImage: "url(" + img3 + ")", transitionDuration: '1s'}; boxText="Artykuły papiernicze"}; break;
    }

    return(
        <div className="Slider">
            <div className="SlideBox" style={boxStyle}>
                {boxText}
            </div>
        </div>
    )
}

export default Slider;