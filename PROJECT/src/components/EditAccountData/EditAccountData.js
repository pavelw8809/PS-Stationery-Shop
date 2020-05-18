import React, { useState } from 'react'

const EditAccountData = (props) => {

    let AccFormData, errordata;

    console.log(props.errorinfo);

    if (props.errorinfo.length > 0) {
        errordata = (
            <div className="EAErrorInfo">
                {props.errorinfo.map((r, index) => {
                    return(
                        <p key={index}>{r}</p>
                    )
                })}
            </div>
        )
    } else {
        errordata = null;
    }
    
    /*
    if (props.iserror === true) {
        errordata = (
            <div className="EAErrorInfo">
                <p>{props.errorinfo.info1}</p>
                <p>{props.errorinfo.info2}</p>
                <p>{props.errorinfo.info8}</p>
                <p>{props.errorinfo.info9}</p>
            </div>
        )
    }
    */
    

    if (props.cname === null) {
        AccFormData = (
            <div className="AccountInfo">
                <h3>DANE KONTA</h3>
                <div className="AccountMainData">
                    <p><label htmlFor="Login">Login</label>
                    <input type="text" defaultValue={props.login} onChange={props.log}></input></p>
                    <p>E-mail: {props.mail}</p>
                </div>
                <hr className="separator"/>
                <h3>DANE PERSONALNE</h3>
                <div>
                    <p>
                        <label htmlFor="Imię">Imię</label>
                        <input type="text" defaultValue={props.iname} onChange={props.inm}></input>
                    </p>
                    <p>
                        <label htmlFor="Nazwisko">Nazwisko</label>
                        <input type="text" defaultValue={props.isurname} onChange={props.isn}></input>
                    </p>
                </div>
                <hr className="separator"/>
                <h3>ADRES</h3>
                <div className="addressline">
                    <div>
                        <input type="text" name="street" defaultValue={props.istreet} onChange={props.ist}></input><br/>
                        <label htmlFor="street">Ulica</label>
                    </div>
                    <div>
                        <input type="text" name="streetno" defaultValue={props.ihouse} onChange={props.iho}></input><br/>
                        <label htmlFor="streetno">Nr domu</label>
                    </div>
                    <div>
                        <input type="text" name="addressno" className="addressno" defaultValue={props.iflat} onChange={props.ifl}></input><br/>
                        <label htmlFor="streetno">Nr lokalu (pole nieobowiązowe)</label>
                    </div>
                </div>
                <div className="addressline">
                    <div>
                        <input type="text" className="zipcode" defaultValue={props.izip1} onChange={props.iz1}></input> - <input type="text" className="zipcode" defaultValue={props.izip2} onChange={props.iz2}></input><br/>
                        <label htmlFor="zipcode">Kod pocztowy</label>
                    </div>
                    <div>
                        <input type="text" name="city" defaultValue={props.icity} onChange={props.ict}></input><br/>
                        <label htmlFor="city">Miasto</label>
                    </div>
                </div>
                <hr className="separator"/>
            </div>
        )
    }
    else {
        AccFormData = (
            <div className="AccountInfo">
                <h3>DANE KONTA</h3>
                <div className="AccountMainData">
                    <p><label htmlFor="Login">Login</label>
                    <input type="text" defaultValue={props.login} onChange={props.log}></input></p>
                    <p>E-mail: {props.mail}</p>
                </div>
                <hr className="separator"/>
                <h3>DANE FIRMY</h3>
                <div>
                    <p>
                        <label htmlFor="name">Nazwa firmy</label>
                        <input type="text" name="name" defaultValue={props.cname} onChange={props.cnm}></input>
                    </p>
                    <p>
                        <label htmlFor="nip">NIP</label>
                        <input type="text" name="nip" defaultValue={props.cnip} onChange={props.cnp}></input>
                    </p>
                    <p>
                        <label htmlFor="regon">REGON</label>
                        <input type="text" name="regon" defaultValue={props.cregon} onChange={props.crg}></input>
                    </p>
                </div>
                <hr className="separator"/>
                <h3>ADRES</h3>
                <div className="addressline">
                    <div>
                        <input type="text" name="street" defaultValue={props.cstreet} onChange={props.cst}></input><br/>
                        <label htmlFor="street">Ulica</label>
                    </div>
                    <div>
                        <input type="text" name="streetno" defaultValue={props.chouse} onChange={props.cho} className="addressno"></input><br/>
                        <label htmlFor="streetno">Nr domu</label>
                    </div>
                    <div>
                        <input type="text" name="flatno" defaultValue={props.cflat} onChange={props.cfl} className="addressno"></input><br/>
                        <label htmlFor="flatno">Nr lokalu (pole nieobowiązkowe)</label>
                    </div>
                </div>
                <div className="addressline">
                    <div>
                        <input type="text" pattern="[0-9]*" defaultValue={props.czip1} onChange={props.cz1} className="zipcode"></input> - <input type="text" defaultValue={props.czip2} onChange={props.cz2} pattern="[0-9]*" className="zipcode"></input><br/>
                        <label htmlFor="zipcode">Kod pocztowy</label>
                    </div>
                    <div>
                        <input type="text" name="city" defaultValue={props.ccity} onChange={props.cct}></input><br/>
                        <label htmlFor="city">Miasto</label>
                    </div>
                </div>
                <hr className="separator"/>
            </div>
        )
    }

    return (
        <div>
            {AccFormData}
            {errordata}
            <div className="AccountPanel">
                <button onClick={props.submitdatachange}>ZAPISZ ZMIANY</button>
                <button onClick={props.changetab}>POWRÓT</button>
            </div>
        </div>
    )
}

export default EditAccountData;