import React from 'react';
import "./ArtCard.scss";

const artcard = (props) => {

    const Image = require('../../images/images/' + props.imagename + '.png');

    let ProdImgStyle;

    ProdImgStyle = {
        backgroundImage: "url(" + Image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "200px 150px"
    }

    return(
        <div style={ProdImgStyle} className="artCard">
            <div className="ProdName">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
            <p>{props.price}</p>
        </div>
    );
}

export default artcard;

//<img className="ProdImg" src={Image} alt={props.imagename}/>

/*
                <div className="ProgImg" style={ProdImgStyle}>
                    AAA
                </div>
*/