import React, { Component } from 'react';
import './App.css';
import Website from './components/Website.js';

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      websites:[],
    }
    this.fetchPlaces = this.fetchPlaces.bind(this);
  }

  async fetchPlaces(){
    const response = await fetch('https://senbenito-server.herokuapp.com/sites');
    const websites = await response.json()
    this.setState({
      websites: websites
    });
  }

  componentWillMount() {
    this.fetchPlaces();
  }

  render() {
    return (
      <div className="portfolio">
        <p className="portfolio-intro">
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
};
