import React from 'react';

export default class Planet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      className: this.props.className,
      website: this.props.website,
      handleSiteClick: this.props.onClick
    };
  };

  // handleSiteClick=(e, passVal)=>{
  //   this.setState({
  //     viewerURL: passVal,
  //     hideModal: false
  //   });
  // };

  render(){
    // let passVal = {this.state.website.url};
    return(
      <div className={this.state.className}
      onClick={(e)=>this.state.handleSiteClick(e)}
      key={this.state.website.id}
      value={this.state.website.url}>
        {this.state.website.title}
      </div>
    )
  };
};