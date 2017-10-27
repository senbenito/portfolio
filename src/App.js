
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
      intVH: 1068,
      intVW: 803,
    };

  };
  toggleForm=()=>{
    this.setState({hideLogin: !this.state.hideLogin})
  };

  toggleBodyClass=(bodyClass)=>{
    this.setState({bodyClass});
  }

  componentDidMount() {
    const intVH = window.innerHeight;
    const intVW = window.innerWidth;
    this.setState({
      intVH,
      intVW,
    })
  }

  render(){
    return (
      <div className={this.state.bodyClass}>
        <div id="React-body">
          <PropsRoute
            exact path="/"
            component={Portfolio}
            toggleForm={this.toggleForm}
            toggleBodyClass={this.toggleBodyClass}
            intVH = {this.state.intVH}
            intVW = {this.state.intVW}
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
