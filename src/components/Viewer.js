import React from 'react';
import '../App.css';

export default class Viewer extends React.Component{
  render(props){
    const intVH = window.innerHeight;
    const intVW = window.innerWidth;
    return(
      <div id="iframe">
        <iframe
          id="player"
          title={this.props.viewerURL}
          type="text/html"
          width={intVW * .69}
          height={intVH * .78}
          src= {this.props.viewerURL}
        >
        </iframe>
      </div>
    )
  };
};
