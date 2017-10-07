import React from 'react';
import Planet from './Planet.js';

export default class Orbit extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      viewerURL: this.props.viewerURL,
      websites: [],
      // websites: this.props.websites,
      // websites: [
      //   {id: 1,
      //   url: 'abc',
      //   title: 'ABC'},
      //   {id: 2,
      //   url: 'xyz',
      //   title: 'XYZ'},
      //   {id: 3,
      //   url: 'jkl',
      //   title: 'JKL'},
      //   {id: 4,
      //   url: 'abc',
      //   title: 'ABC'},
      //   {id: 5,
      //   url: 'xyz',
      //   title: 'XYZ'},
      //   {id: 6,
      //   url: 'jkl',
      //   title: 'JKL'},
      //   {id: 7,
      //   url: 'abc',
      //   title: 'ABC'},
      //   {id: 8,
      //   url: 'xyz',
      //   title: 'XYZ'},
      //   {id: 9,
      //   url: 'jkl',
      //   title: 'JKL'},
      // ],
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

  handleSiteClick=(e, passVal)=>{
    this.setState({
      viewerURL: passVal,
      hideModal: false
    });
  };

  makePlanet=(website, index, orbit)=>{
    let passVal = website.url;
    let planetClass = `${orbit}-orbit-planet${index}`;
    return (
      <Planet key={index}
      className={planetClass}
      onClick={(e)=>this.handleSiteClick(e, passVal)}
      website={website}/>
    )
  };

  render(){
    return(
      <div id="circle-orbit-container">
        <div id="outer-orbit">
          {this.state.websites.slice(0,3).map((website, index)=> this.makePlanet(website, index, 'outer'))}
        </div>
        <div id="middle-orbit">
          {this.state.websites.slice(3,6).map((website, index)=> this.makePlanet(website, index, 'middle'))}
        </div>
        <div id="inner-orbit">
          {this.state.websites.slice(6).map((website, index)=> this.makePlanet(website, index, 'inner'))}
        </div>
      </div>
    )
  };
};
