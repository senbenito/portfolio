import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';


const App = () => (
  <div>
    <Login />
      <div id="React-body">
        <Route exact path="/" component={Portfolio}/>
        <Route path="/about" component={About}/>
      </div>
  </div>
)

export default App;
