import React from 'react';

export default class Planet extends React.Component{
  render(props){
    const pointer = {cursor: 'pointer'};
    return(
      <div
        className={this.props.className}
        style={pointer}
        onClick={this.props.handleSiteClick}
        key={this.props.website.id}
        value={this.props.website.url}
      >
        {this.props.website.title}
      </div>
    )
  };
};
