// OrderItem -> UserOrders

import React from 'react';
import './OrderItem.scss';

const OrderItem = (props) => {

    let newOrderStyle;

    if (props.status === "NOWE") {
        newOrderStyle = {
            color: 'limegreen'
        }
    }

    return(
        <div className="OrderComponent">
            <p>Numer zamówienia:</p>
            <p>{props.orderno}</p>
            <hr/>
            <p>Status:</p>
            <p style={newOrderStyle}>{props.status}</p>
            <hr/>
            <p>Data:</p>
            <p>{props.date}</p>
            <hr/>
            <p>Kwota:</p>
            <p>{props.sum}</p>
        </div>
    )
}

export default OrderItem;