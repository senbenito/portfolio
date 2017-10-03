import React, { Component } from 'react';
import '../App.css';
import Viewer from './Viewer.js';

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      websites:[],
      viewerURL: '',
      testSite: {},
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
      testSite: websites[0]
    });
  };

  handleSiteClick=(e, passVal)=>{
    this.setState({
      viewerURL: passVal,
      hideJumbotron: !this.state.hideJumbotron
    });
  };

  componentWillMount() {
    this.fetchPlaces();
  }

  siteListItem=(website)=>{
    let passVal = website.url;
    return (
      <li
      onClick={(e)=>this.handleSiteClick(e, passVal)}
      key={website.id}
      value={website.url}>
      {website.title}
      </li>
    )
  }

  render() {
    return (
      <div className="portfolio">
        <h3>this is some of the neat stuff <a href="https://github.com/senbenito">senbenito</a> has crafted:</h3>
        <ul>
        {this.state.websites.map(
          (website) => this.siteListItem(website))}
        </ul>
        <Viewer
          url={this.state.viewerURL}
          hideJumbotron={this.state.hideJumbotron}
        />
      </div>
    );
  }
};
