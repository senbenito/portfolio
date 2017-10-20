import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../App.css';

export default class About extends React.Component{
  // constructor(props){
  //    super(props);
  //  };

  // handleChange=(event)=>{
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // <UncontrolledTooltip placement="right" target="readme-bar">
  // ... this a document describing the creation of this website that is actually a miniature website that will take you to the website that I used to create this website ...
  // </UncontrolledTooltip>

  toolToast=()=>{
    toast.warn("... this a document describing the creation of this website that is actually a miniature website that will take you to the website that I used to create this website ...");
  };


  render(){
    return(
      <div className="about">
        <ToastContainer
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         pauseOnHover
        />
        <a className="hidden-link" href="https://github.com/senbenito/portfolio-frontend/blob/master/README.md">
          <div id="readme-bar" onClick={this.props.toggleForm} onMouseOver={this.toolToast}>
            <p>Just like slipping across the Event Horizon where reality starts to warp ...</p>
          </div>
          <object data="README.html" type="text/html">
            <a href="https://github.com/senbenito/portfolio-frontend/blob/master/README.md">GitHub</a>
          </object>
        </a>
      </div>
    )
   }
};
