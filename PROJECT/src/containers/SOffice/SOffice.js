// SOffice -> ArtCard, ArtDetails

import React, { useEffect, useState } from 'react';
import ArtCard from '../../components/ArtCard/ArtCard';
import { ServerPath } from '../App';
import axios from 'axios';
import TitleBar from '../../components/TitleBar/TitleBar';
import "../../components/ArtCard/ArtCard.scss"

const SOffice = () => {

    // STATES

    const [Products, setProducts] = useState([]);

    // USEEFFECT HOOK - Load articles

    useEffect(() => {
        axios.get(ServerPath + "SOffice.php")
        .then(res => {
            setProducts(res.data);
        })
    }, [])

    // DISPLAY ARTICLE CARDS

    let showCards;

    showCards = (
        <div className="ProdFlexbox">
            {Products.map((r, index) => {
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

    return(
        <div className="MainProductBox">
            <TitleBar title="ARTYKUŁY BIUROWE"/>
            {showCards}
        </div>
    )
}

export default SOffice;