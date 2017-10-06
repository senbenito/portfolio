import React from 'react';
import Planet from './Planet.js';

export default class Orbit extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      viewerURL: this.props.viewerURL,
    };
  };

  handleSiteClick=(e, passVal)=>{
    this.setState({
      viewerURL: passVal,
      hideModal: false
    });
  };

  makePlanet=(website, index)=>{
    switch (index){
      case 0:
      case 1:
      case 2:
        // let circleClass = `outer-orbit-cirlces${index}`;
        let circleClass = `outer-orbit-cirlces`;
        return (
          <Planet className={circleClass}
          onClick={(e)=>this.handleSiteClick(e, passVal)}
          website={website}/>
        )
      case 4:
      case 5:
      case 6:
        // let circleClass = `middle-orbit-cirlces${index}`;
        let circleClass = `middle-orbit-cirlces`;
        return (
          <Planet className={circleClass}
          onClick={(e)=>this.handleSiteClick(e, passVal)}
          website={website}/>
        )
      case 7:
      case 8:
      case 9:
        // let circleClass = `inner-orbit-cirlces${index}`;
        let circleClass = `inner-orbit-cirlces`;
        return (
          <Planet className={circleClass}
          onClick={(e)=>this.handleSiteClick(e, passVal)}
          website={website}/>
        )
      default:
        break;
    }
  }

  siteListItem=(website, index)=>{
    let passVal = website.url;
    switch (index){
      // case 0:
      // case 1:
      case 2:
        return (
          <div id="outer-orbit" key={website.id}>
            <div className="outer-orbit-cirlces"
            onClick={(e)=>this.handleSiteClick(e, passVal)}
            key={website.id}
            value={website.url}>
              {website.title}
            </div>
          </div>
        )
      case 3:
        let circleClass = `middle-orbit-cirlces${index}`;
        return (
          <div id="middle-orbit" key={website.id}>
            <div className={circleClass}
            onClick={(e)=>this.handleSiteClick(e, passVal)}
            key={website.id}
            value={website.url}>
              {website.title}
            </div>
          </div>
        )
      case 4:
      case 5:
        return (
          <div id="middle-orbit" key={website.id}>
            <div className={circleClass}
            onClick={(e)=>this.handleSiteClick(e, passVal)}
            key={website.id}
            value={website.url}>
              {website.title}
            </div>
          </div>
        )
      // case 6:
      // case 7:
      case 8:
        return (
          <div id="inner-orbit" key={website.id}>
            <div className="inner-orbit-cirlces"
            onClick={(e)=>this.handleSiteClick(e, passVal)}
            key={website.id}
            value={website.url}>
              {website.title}
            </div>
          </div>
        )
      default:
        return (
          <div id="inner-orbit" key={website.id}>
            <div className="inner-orbit-cirlces"
            onClick={(e)=>this.handleSiteClick(e, passVal)}
            key={website.id}
            value={website.url}>
              {website.title}
            </div>
          </div>
        )
    }
  };

  render(){
    return(
      <div id="circle-orbit-container">
        <div id="outer-orbit">
          {this.state.websites.map((website, index) => this.makePlanet(website, index))}
        </div>
        <div id="middle-orbit">
          {this.state.websites.map((website, index) => this.makePlanet(website, index))}
        </div>
        <div id="inner-orbit">
          {this.state.websites.map((website, index) => this.makePlanet(website, index))}
        </div>
      </div>
    )
  };
};
