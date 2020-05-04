import React, { useEffect, useContext, useState } from 'react';
import './SearchResult.scss';
import ArtCard from '../../components/ArtCard/ArtCard';
import Cookies from 'js-cookie';
import Axios from 'axios';
import { UserContext, ServerPath } from '../App';
import TitleBar from '../../components/TitleBar/TitleBar';

const SearchResult = (props) => {
    const [User, setUser] = useContext(UserContext);
    //const [ReadCookie, setReadCookie] = useState();

    let SearchingCookie = Cookies.get('pssearching');
    let DecodedCookie = decodeURIComponent(SearchingCookie);
    let InfoTxt = "Wyniki wyszukiwania dla frazy: " + DecodedCookie;

    let showCards;

    if (User.searchmemo.length === 0) {
        if (DecodedCookie !== 'undefined') {
            Axios.post(ServerPath + 'Search.php',
            DecodedCookie)
            .then(function (res) {
                setUser({...User, searchmemo: res.data});
            })
            showCards = (
                <div className="ProdFlexbox">
                    {User.searchmemo.map((r, index) => {
                        return(
                            <ArtCard 
                                imagename={r.p_code}
                                prodid = {r.p_id}
                                name = {r.p_name}
                                shortdesc = {r.p_shortdescription}
                                description = {r.p_description}
                                price={r.p_price}
                                key={index}
                            />
                        )
                    })}
                </div>
            )
        } else {
            showCards = <h4>Brak wyników</h4>
        }
    } else {
        showCards = (
            <div className="ProdFlexbox">
                {User.searchmemo.map((r, index) => {
                    return(
                        <ArtCard 
                            imagename={r.p_code}
                            prodid = {r.p_id}
                            name = {r.p_name}
                            shortdesc = {r.p_shortdescription}
                            description = {r.p_description}
                            price={r.p_price}
                            key={index}
                        />
                    )
                })}
            </div>
        )
    }

    return(
        <div>
            <TitleBar title={InfoTxt}/>
            {showCards}
        </div>
    )
}

export default SearchResult;