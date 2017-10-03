import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Viewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: this.props.url,
      hideModal: true
    };
  };

  toggle=()=>{
    this.setState({
      modal: !this.state.hideModal
    });
  };

  render(props){
    return(
       <div>
       {this.state.hideModal}
         <Modal isOpen={!this.state.hideModal} toggle={this.toggle} className="modal">
           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
           <ModalBody>
             <iframe
              id="player"
              title="jumbotron"
              type="text/html"
              width="1200"
              height="400"
              src= {this.state.url}
              frameBorder="10">
             </iframe>
           </ModalBody>
           <ModalFooter>
             <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
           </ModalFooter>
         </Modal>
       </div>
    )
  };
};
