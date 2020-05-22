// RegAccComp -> RegCompany - Registration component for companies.

import React from 'react';
import './RegAccComp.scss';

const RegAccComp = (props) => {
    return(
        <div className="RegAccCompMain">
            <div className="RegAccComp">
                <p>DANE FIRMY</p>
                <div className="RegAccCompData">
                    <div>
                        <label htmlFor="cc_name">Nazwa firmy</label>
                        <input type="text" name="cc_name" onChange={props.handlename}></input>
                    </div>
                    <div>
                        <label htmlFor="cc_nip">Numer NIP</label>
                        <input type="text" name="cc_nip" onChange={props.handlenip}></input>
                    </div>
                    <div>
                        <label htmlFor="cc_regon">Numer REGON</label>
                        <input type="text" name="cc_regon" onChange={props.handleregon}></input>
                    </div>
                </div>
                <hr className="Reghr"/>
                <p>DANE ADRESOWE</p>
                <div>
                    <div className="AccRegAddress">
                        <div>
                            <input type="text" name="ci_street" onChange={props.handlestreet}></input><br/>
                            <label className="RegLabel" htmlFor="ci_street">Ulica</label>
                        </div>
                        <div>
                            <input className="RegNumber" name="ci_number" onChange={props.handlehouse}></input>/<br/>
                            <label className="RegLabel" htmlFor="ci_number">Nr domu</label>
                        </div>
                        <div>
                            <input className="RegNumber" name="ci_number_flat" onChange={props.handleflat}></input><br/>
                            <label className="RegLabel" htmlFor="ci_number_flat">Nr mieszkania</label>
                        </div>
                    </div>
                    <div className="AccRegAddress">
                        <div>
                            <input className="RegNumber" onChange={props.handlezip1}></input>-<input className="RegNumber" onChange={props.handlezip2}></input><br/>
                            <label className="RegLabel" htmlFor="ci_zip">Kod pocztowy</label>
                        </div>
                        <div>
                            <input type="text" name="ci_city" onChange={props.handlecity}></input><br/>
                            <label className="RegLabel" htmlFor="ci_city">Miejscowość</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="Reghr"/>
            <div className="RegNavPanel">
                <button onClick={props.prev}>COFNIJ</button>
                <button onClick={props.next}>DALEJ</button>
            </div>
        </div>
    )
}

export default RegAccComp;