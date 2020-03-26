import React, {useState} from 'react';
import './App.scss';
import './Main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';

import Index from './Index/Index';
import About from './About/About';
import Catalog from './Catalog/Catalog';
import Contact from './Contact/Contact';
import Offer from './Offer/Offer';
import Orders from './Orders/Orders';
import ShopService from './ShopService/Services';
import Notfound from './Notfound/Notfound';
import SOffice from './SOffice/SOffice';
import SPaper from './SPaper/SPaper';
import SEnvelopes from './SEnvelopes/SEnvelopes';
import SPackages from './SPackages/SPackages';
import SHygienic from './SHygienic/SHygienic';

function App() {

  const [initState] = useState({
    total: 0.00
  });

  return (
    <div className="App">
      <Router>
            <Header totalprice={initState.total}/>
            <div className="Bodystyle">
              <Switch>
                  <Route exact path="/" component={Index}/>
                  <Route path="/about" component={About}/>
                  <Route path="/catalog" component={Catalog}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/offer" component={Offer}/>
                  <Route path="/orders" component={Orders}/>
                  <Route path="/service" component={ShopService}/>
                  <Route path="/soffice" component={SOffice}/>
                  <Route path="/spaper" component={SPaper}/>
                  <Route path="/senvelopes" component={SEnvelopes}/>
                  <Route path="/spackages" component={SPackages}/>
                  <Route path="/shygienic" component={SHygienic}/>
                  <Route component={Notfound}/>
              </Switch>
            </div>
        </Router>
    </div>
  );

}

export default App;
