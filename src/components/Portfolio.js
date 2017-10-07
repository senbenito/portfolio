import React, { Component } from 'react';
import '../App.css';
import Orbit from './Orbit.js';
import Modal from 'react-modal';
import Viewer from './Viewer.js';
import { Button } from 'reactstrap';


export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewerURL: '',
      hideModal: true
    }
  };

  toggleModal=()=>{
    this.setState({
      hideModal: !this.state.hideModal
    });
  };

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
