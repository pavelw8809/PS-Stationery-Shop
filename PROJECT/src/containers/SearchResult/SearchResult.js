import React from 'react';
import './SearchResult.scss';
import ArtCard from '../../components/ArtCard/ArtCard';
import { UserContext, ServerPath } from '../App';
import TitleBar from '../../components/TitleBar/TitleBar';
import { FaSearch } from 'react-icons/fa';

const SearchResult = (props) => {
    //const [User, setUser] = useContext(UserContext);
    //const [Products, setProducts] = useState();
    //const [ReadCookie, setReadCookie] = useState();

    //let SearchingCookie = Cookies.get('pssearching');
    //let DecodedCookie = decodeURIComponent(SearchingCookie);
    //console.log(props.location.searchProps);

    let showCards, InfoTxt;

    console.log(props.location.searchProps);

    if (typeof(props.location.searchProps) !== 'undefined') {
        InfoTxt = "Wyniki wyszukiwania dla frazy: " + props.location.searchProps.searchword;
        if (props.location.searchProps.searchdata.length > 0) {
            showCards = (
                <div className="ProdFlexbox">
                    {props.location.searchProps.searchdata.map((r, index) => {
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
            showCards = (
                <div className="SearchNoResults">
                    <FaSearch className="SearchIcon" size={70}/>
                    <p>Nie znaleziono żadnych artykułów.</p>
                </div>
            )
        }
    } else {
        InfoTxt = "Wyniki wyszukiwania"
        showCards = (
            <div className="SearchNoResults">
                <FaSearch className="SearchIcon" size={70}/>
                <p>Nie znaleziono żadnych artykułów.</p>
            </div>
        )
    }

    return(
        <div className="SearchResult">
            <TitleBar title={InfoTxt}/>
            {showCards}
        </div>
    )
}

export default SearchResult;