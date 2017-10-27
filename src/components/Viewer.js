import React from 'react';
import '../App.css';

export default class Viewer extends React.Component{
  render(props){
    return(
      <div
        id={this.props.iframeID}
        width={this.props.intVW}
        height={this.props.intVH}
      >
      {this.props.iframeID === "iframe169" ?
        <iframe
          id="player169"
          title={this.props.viewerURL}
          type="text/html"
          width={this.props.intVW * .739}
          height={this.props.intVH * .77}
          src= {this.props.viewerURL}
        >
        </iframe>
        :
        <iframe
          id="player43"
          title={this.props.viewerURL}
          type="text/html"
          width={this.props.intVW * .748}
          height={this.props.intVH * .625}
          src= {this.props.viewerURL}
        >
        </iframe>}
      </div>
    )
  };
};
