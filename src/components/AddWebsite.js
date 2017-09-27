import React from 'react';
import qs from 'qs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class AddWebsite extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       url: '',
       title: ''
     };
      this.handleSubmit = this.handleSubmit.bind(this);
   };

  handleChange=(event)=>{
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  notify=(message)=>toast(message);

  async handleSubmit(event) {
    event.preventDefault();
    this.notify(`Hey, ${this.state.username}. You down? We'll see....`);
    const response = await fetch('https://senbenito-server.herokuapp.com/sites',
      {method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: qs.stringify(this.state)});
    if (response.status !== 200) return this.notify(`Could not login: ${this.state.username}`);
    const data = await response.json();
    this.notify(`Righteous. Welcome to the fun, ${data.greeting}`);
    let pathEnd = data.url;
    // setTimeout(()=>{
    //  this._reactInternalInstance._context.router.history.push(pathEnd, null);}
    //  , 1500);
  }

  render(){
    return(
      <div>
        <ToastContainer
         position="top-right"
         type="default"
         autoClose={5000}
         hideProgressBar={true}
         newestOnTop={false}
         closeOnClick
         pauseOnHover
        />
        <form onSubmit={this.handleSubmit}>
          <input placeholder="website" name="website" type="text" value={this.state.url} onChange={this.handleChange} />
          <input placeholder="title" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
   }
};
