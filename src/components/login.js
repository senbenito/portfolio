import React from 'react';
import qs from 'qs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class Login extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       chickenClass: 'chickenSpin',
       hideForm: true,
       hideChicken: false,
       username: '',
       password: ''
     };
<<<<<<< HEAD
      this.handleLogin = this.handleLogin.bind(this);
=======
      this.handleSubmit = this.handleSubmit.bind(this);
>>>>>>> 7de08b79ca75f4a304bb52b9f06cf633ed619e14
   };

  toggleForm=()=>{
    this.setState({
      chickenClass: 'chickenReveal'
    });
    setTimeout(()=>{
      this.setState({
        hideForm: !this.state.hideForm,
        hideChicken: !this.state.hideChicken
      })
    } , 1500)
  };

<<<<<<< HEAD
  handleInput=(event)=>{
=======
  handleChange=(event)=>{
>>>>>>> 7de08b79ca75f4a304bb52b9f06cf633ed619e14
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  notify=(message)=>toast(message);

<<<<<<< HEAD
  async handleLogin(event) {
=======
  async handleSubmit(event) {
>>>>>>> 7de08b79ca75f4a304bb52b9f06cf633ed619e14
    event.preventDefault();
    this.notify(`Hey, ${this.state.username}. You down? We'll see....`);
    const response = await fetch('https://senbenito-server.herokuapp.com/login',
      {method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
<<<<<<< HEAD
      credentials: 'include',
      body: qs.stringify(this.state)});
    this.setState({
      hideForm: !this.state.hideForm,
      hideChicken: !this.state.hideChicken
    });
=======
      body: qs.stringify(this.state)});
>>>>>>> 7de08b79ca75f4a304bb52b9f06cf633ed619e14
    if (response.status !== 200) return this.notify(`Could not login: ${this.state.username}`);
    const data = await response.json();
    this.notify(`Righteous. Welcome to the fun, ${data.greeting}`);
    let pathEnd = data.url;
<<<<<<< HEAD
    setTimeout(()=>{
     this._reactInternalInstance._context.router.history.push(pathEnd, null);}
     , 1500);
=======
    //before VVVVV implement Router and create /addwebsite component
    // setTimeout(()=>{
    //  this._reactInternalInstance._context.router.history.push(pathEnd, null);}
    //  , 1500);
>>>>>>> 7de08b79ca75f4a304bb52b9f06cf633ed619e14
  }

  render(){
    const LoginForm = () => (
<<<<<<< HEAD
      <form onSubmit={this.handleLogin}>
        <input placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput} />
        <input placeholder="password" name="password" type="password" value={this.state.password} onChange={this.handleInput} />
=======
      <form onSubmit={this.handleSubmit}>
        <input placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
        <input placeholder="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
>>>>>>> 7de08b79ca75f4a304bb52b9f06cf633ed619e14
        <input type="submit" value="Submit" />
      </form>
    )
    const Chicken = () => (
      <img className={this.state.chickenClass} src="https://orig00.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" alt="./chicken_caw_animation_by_captaintoog-d7338wq.gif" onClick={this.toggleForm}/>
    )
    return(
<<<<<<< HEAD
      <div className="chicken">
=======
      <div>
>>>>>>> 7de08b79ca75f4a304bb52b9f06cf633ed619e14
        <ToastContainer
         position="top-right"
         type="default"
         autoClose={5000}
         hideProgressBar={true}
         newestOnTop={false}
         closeOnClick
         pauseOnHover
        />
        {!this.state.hideChicken && <Chicken />}
        {!this.state.hideForm && <LoginForm />}
      </div>
    )
   }
};
