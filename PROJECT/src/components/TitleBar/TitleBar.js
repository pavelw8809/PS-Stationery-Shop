import React, { useState, useEffect } from 'react';
import './TitleBar.scss';

const Titlebar = (props) => {

    let title = props.title.toUpperCase();

    return(
        <div className="TitleBar">
            <h1>{title}</h1>

        </div>
    )
}

export default Titlebar;