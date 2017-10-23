
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
      bodyClass: "portfolio-body",
    };

  };
  toggleForm=()=>{
    this.setState({hideLogin: !this.state.hideLogin})
  };

  toggleBodyClass=(bodyClass)=>{
    this.setState({bodyClass});
  }

  render(){
    return (
      <div className={this.state.bodyClass}>
         <div id="React-body">
           <PropsRoute exact path="/" component={Portfolio} toggleForm={this.toggleForm}
           toggleBodyClass={this.toggleBodyClass}/>
           <PropsRoute path="/about" component={About} toggleForm={this.toggleForm}
           toggleBodyClass={this.toggleBodyClass}/>
         </div>
         <Login hideLogin={this.state.hideLogin} toggleForm={this.toggleForm}/>
       </div>
     )
   }
};
