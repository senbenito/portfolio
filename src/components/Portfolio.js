import React, { Component } from 'react';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
      modal: !this.state.hideModal
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
        {this.state.websites.map((website) => this.siteListItem(website))}
        </ul>
          <Modal isOpen={!this.state.hideModal}>
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody>
{this.state.url}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
      </div>
    );
  }
};
