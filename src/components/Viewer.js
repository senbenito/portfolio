import React from 'react';
import '../App.css';

export default class Viewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      viewerURL: this.props.viewerURL,
    };
  };

  render(){
    const intVH = window.innerHeight;
    const intVW = window.innerWidth;

    return(
      <div
        id="iframe"
        width={intVW * .732}
        height={intVH  * .8}
      >
        <iframe
          id="player"
          title={this.state.viewerURL}
          type="text/html"
          width={intVW * .732}
          height={intVH * .75}
          src= {this.state.viewerURL}
        >
        </iframe>
      </div>
    )
  };
};
