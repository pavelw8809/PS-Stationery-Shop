// UserOrders -> AccountMenu, Account

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import Axios from 'axios';
import { ServerPath } from '../App';
import './UserOrders.scss';
import Titlebar from '../../components/TitleBar/TitleBar';
import OrderItem from '../../components/OrderItem/OrderItem';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const UserOrders = () => {

    // STATE

    const [OrderList, setOrderList] = useState([]);

    // USEHISTORY HOOK

    const History = useHistory();

    // DEFINE VARIABLES

    let OrderData;

    // LOAD SESSION TOKEN FROM PSSESSION COOKIE FILE

    let SessionId = Cookies.get('pssession');

    // USEEFFECT HOOK - LOAD ORDERS DATA BASED ON USER TOKEN

    useEffect(() => {
        if (typeof(SessionId) === 'undefined') {
            History.push('/');
        } else {
            Axios.post(ServerPath + 'ShowOrders.php', SessionId)
            .then(res => {
                setOrderList(res.data);
            })
        }
    }, [History, SessionId])

    // DISPLAY CONTENT

    if (OrderList.length > 0) {
        OrderData = (
            <div className="OrderList">
                {OrderList.map((r, index) => {
                    return(
                        <OrderItem 
                            orderno={r.o_number}
                            date={r.o_date}
                            status={r.o_status}
                            sum={r.o_price}
                            key={index}
                        />
                    )
                })}
            </div>
        )
    } else {
        OrderData = (
            <div className="NoOrders">
                <IoIosInformationCircleOutline size={70}/>
                <p>Nie masz jeszcze żadnych zamówień</p>
            </div>
        )
    }

    return(
        <div className="Order">
            <Titlebar title="Historia zamówień"/>
            <div className="OrderContainer">
                {OrderData}
            </div>
        </div>
    )
}

export default UserOrders;