import React from 'react';

export default class Planet extends React.Component{
  render(props){
    return(
      <div className={this.props.className}
      onClick={this.props.handleSiteClick}
      key={this.props.website.id}
      value={this.props.website.url}>
        {this.props.website.title}
      </div>
    )
  };
};
