import React, { Component } from 'react';
import '../App.css';
import Orbit from './Orbit.js';
import Modal from 'react-modal';
import {default as Tooltip} from 'react-modal';
import MBP13 from '../images/MBP13.png';
import Viewer from './Viewer.js';
import { ToastContainer, toast } from 'react-toastify';

const tooltipStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 'auto',
    width: 'auto',
    border: 'none',
    background: 'rgba(255,255,255,.2)',
  },
  content: {
    position: 'absolute',
    top: '25vh',
    bottom: 'auto',
    left: '5vw',
    right: '5vh',
    height: '70vh',
    width: '90vw',
    border: 'none',
    overflow: 'hidden',
    background: 'rgba(0,0,0,.7)',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    textAlign: 'center',
  }
};

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: '1.5vw',
    right: 0,
    height: 'auto',
    width: '97vw',
    border: 'none',
    background: `url(${MBP13})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  content: {
    position: 'absolute',
    top: '2vw',
    left: '12vw',
    overflow: 'hidden',
    height: 'auto',
    width: '74vw',
    maxHeight: '48vw',
    maxWidth: '128vh',
    background: 'black',
    border: 'none',
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
      tooltipOpen: false,
      title: '',
      description: '',
    }
  };

  toastId = null;
  notifyYellow=(message)=> {
    if (! toast.isActive(this.toastId)) {
      this.toastId = toast.warn(message, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: false,
        closeOnClick: false,
        className: 'helpful-toast'
      });
    } else {return this.dismissToast()}
  };
  dismissToast = () =>  toast.dismiss();

  handleSiteClick = () => {
      this.setState({
        hideModal: false,
        tooltipOpen: false,
      })
      if (this.state.toastMessage !== '') {
        return this.notifyYellow(this.state.toastMessage);
      } else {
        return this.dismissToast()
      }
  };

  handlePlanetClick = (e, passVal) => {
    (!passVal) ?
      this.setState({tooltipOpen:!this.state.tooltipOpen})
    :
      this.setState({
        viewerURL: passVal.url,
        toastMessage: passVal.toastMessage,
        title: passVal.title,
        description: passVal.description,
        tooltipOpen: !this.state.tooltipOpen,
      })
  };

  toggleModal = () => {
    this.setState({
      hideModal: !this.state.hideModal
    });
    this.dismissToast();
  };

  componentWillMount() {
    this.props.toggleBodyClass('portfolio-body');
  }

  render() {
    return (
      <div className = "portfolio">
        <ToastContainer />
        <Orbit
          handlePlanetClick = {this.handlePlanetClick}
          toggleForm = {this.props.toggleForm}
          toggleBodyClass = {this.props.toggleBodyClass}
        />
        <h3 id="headerText">
          this is some of the neat stuff
          <a href = "https://github.com/senbenito" id="me"> shannon </a>
          has crafted</h3>
        <Tooltip
          isOpen = {this.state.tooltipOpen}
          onRequestClose = {this.handlePlanetClick}
          contentLabel = "Tooltip"
          style = {tooltipStyle}
        >
          <span className="closeX" onClick={this.handlePlanetClick}>
            X
          </span>
          <h2>{this.state.title}</h2>
          <p id="tooltip-description">{this.state.description}</p>
          <button id="tooltip-button" onClick={this.handleSiteClick}>
            try  the  site
          </button>
        </Tooltip>
        <Modal
          isOpen = {!this.state.hideModal}
          onRequestClose = {this.toggleModal}
          contentLabel = "Modal"
          style = {modalStyle}
        >
          <Viewer viewerURL = {this.state.viewerURL}/>
        </Modal>
      </div>
    )
  };
}
