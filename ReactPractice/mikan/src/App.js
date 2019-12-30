import React from 'react';
import logo from './logo.svg';
import Show from './pages/Show'
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <App>
          <Route path="/show" component={Show}></Route>
          <Link to="show">show</Link>
        </App>
      </Router>
    </div>
  );
}

export default App;
