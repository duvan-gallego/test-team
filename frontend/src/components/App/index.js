import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import NavBar
import Appnavbar from '../AppNavbar';

// Import pages
import Home from '../Home';
import Products from '../Products';
import Clients from '../Clients';
import Contact from '../Contact';
import Error404 from '../Error404';

const App = () => (
  <Router>
    <Appnavbar />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/404" component={Error404} />
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
);

export default App;