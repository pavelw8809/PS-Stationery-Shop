import React from 'react';
import magglass from '../../images/mg.svg';

const magnifier = ({
    style = {},
    className = '',
    fill = '#444',
    width = '20px',
    height = '20px',
    viewBox = '0 0 32 32',
}) => (
    <svg
        width={width} style={style} height={height} viewBox={viewBox} className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        {magglass} fill={fill}
    </svg>
);

export default magnifier; 