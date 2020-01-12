import React from 'react';
import logo from './logo.svg';
import NavTabs from './components/NavTabs.js'
import NavBar from './components/NavBar.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <NavTabs/>
    </div>
  );
}

export default App;
