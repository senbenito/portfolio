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
      websites: [
        [
          {id:0, url: 'abc', title: '123'},
          {id:1, url: 'def', title: '456'},
          {id:2, url: 'ghi', title: '789'},
          {id:3, url: 'jkl', title: '111'}
        ],
        [
          {id:4, url: 'mno', title: '222'},
          {id:5, url: 'pqr', title: '333'}
        ],
        [
          {id:6, url: 'stu', title: '444'},
          {id:7, url: 'vwx', title: '555'},
          {id:8, url: 'yzz', title: '666'}
        ],
        [
          {id:9, url: 'aaa', title: '777'},
          {id:10, url: 'bbb', title: '888'},
          {id:11, url: 'ccc', title: '999'}
        ]
      ]
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
        <Link to="/about" id="about">
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
