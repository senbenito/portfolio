import React from 'react';
import Planet from './Planet.js';
import PlanetMoon from './PlanetMoon.js';
import PlanetRings from './PlanetRings.js';
import { Link } from 'react-router-dom';


export default class Orbit extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      viewerURL: this.props.viewerURL,
      websites: [],
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
    this.fetchPlaces();
  };

  makePlanet=(website, index, orbit)=>{
    let passVal = website.url;
    let planetClass = `${orbit}-orbit-planet${index}`;
    if (index === 0) {
      return (
        <PlanetMoon key={index}
        orbit={orbit}
        className={planetClass}
        handleSiteClick={(e)=>this.props.handleSiteClick(e, passVal)}
        toggleForm={this.props.toggleForm}
        website={website}/>
      )
    };
    if (index === 1){
      if (orbit === "third" || orbit === "fifth") {
        return (
          <PlanetRings key={index}
          className={planetClass}
          handleSiteClick={(e)=>this.props.handleSiteClick(e, passVal)}
          website={website}/>
        )
      }
    };
    return (
      <Planet key={index}
      className={planetClass}
      handleSiteClick={(e)=>this.props.handleSiteClick(e, passVal)}
      website={website}/>
    )
  };

  render(){
    return(
      <div id="circle-orbit-container">
      {this.state.websites.map((array, index)=>{
        switch (index){
          default:
          case 0:
            return (
              <div id="fifth-orbit" key="fifth-orbit">
                {array.map((website, index)=> this.makePlanet(website, index, 'fifth'))}
              </div>
            )
          case 1:
            return (
              <div id="fourth-orbit" key="fourth-orbit">
                {array.map((website, index)=> this.makePlanet(website, index, 'fourth'))}
              </div>
            )
          case 2:
            return (
              <div id="third-orbit" key="third-orbit">
                {array.map((website, index)=> this.makePlanet(website, index, 'third'))}
              </div>
            )
          case 3:
            return (
              <div id="second-orbit" key="second-orbit">
                {array.map((website, index)=> this.makePlanet(website, index, 'second'))}
              </div>
            )
        }
      })}
        <Link to="/about" id="about" className="hidden-link2">
        ?¿?¿?¿
        <br/>¿?¿?<span className="blackhole-text">WHAT</span>¿?¿?
        <br/>?¿?¿?¿<span className="blackhole-text">IS</span>?¿?¿?¿
        <br/>¿?¿?<span className="blackhole-text">THIS</span>¿?¿?
        <br/>?¿?¿?¿
        <div className="ring1"/>
        <div className="ring2"/>
        <div className="ring3"/>
        <div className="ring4"/>
        <div className="ring5"/>
        <div className="ring6"/>
        <div className="ring7"/>
        <div className="ring8"/>
        </Link>
      </div>
    )
  };
};
