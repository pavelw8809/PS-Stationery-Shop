import React from 'react';
import "./CartBtn.scss";
import carticon from '../../images/icons/black_cart.png';

const cartbtn = (props) => {
    return(
        <button className="CartBtn">
            <img className="carticon" src={carticon} alt="cart"/>
            {props.total} PLN
        </button>
    )
}

export default cartbtn