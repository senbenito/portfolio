import React from 'react';

export default class PlanetRings extends React.Component{
  render(props){
    const pointer = {cursor: 'pointer'};
    return(
      <div
        className={this.props.className}
        style={pointer}
        onClick={e=>this.props.handleSiteClick(e)}
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
