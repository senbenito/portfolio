
import React from 'react';
import './App.css';
import { PropsRoute } from 'react-router-with-props';
import Login from './components/Login.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hideLogin: true,
      hideAddSite: true,
    };

  };
  toggleForm=()=>{
    console.log('toggling login');
    // this.setState({hideLogin: !this.state.hideLogin})
  };

  render(){
    return (
      <div>
        <Login
          hideLogin={this.state.hideLogin}
          hideAddSite={this.state.hideAddSite}
        />
         <div id="React-body">
           <PropsRoute exact path="/" component={Portfolio} toggleForm={this.toggleForm}/>
           <PropsRoute path="/about" component={About}/>
         </div>
       </div>
     )
   }
};
