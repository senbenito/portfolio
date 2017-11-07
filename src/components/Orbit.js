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
          {},
          {
            id: 8,
            url: "https://serene-capstone.herokuapp.com/",
            title: "Serene",
            toast: "PSSSSSSSST.......... username = 'Shotgun'        password = 'password'"
          },
          {
            id: 7,
            url: "https://checkout-vr.surge.sh/",
            title: "Checkout VR",
            toast: ''
          },
          {
            id: 6,
            url: "https://musicator.surge.sh/",
            title: "Musicator",
            toast: ''
          },
          {
            id: 5,
            url: "https://wry-noise.herokuapp.com/",
            title: "Dreaddit",
            toast: ''
          }
        ],
        [
          {
            id: 4,
            url: "https://drinking-buddies.herokuapp.com/",
            title: "Drinking Buddies",
            toast: "PSSSSSSSST.......... username = 'Shotgun'        password = 'cocktailpassword'"
          },
          {
            id: 3,
            url: "https://eatertain_me.surge.sh/",
            title: "Eatertain.Me",
            toast: ''
          }
        ],
        [
          {
            id: 2,
            url: "https://utopian-locket.surge.sh/",
            title: "Pyrate Personality Test",
            toast: ''
          },
          {
            id: 1,
            url: "https://senbenito.surge.sh/",
            title: "Let's meet Shannon!",
            toast: ''
          }
        ],
        [

        ]
      ],
      ring1Class: 'ring1',
      ring2Class: 'ring2',
      ring3Class: 'ring3',
      ring4Class: 'ring4',
      ring5Class: 'ring5',
      ring6Class: 'ring6',
      ring7Class: 'ring7',
      ring8Class: 'ring8',
      blackholeText: ''
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

  toggleHoverOn=()=>{
    this.setState({
      ring1Class: 'ring-hover1',
      ring2Class: 'ring-hover2',
      ring3Class: 'ring-hover3',
      ring4Class: 'ring-hover4',
      ring5Class: 'ring-hover5',
      ring6Class: 'ring-hover6',
      ring7Class: 'ring-hover3',
      ring8Class: 'ring-hover4',
      blackholeText: 'blackhole-text'
    });
  }

  toggleHoverOff=()=>{
    this.setState({
      ring1Class: 'ring1',
      ring2Class: 'ring2',
      ring3Class: 'ring3',
      ring4Class: 'ring4',
      ring5Class: 'ring5',
      ring6Class: 'ring6',
      ring7Class: 'ring7',
      ring8Class: 'ring8',
      blackholeText: ''
    });
  }

  makePlanet=(website, index, orbit)=>{
    let passVal = {
      url: website.url,
      toastMessage: website.toast,
    };
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
        <Link
        to="/about"
        id="about"
        className="hidden-link2"
        onClick={this.props.toggleBodyClass}
        onMouseEnter={this.toggleHoverOn}
        onMouseLeave={this.toggleHoverOff}>

          <span className={this.state.blackholeText}>¿</span>?<span className={this.state.blackholeText}>¿</span>?<span className={this.state.blackholeText}>¿</span>?
          <br/>?<span className={this.state.blackholeText}>¿</span>?¿<span className={this.state.blackholeText}>WHAT</span>?¿<span className={this.state.blackholeText}>?</span>¿
          <br/><span className={this.state.blackholeText}>¿</span>?¿?¿?<span className={this.state.blackholeText}>IS</span>¿?¿?¿<span className={this.state.blackholeText}>?</span>
          <br/>?<span className={this.state.blackholeText}>¿</span>?¿<span className={this.state.blackholeText}>THIS</span>?¿<span className={this.state.blackholeText}>?</span>¿
          <br/>¿<span className={this.state.blackholeText}>?</span>¿<span className={this.state.blackholeText}>?</span>¿<span className={this.state.blackholeText}>?</span>

          <div className={this.state.ring1Class}/>
          <div className={this.state.ring2Class}/>
          <div className={this.state.ring3Class}/>
          <div className={this.state.ring4Class}/>
          <div className={this.state.ring5Class}/>
          <div className={this.state.ring6Class}/>
          <div className={this.state.ring7Class}/>
          <div className={this.state.ring8Class}/>
        </Link>
      </div>
    )
  };
};
