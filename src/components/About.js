import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import { Converter } from 'showdown';
import 'react-toastify/dist/ReactToastify.min.css';
import '../App.css';

const showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = `# About senbenito's portfolio
           This repoistory started life as a 15-minute warmup during my [Web Development Immersive at Galvanize, Boulder](https://www.galvanize.com/boulder/web-development "Galvanize Boulder shoutout").
           ##### Learn more about my time @ Galvanize: [const senbenito = { ... g[49].16 }](https://talent.galvanize.com/students/1556 "Galvanize Talent link")

           Originally intended as a simple listing of select, deployed projects, this portfolio will be used to document my on-going developer development as I learn and apply new technologies.`,
    html      = converter.makeHtml(text);

export default class About extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       readme: html,
     };
   };

  handleChange=(event)=>{
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  notify=(message)=>toast(message);

  render(){
    return(
      <div className="about">
        <ToastContainer
         position="top-right"
         type="default"
         autoClose={5000}
         hideProgressBar={true}
         newestOnTop={false}
         closeOnClick
         pauseOnHover
        />
        {this.state.readme}
      </div>
    )
   }
};
