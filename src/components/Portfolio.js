import React, { Component } from 'react';
import '../App.css';
import Viewer from './Viewer.js';
import { Button } from 'reactstrap';
import Modal from 'react-modal';


export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      websites:[],
      viewerURL: '',
      hideModal: true
    }
    this.fetchPlaces = this.fetchPlaces.bind(this);
  }

  async fetchPlaces(){
    const response = await fetch('https://senbenito-server.herokuapp.com/sites');
    const websites = await response.json()
    this.setState({
      websites: websites,
    });
  };

  handleSiteClick=(e, passVal)=>{
    this.setState({
      viewerURL: passVal,
      hideModal: false
    });
  };

  toggleModal=()=>{
    this.setState({
      hideModal: !this.state.hideModal
    });
  };

  componentWillMount() {
    this.fetchPlaces();
  }

  siteListItem=(website, index)=>{
    let passVal = website.url;
    switch (index){
      // case 0:
      // case 1:
      case 2:
        return (
          <div id="outer-orbit" key={website.id}>
            <div className="outer-orbit-cirlces"
            onClick={(e)=>this.handleSiteClick(e, passVal)}
            key={website.id}
            value={website.url}>
              {website.title}
            </div>
          </div>
        )
      // case 3:
      // case 4:
      case 5:
        return (
          <div id="middle-orbit" key={website.id}>
            <div className="middle-orbit-cirlces"
            onClick={(e)=>this.handleSiteClick(e, passVal)}
            key={website.id}
            value={website.url}>
              {website.title}
            </div>
          </div>
        )
      // case 6:
      // case 7:
      case 8:
        return (
          <div id="inner-orbit" key={website.id}>
            <div className="inner-orbit-cirlces"
            onClick={(e)=>this.handleSiteClick(e, passVal)}
            key={website.id}
            value={website.url}>
              {website.title}
            </div>
          </div>
        )
      default:
        return (
          <div id="inner-orbit" key={website.id}>
            <div className="inner-orbit-cirlces"
            onClick={(e)=>this.handleSiteClick(e, passVal)}
            key={website.id}
            value={website.url}>
              {website.title}
            </div>
          </div>
        )
    }
  }

  render() {
    return (
      <div className="portfolio">
        <h3>this is some of the neat stuff <a href="https://github.com/senbenito">senbenito</a> has crafted:</h3>
        <div id="circle-orbit-container">
          {this.state.websites.map((website, index) => this.siteListItem(website, index))}
        </div>
        <Modal isOpen={!this.state.hideModal} contentLabel="Modal">
          <Viewer viewerURL={this.state.viewerURL}/>
          <Button onClick={this.toggleModal}/>
        </Modal>
      </div>
    );
  }
};
