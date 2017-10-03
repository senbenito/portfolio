import React from 'react';
import Modal from 'react-modal';


export default class Viewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: this.props.url,
      hideModal: true
    };
  };

  render(){
    return(
       <div>
         <Modal isOpen={!this.state.hideModal} contentLabel="Modal">
             <iframe
              id="player"
              title="jumbotron"
              type="text/html"
              width="1200"
              height="400"
              src= {this.state.url}
              frameBorder="10">
             </iframe>
         </Modal>
       </div>
    )
  };
};
