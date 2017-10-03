import React from 'react';
import { Jumbotron } from 'reactstrap';

export default class Viewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hideJumbotron: this.props.hideJumbotron
    };
  };
  render(props){
   const Iframe = () => (
    <Jumbotron className="jumbotron">
      <iframe
       id="player"
       title="jumbotron"
       type="text/html"
       width="1200"
       height="400"
       src= {this.props.url}
       frameBorder="10">
      </iframe>
    </Jumbotron>
   )
    return(
       <div>
        {!this.props.hideJumbotron && <Iframe /> }
       </div>
    )
  };
};
