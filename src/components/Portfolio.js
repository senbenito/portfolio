import React, { Component } from 'react';
import '../App.css';
import Orbit from './Orbit.js';
import Modal from 'react-modal';
import MBP13 from '../images/MBP13.png';
import Viewer from './Viewer.js';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

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

  handleSiteClick = (e, passVal) => {
    this.setState({
      viewerURL: passVal.url,
      toastMessage: passVal.toastMessage,
      hideModal: false,
    });
    if (passVal.toastMessage !== '') {
      return this.notifyYellow(passVal.toastMessage);
    } else {
      return this.dismissToast()
    }
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
          handleSiteClick = {this.handleSiteClick}
          toggleForm = {this.props.toggleForm}
          toggleBodyClass = {this.props.toggleBodyClass}
        />
        <h3>
          this is some of the neat stuff
          <a href = "https://github.com/senbenito"> senbenito </a>
          has crafted</h3>
        <Modal
          isOpen = {!this.state.hideModal}
          onRequestClose = {this.toggleModal}
          contentLabel = "Modal"
          style = {modalStyle}
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
