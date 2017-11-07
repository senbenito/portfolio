import React from 'react';

export default class PlanetRings extends React.Component{
  render(props){
    const pointer = {cursor: 'pointer'};
    return(
        <div
        className={this.props.className}
        style={pointer}
        onClick={this.props.handleSiteClick}
        onMouseEnter={this.props.handleHover}
        onMouseLeave={this.props.handleHover}
        key={this.props.website.id}
        value={this.props.website.url}
      >
        <div
          className="ring"
          style={pointer}
          key={this.props.website.id+9}
          value={this.props.website.url}
        />
        {this.props.website.title}
      </div>
    )
  };
};
