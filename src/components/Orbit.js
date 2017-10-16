import React from 'react';
import Planet from './Planet.js';

export default class Orbit extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      viewerURL: this.props.viewerURL,
      websites: [
        {id:0, url: 'abc', title: 'ABC'},
        {id:1, url: 'abc', title: 'ABC'},
        {id:2, url: 'abc', title: 'ABC'},
        {id:3, url: 'abc', title: 'ABC'},
        {id:4, url: 'abc', title: 'ABC'},
        {id:5, url: 'abc', title: 'ABC'},
        {id:6, url: 'abc', title: 'ABC'},
        {id:7, url: 'abc', title: 'ABC'},
        {id:8, url: 'abc', title: 'ABC'},
        {id:9, url: 'abc', title: 'ABC'},
        {id:10, url: 'abc', title: 'ABC'},
        {id:11, url: 'abc', title: 'ABC'},
        {id:12, url: 'abc', title: 'ABC'},
        {id:13, url: 'abc', title: 'ABC'},
        {id:14, url: 'abc', title: 'ABC'},

      ],
    };
    this.fetchPlaces = this.fetchPlaces.bind(this);
  }

  async fetchPlaces(){
    const response = await fetch('https://senbenito-server.herokuapp.com/sites');
    const websites = await response.json()
    this.setState({
      websites: websites,
    });
  };

  componentWillMount() {
    // this.fetchPlaces();
  };

  makePlanet=(website, index, orbit)=>{
    let passVal = website.url;
    let planetClass = `${orbit}-orbit-planet${index}`;
    return (
      <Planet key={index}
      className={planetClass}
      onClick={(e)=>this.props.handleSiteClick(e, passVal)}
      website={website}/>
    )
  };

  render(){
    return(
      <div id="circle-orbit-container">
        <div id="fifth-orbit">
          {this.state.websites.slice(0,3).map((website, index)=> this.makePlanet(website, index, 'fifth'))}
        </div>
        <div id="fourth-orbit">
          {this.state.websites.slice(3,6).map((website, index)=> this.makePlanet(website, index, 'fourth'))}
        </div>
        <div id="third-orbit">
          {this.state.websites.slice(6,9).map((website, index)=> this.makePlanet(website, index, 'third'))}
        </div>
        <div id="second-orbit">
          {this.state.websites.slice(9,12).map((website, index)=> this.makePlanet(website, index, 'second'))}
        </div>
        <div id="first-orbit">
          {this.state.websites.slice(12).map((website, index)=> this.makePlanet(website, index, 'first'))}
        </div>
      </div>
    )
  };
};
