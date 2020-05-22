// SearchBar -> Header, SearchResult

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';   
import Axios from 'axios';
import { ServerPath } from '../../containers/App';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {

    // STATES

    const [QueryData, setQueryData] = useState([]);

    // USEHISTORY HOOK

    let history = useHistory();

    // FUNCTIONS

    const SendQuery = () => {
        Axios.post(ServerPath + 'Search.php',
        QueryData)
        .then(function (res) {
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

    return (
        <div className="SearchBar">
            <input type="text" placeholder="szukaj" onKeyDown={sbarEventHandler} onChange={sbarEventHandler}></input>
            <button type="submit" onClick={SendQuery}><FaSearch size={20} className="glassicon"/></button>
        </div>
    )
}

export default SearchBar;