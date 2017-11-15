
import React from 'react';
import './App.css';
import { PropsRoute } from 'react-router-with-props';
import Login from './components/Login.js';
import Resume from './components/Resume.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hideLogin: true,
      hideResume: false,
      bodyClass: "portfolio-body",
    };

  };

  toggleForm=()=>{
    this.setState({hideLogin: !this.state.hideLogin});
    window.scrollTo(0, 0);
  };

  toggleBodyClass=(bodyClass)=>{
    bodyClass === 'portfolio-body' ?
      this.setState({bodyClass, hideResume: false})
    :
      this.setState({bodyClass, hideResume: true});
  }

  render(){
    return (
      <div className={this.state.bodyClass}>
        {!this.state.hideResume && <Resume />}
        <div id="React-body">
          <PropsRoute
            exact path="/"
            component={Portfolio}
            toggleForm={this.toggleForm}
            toggleBodyClass={this.toggleBodyClass}
          />
          <PropsRoute
            path="/about"
            component={About}
            toggleForm={this.toggleForm}
            toggleBodyClass={this.toggleBodyClass}
          />
        </div>
        <Login
          hideLogin={this.state.hideLogin}
          toggleForm={this.toggleForm}
        />
       </div>
     )
   }
};
