import React, { Component } from 'react';
import '../App.css';
import Orbit from './Orbit.js';
import Modal from 'react-modal';
import MBP13 from '../images/MBP13.png';
import SafariWindow from '../images/SafariWindow.png';
import Viewer from './Viewer.js';
import { Button } from 'reactstrap';

//aspect ratios: 1.33:1, 1.77:1,

const modalStyle = {
  overlay: {
    position: 'fixed',
    left: '1.5vw',
    height: 'auto',
    width: '97vw',
    background: `url(${MBP13})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  content: {
    position: 'absolute',
    top: '5vh',
    left: '11vw',
    width: '73.5vw',
    height: '82.45vh',
    maxHeight: '56.25vw',
    maxWidth: '133.33vh',
    border: '1px solid black',
    background: `url(${SafariWindow})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
  }
};

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewerURL: '',
      hideModal: true,
    }
  };

  handleSiteClick = (e, passVal) => {
    console.log(passVal);
    this.setState({
      viewerURL: passVal,
      hideModal: false
    });
  };

  toggleModal = () => {
    this.setState({
      hideModal: !this.state.hideModal
    });
  };

  componentWillMount() {
    this.props.toggleBodyClass('portfolio-body');
  }

  render() {
    return (
      <div className = "portfolio">
        <Orbit
          handleSiteClick = {this.handleSiteClick}
          toggleForm = {this.props.toggleForm}
          toggleBodyClass = {this.props.toggleBodyClass}
        />
        <h3>
          this is some of the neat stuff
          <a href="https://github.com/senbenito"> senbenito </a>
          has crafted</h3>
        <Modal
          isOpen = {!this.state.hideModal}
          onRequestClose={this.toggleModal}
          contentLabel = "Modal"
          style={modalStyle}
        >
          <Button
            onClick = {this.toggleModal}
            id="modalButton"/>
          <Viewer viewerURL = {this.state.viewerURL}/>
        </Modal>
      </div>
    )
  };
}
