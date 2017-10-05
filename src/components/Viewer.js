import React from 'react';

export default class Viewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      viewerURL: this.props.viewerURL,
    };
  };

  render(){
    return(
      <div>
        <iframe
          id="player"
          title={this.state.viewerURL}
          type="text/html"
          width="800"
          height="500"
          src= {this.state.viewerURL}
          frameBorder="10">
        </iframe>
      </div>
    )
  };
};
