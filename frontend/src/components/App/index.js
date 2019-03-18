import React from 'react';
import Home from '../Home';
import Products from '../Products';
import Clients from '../Clients';
import Contact from '../Contact';
import Error404 from '../Error404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => (
  <Router>
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
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