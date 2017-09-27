import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login.js';
import Portfolio from './components/Portfolio.js';
import AddWebsite from './components/AddWebsite.js';

const App = () => (
  <div className="Home-header">
    <Login />
    <div id="React-body">
      <Route exact path="/" component={Portfolio}/>
      <Route path="/addwebsite" component={AddWebsite}/>
    </div>
  </div>
)

export default App;
