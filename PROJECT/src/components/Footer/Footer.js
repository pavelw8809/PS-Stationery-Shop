import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const footer = (props) => {
    return(
        <div className="footer">
            <div className="contactbox">
                <h3>DANE KONTAKTOWE</h3>
                <div className="fcontact">
                    <h4>Adres</h4>
                    <p>ul. Św. Michała 100<br/>
                    61-005 POZNAŃ</p>
                    <h4>Telefon</h4>
                    <p>tel. +48 61 652 00 00<br/>
                    fax +48 61 654 36 10</p>
                </div>
            </div>
            <div className="locbox">
                <h3>LOKALIZACJA</h3>
                <iframe className="locmap" title="locmap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.333665118701!2d16.966105115803707!3d52.418751679795214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b7b7083fb67%3A0x18dc9444b19f6dac!2sSELCOR!5e0!3m2!1spl!2spl!4v1546602616421" 
                    frameBorder="0"  
                    allowFullScreen="">
                </iframe>
            </div>
            <div className="offerbox">
                <h3>NASZA OFERTA</h3>
                <div className="foffer">
                    <ul>
                        <li>
                            <NavLink to="/about">Firma</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Oferta</NavLink>
                        </li>
                        <li>
                            <NavLink to="/orders">Zamówienia</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Kontakt</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sstationary">Art piśmiennicze</NavLink>
                        </li>
                        <li>
                            <NavLink to="/soffice">Art. biurowe</NavLink>
                        </li>
                        <li>
                            <NavLink to="/senvelopes">Koperty</NavLink>
                        </li>
                        <li>
                            <NavLink to="/spaper">Art. papiernicze</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; Copyright 2020 P&amp;S, Realizacja: B. Czaja, P. Wieczorek</p>
            </div>
        </div>
    )
}

export default footer;