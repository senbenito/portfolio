import React from 'react';

export default class PlanetRings extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      className: this.props.className,
      website: this.props.website,
      handleSiteClick: this.props.onClick
    };
  };

  render(){
    return(
      <div className={this.state.className}
      onClick={(e)=>this.state.handleSiteClick(e)}
      key={this.state.website.id}
      value={this.state.website.url}>
        <div className="ring"
        onClick={(e)=>this.state.handleSiteClick(e)}
        key={this.state.website.id+9}
        value={this.state.website.url}></div>
        {this.state.website.title}
      </div>
    )
  };
};
