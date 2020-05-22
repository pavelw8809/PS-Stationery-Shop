// Orders -> Body - static component

import React from 'react';
import TitleBar from '../../components/TitleBar/TitleBar';

const orders = () => {
    return (
        <div className="SiteContainer">
            <TitleBar title= "Jak skorzystać z naszych usług?"/>
            <div className="InfoBox">
                <p>
                    Aby złożyc zamówienie w naszym sklepie wystarczy, że wykonasz poniższe kroki:
                </p>
                <p><li>wybierzesz produkty, którymi jesteś zainteresowany</li></p>
                <p><li>dodasz do koszyka produkty, które Cię interesuja</li></p>
                <p><li>zalogujesz się do naszej aplikacji</li></p>
                <p><li>złożysz i potwierdzisz zamówienie</li></p>
                <p></p>
                <p>
                    Serdecznie zapraszamy do skorzystania z naszych usług.
                </p>
             </div>
        </div>
    )
}

export default orders;