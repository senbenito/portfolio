import React from 'react';
import '../App.css';

export default class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      readmeText: "<soo-meta> this document that describes the creation of this website  is actually a miniature website that will take you to the website that I used to create this website </soo-meta>"
    };
  };


  render(){
    return(
      <div className="about">
        <div id="readme-bar" onClick={this.props.toggleForm}>
          <p>How I came to use a <a href="https://github.com/senbenito/portfolio-frontend/blob/master/README.md" className="hidden-link">GitHub README.md</a> as an About page...</p>
        </div>
        <object data="README.html" type="text/html">
          <a href="https://github.com/senbenito/portfolio-frontend/blob/master/README.md">GitHub</a>
        </object>
      </div>
    )
  };
};
