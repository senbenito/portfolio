import React, { Component } from 'react';
import '../App.css';
import Orbit from './Orbit.js';
import Modal from 'react-modal';
import MBP13 from '../images/MBP13.png';
import SafariWindow from '../images/SafariWindow.png';
import Viewer from './Viewer.js';
import { Button } from 'reactstrap';

//aspect ratios: 1.33:1, 1.77:1,

const modalStyle43 = {
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
    width: '75vw',
    height: '82.45vh',
    maxHeight: '47vw',
    maxWidth: '133vh',
    border: '1px solid black',
    background: `url(${SafariWindow})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
  }
};

const modalStyle169 = {
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
    width: '75vw',
    height: '82.45vh',
    maxHeight: '47vw',
    maxWidth: '121vh',
    border: '1px solid black',
    background: `url(${SafariWindow})`,
    backgroundSize: 'contain',
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
      hideModal: false,
      modalStyle: modalStyle169,
      iframeID: 'iframe169'
    });
  };

  toggleModal = () => {
    this.setState({
      hideModal: !this.state.hideModal
    });
  };

  applyAspectRatio=()=>{
    (this.props.intVW / this.props.intVH > 1.4) ?
      this.setState({
        modalStyle: modalStyle169,
        iframeClass: 'iframe169'
      })
      :
      this.setState({
        modalStyle: modalStyle43,
        iframeID: 'iframe43'
      })
  }

  componentWillMount() {
    this.props.toggleBodyClass('portfolio-body');
    // this.applyAspectRatio();
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
          style={this.state.modalStyle}
        >
          <Button
            onClick = {this.toggleModal}
            id="modalButton"/>
          <Viewer
            viewerURL = {this.state.viewerURL}
            intVH = {this.props.intVH}
            intVW = {this.props.intVW}
            iframeID = {this.state.iframeID}
          />
        </Modal>
      </div>
    )
  };
}
