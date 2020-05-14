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

import React, {useState, useEffect} from 'react';
import './App.scss';                                                          // import arkusza dla głównego komponentu
import './Main.scss';                                                         // import arkusza ze zmiennymi głównymi SASS
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';    // import komponentów routingu
import Header from '../components/Header/Header';                             // import komponentu bannera                                                          // Import komponentu przycisku koszyka
import '../components/Header/Header.scss';
import Cookies from 'js-cookie';
import Axios from 'axios';

import Index from './Index/Index';                                            // Strona Główna
import About from './About/About';                                            // O Nas
import Contact from './Contact/Contact';                                      // Kontakt
import Offer from './Offer/Offer';                                            // Oferta
import Orders from './Orders/Orders';                                         // Zamówienia
import ShopService from './ShopService/Services';                             // Usługi
import Notfound from './Notfound/Notfound';                                   // 404 - Not found
import SStationary from './SStationary/SStationary';                          // Sklep - Art. piśmiennicze
import SOffice from './SOffice/SOffice';                                      // Sklep - Art. biurowe
import SEnvelopes from './SEnvelopes/SEnvelopes';                             // Sklep - Koperty
import SPaper from './SPaper/SPaper';                                         // Sklep - Art. papiernicze
import SHygienic from './SHygienic/SHygienic';                                // Sklep - Materiały higieniczne
import SCart from './Cart/Cart';                                              // Koszyk
import Registration from './Registration/Registration';                       // Formularz rejestracyjny
import ArtDetails from '../components/ArtDetails/ArtDetails';                 // Karta produktu - szczegóły
import Account from './Account/Account';
import UserOrders from './UserOrders/UserOrders';
import SearchResult from './SearchResult/SearchResult';            
import ExtLoginSite from './ExtLoginSite/ExtLoginSite'; 
import LoginSite from './LoginSite/LoginSite';
import AccountEdit from './AccountEdit/AccountEdit';
import Footer from '../components/Footer/Footer'
import Login from '../components/Login/Login';

export const CartContext = React.createContext();
export const TotalContext = React.createContext();
export const UserContext = React.createContext();
export const ServerPath = "http://localhost:80/WSB_SELCOR/SERVER/";

function App() {

// *** S T A T E S ***
  
  // 1. Cart state
  const [Cart, setCart] = useState([]);

  // 2. Total price state
  
  const total = Cart.reduce((previousState, currentState) => previousState + currentState.prodtotal, 0);
  const [Total, setTotal] = useState({total});

  // 3. User account state

  const [User, setUser] = useState({
    usercontrol: false,
    userinfo: {},
    acccontrol: false,
    accinfo: {}
    //searchmemo: []
  });

  useEffect(() => {
    let SessionId = Cookies.get('pssession');
    let DecodedSessionId = decodeURIComponent(SessionId);
    if (DecodedSessionId !== 'undefined') {
      Axios.post(ServerPath + 'Session.php', SessionId)
        .then(function(res) {
          console.log(res.data);
          setUser((prevState) => ({...prevState, usercontrol: true, userinfo: res.data}));
      })
    } else {

    }
  }, [])

  console.log(User);


  // BACKGROUND IMAGE

  const backgroundImg = require('../images/images/backgroud_main.jpg');

  return (
    <div className="App">
      <img className="BackgroundImg" src={backgroundImg}/>
      <Router>
        <UserContext.Provider value={[User, setUser]}>
        <CartContext.Provider value={[Cart, setCart]}>
        <TotalContext.Provider value={[Total, setTotal]}>
          <div className="AppContainer">
            <Header className="Header" />
            <div className="Bodystyle">
              <Switch>
                  <Route exact path="/" component={Index}/>
                  <Route path="/about" component={About}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/offer" component={Offer}/>
                  <Route path="/orders" component={Orders}/>
                  <Route path="/service" component={ShopService}/>
                  <Route path="/sstationary" component={SStationary}/>
                  <Route path="/soffice" component={SOffice}/>
                  <Route path="/senvelopes" component={SEnvelopes}/>
                  <Route path="/spaper" component={SPaper}/>
                  <Route path="/shygienic" component={SHygienic}/>
                  <Route path="/cart" component={SCart}/>
                  <Route path="/regform" component={Registration}/>
                  <Route path="/artdetails" component={ArtDetails}/>
                  <Route path="/account" component={Account}/>
                  <Route path="/myorders" component={UserOrders}/>
                  <Route path="/search" component={SearchResult}/>
                  <Route path="/extlogin" component={ExtLoginSite}/>
                  <Route path="/login" component={LoginSite}/>
                  <Route path="/accountedit" component={AccountEdit}/>
                  <Route component={Notfound}/>
              </Switch>
            </div>
            <Footer/>
          </div>
        </TotalContext.Provider>
        </CartContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  );

}

export default App;
