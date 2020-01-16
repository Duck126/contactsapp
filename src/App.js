import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route } from 'react-router-dom'; 
import NavTabs from './components/NavTabs.js';
import MyContacts from './components/pages/MyContacts.js';
import Create from './components/pages/Create.js';
import Home from './components/pages/Home.js';

import NavBar from './components/NavBar.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="Contacts" component={MyContacts} />
          <Route exact path="Create Contact" component={Create} /> */}

        <NavTabs/>
      </div>
    </Router>
  );
}

export default App;
