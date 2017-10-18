import React from 'react';

export default class PlanetRings extends React.Component{
  render(props){
    return(
      <div className={this.props.className}
      onClick={e=>this.props.handleSiteClick(e)}
      key={this.props.website.id}
      value={this.props.website.url}>
        <div className="ring"
        onClick={e=>this.props.handleSiteClick(e)}
        key={this.props.website.id+9}
        value={this.props.website.url}></div>
        {this.props.website.title}
      </div>
    )
  };
};
