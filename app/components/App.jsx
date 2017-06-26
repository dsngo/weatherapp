import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';

const App = () =>
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>;

export default App;
