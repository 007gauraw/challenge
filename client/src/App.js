import React from 'react';
import './App.css';

import Landing from './connected/landing-connected/index';
import Details from './connected/details-connected/index';

import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Landing} />
          <Route path="/details" component={Details} />
        </header>
      </div>
    </Router>

  );
}

export default App;
