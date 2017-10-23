import React from 'react';
import '../App.css';
import { Parallax } from 'react-parallax';

export default class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      readmeText: "<soo-meta> this document that describes the creation of this website  is actually a miniature website that will take you to the website that I used to create this website </soo-meta>"
    };
  };

  componentWillMount() {
    this.props.toggleBodyClass('about-body');
  }

  render(){
    const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
    return(
      <div className="about">

        <Parallax bgImage="https://www.hendricksgin.com/bundles/wgshgwebsite/img/pages/home/parallax/middle/tower.png" strength={500}>
          <div style={{height: '200vh'}}>
            <div style={insideStyles}>some parallax text</div>
          </div>
        </Parallax>

      </div>
    )
  };
};
