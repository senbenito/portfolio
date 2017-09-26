import React, { Component } from 'react';
import './App.css';
import Login from './components/login.js';
import Website from './components/website.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      websites:[
        {id: 8,
        url: 'https://serene-green.herokuapp.com/',
        title:'Serene'},

        {id: 7,
        url: 'http://checkout-vr.surge.sh/',
        title:'Checkout VR'},
      ],
    }
    // this.fetchPlaces = this.fetchPlaces.bind(this);
  }

  // async fetchPlaces(){
  //   const response = await fetch('https://senbenito-server.herokuapp.com/sites');
  //   const websites = await response.json()
  //   this.setState({
  //     websites: websites
  //   });
  // }

  componentWillMount() {
    // this.fetchPlaces();
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Look upon my works ye mighty...</h2>
        </div>

        <Login />

        <p className="App-intro">
        Hey! Check it out... this is some of the neat stuff <a href="https://github.com/senbenito">senbenito</a> has crafted:
        </p>

        {this.state.websites.map(website =>
          <Website
            key={website.id}
            title={website.title}
            url={website.url}
          />
        )}
      </div>
    );
  }
}

export default App;
