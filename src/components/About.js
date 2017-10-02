import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../App.css';

export default class About extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       url: '',
       title: ''
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
      <h1>Hello World!</h1>
      </div>
    )
   }
};