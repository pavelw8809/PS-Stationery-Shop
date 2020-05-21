import React, { useState, useContext } from 'react';
import './SearchBar.scss';
import { FaSearch } from 'react-icons/fa';   
import Axios from 'axios';
import { ServerPath } from '../../containers/App';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../containers/App';
import Cookies from 'js-cookie';

const SearchBar = () => {

    //const [User, setUser] = useContext(UserContext);
    const [QueryData, setQueryData] = useState([]);

    let history = useHistory();

    const SendQuery = () => {
        //Cookies.set('pssearching', QueryData, { expires: 7 });
        Axios.post(ServerPath + 'Search.php',
        QueryData)
        .then(function (res) {
            //setUser({...User, searchmemo: res.data});
            history.push({
                pathname: '/search',
                searchProps: {searchdata: res.data, searchword: QueryData}
            })
        })
    }

    const sbarEventHandler = (event) => {
        if (event.keyCode === 13) {
            SendQuery();
        } else {
            setQueryData (event.target.value);
        }
    }

    //console.log(QueryResult);

    return (
        <div className="SearchBar">
            <input type="text" placeholder="szukaj" onKeyDown={sbarEventHandler} onChange={sbarEventHandler}></input>
            <button type="submit" onClick={SendQuery}><FaSearch size={20} className="glassicon"/></button>
        </div>
    )
}

export default SearchBar;