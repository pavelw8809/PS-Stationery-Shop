/*
    Plik:               App.js
    Funkcja:            GŁÓWNY KOMPONENT APLIKACJI
    Opis:               *** MAIN COMPONENT ***
    Elementy:           Baner aplikacji (Header), 
                        Część główna (Bodystyle) - ROUTING,
                        Footer
    Funkcje:
    Przykład użycia:    N/A
    Dodatkowe info:     Główna strona wyświetlająca cały kontekt aplikacji oraz funkcję odpowiedzialne za zmianę stanu.
*/

import React, {useState} from 'react';
import './App.scss';                                                          // import arkusza dla głównego komponentu
import './Main.scss';                                                         // import arkusza ze zmiennymi głównymi SASS
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';    // import komponentów routingu
import Header from '../components/Header/Header';                             // import komponentu bannera

import Index from './Index/Index';                                            // Strona Główna
import About from './About/About';                                            // O Nas
import Contact from './Contact/Contact';                                      // Kontakt
import Offer from './Offer/Offer';                                            // Oferta
import Orders from './Orders/Orders';                                         // Zamówienia
import ShopService from './ShopService/Services';                             // Usługi
import Notfound from './Notfound/Notfound';                                   // 404 - Not found
import SOffice from './SOffice/SOffice';                                      // Sklep - Art. biurowe
import SPaper from './SPaper/SPaper';                                         // Sklep - Papier
import SEnvelopes from './SEnvelopes/SEnvelopes';                             // Sklep - Koperty
import SPackages from './SPackages/SPackages';                                // Sklep - Materiały opakowaniowe
import SHygienic from './SHygienic/SHygienic';                                // Sklep - Materiały higieniczne
import Cart from './Cart/Cart'                                                // Koszyk

function App() {
  // Wartości początkowe aplikacji
  const [initSum] = useState({
    total: 0.00
  });

  return (
    <div className="App">
      <Router>
            <Header totalprice={initSum.total}/>
            <div className="Bodystyle">
              <Switch>
                  <Route exact path="/" component={Index}/>
                  <Route path="/about" component={About}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/offer" component={Offer}/>
                  <Route path="/orders" component={Orders}/>
                  <Route path="/service" component={ShopService}/>
                  <Route path="/soffice" component={SOffice}/>
                  <Route path="/spaper" component={SPaper}/>
                  <Route path="/senvelopes" component={SEnvelopes}/>
                  <Route path="/spackages" component={SPackages}/>
                  <Route path="/shygienic" component={SHygienic}/>
                  <Route path="/cart" component={Cart}/>
                  <Route component={Notfound}/>
              </Switch>
            </div>
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
                <iframe title="locmap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.333665118701!2d16.966105115803707!3d52.418751679795214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b7b7083fb67%3A0x18dc9444b19f6dac!2sSELCOR!5e0!3m2!1spl!2spl!4v1546602616421" 
                  frameBorder="0"  
                  allowFullScreen="">
                </iframe>
              </div>
            </div>
        </Router>
    </div>
  );

}

export default App;
