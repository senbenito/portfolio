import React, { Component } from 'react';
import '../App.css';
import Viewer from './Viewer.js';

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      websites:[],
      viewerURL: '',
      hideJumbotron: true
    }
    this.fetchPlaces = this.fetchPlaces.bind(this);
  }

  async fetchPlaces(){
    const response = await fetch('https://senbenito-server.herokuapp.com/sites');
    const websites = await response.json()
    this.setState({
      websites: websites,
      viewerURL: websites[0].url,
    });
  };

  handleSiteClick=(value)=>{
    console.log(value.value);
    this.setState({
      viewerURL: value,
      hideJumbotron: !this.state.hideJumbotron
    });
  };

  componentWillMount() {
    this.fetchPlaces();
  }

  render() {
    return (
      <div className="portfolio">
        <h3>this is some of the neat stuff <a href="https://github.com/senbenito">senbenito</a> has crafted:</h3>
        <ol>
        {this.state.websites.map(website =>
          <li
          onClick={(e)=> this.handleSiteClick(e.target)}
          key={website.id}
          value={website.url}>
            {website.title}
          </li>
        )}
        </ol>
        <Viewer
          url={this.state.viewerURL}
          hideJumbotron={this.state.hideJumbotron}
        />
      </div>
    );
  }
};
