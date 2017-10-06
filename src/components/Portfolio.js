import React, { Component } from 'react';
import '../App.css';
import Orbit from './Orbit.js';
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

  toggleModal=()=>{
    this.setState({
      hideModal: !this.state.hideModal
    });
  };

  componentWillMount() {
    this.fetchPlaces();
  }

  render() {
    return (
      <div className="portfolio">
        <h3>this is some of the neat stuff <a href="https://github.com/senbenito">senbenito</a> has crafted:</h3>
        <Orbit />
        <Modal isOpen={!this.state.hideModal} contentLabel="Modal">
          <Viewer viewerURL={this.state.viewerURL}/>
          <Button onClick={this.toggleModal}/>
        </Modal>
      </div>
    );
  }
};
