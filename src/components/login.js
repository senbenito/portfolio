import React from 'react';
import qs from 'qs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../App.css';

export default class Login extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       hideChicken: false,
       hideLogin: true,
       hideAddSite: true,
       chickenClass: 'chicken-bounce',
       username: '',
       password: '',
       url: '',
       title: ''
     };
     this.handleLogin = this.handleLogin.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   };

  toggleForm=()=>{
    this.setState({
      chickenClass: 'chicken-roll'
    });
    setTimeout(()=>{
      this.setState({
        hideLogin: !this.state.hideLogin,
        hideChicken: !this.state.hideChicken
      })
    } , 1500)
  };

  handleInput=(event)=>{
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  notify=(message)=>toast(message);

  async handleLogin(event) {
    event.preventDefault();
    this.notify(`Hey, ${this.state.username}. You down? We'll see....`);
    const response = await fetch('https://senbenito-server.herokuapp.com/login',
      {method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: qs.stringify(this.state)});
    if (response.status !== 200) return this.notify(`Could not login: ${this.state.username}`);
    const data = await response.json();
    this.notify(`Righteous. Welcome to the fun, ${data.greeting}`);
    this.setState({
      hideLogin: !this.state.hideLogin,
      hideAddSite: !this.state.hideAddSite
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.notify(`Yeah buddy! You made another site!! Let's add ${this.state.title}`);
    this.setState({
      hideAddSite: !this.state.hideAddSite,
      hideChicken: !this.state.hideChicken,
      chickenClass: 'chicken-bounce'
    });
    const response = await fetch('https://senbenito-server.herokuapp.com/sites',
      {method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      credentials: 'include',
      body: qs.stringify(this.state)});
    if (response.status !== 200) {
      this.notify(`Something went wrong, dude.`)
    } else {
      const data = await response.json();
      this.notify(`Another site added: ${data.title}... ROCK ON!!`);
    }
  }

  render(){
    const LoginForm = () => (
      <form onSubmit={this.handleLogin}>
        <input placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput} />
        <input placeholder="password" name="password" type="password" value={this.state.password} onChange={this.handleInput} />
        <input type="submit" value="Submit" />
      </form>
    )
    const Chicken = () => (
      <img className={this.state.chickenClass} src="https://orig00.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" alt="./chicken_caw_animation_by_captaintoog-d7338wq.gif" onClick={this.toggleForm}/>
    )

    const AddWebsite = () => (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="website" name="url" type="text" value={this.state.url} onChange={this.handleInput} />
        <input placeholder="title" name="title" type="text" value={this.state.title} onChange={this.handleInput} />
        <input type="submit" value="Submit" />
      </form>
    )
    return(
      <div className="login-container">
        <ToastContainer
         position="top-right"
         type="default"
         autoClose={5000}
         hideProgressBar={true}
         newestOnTop={false}
         closeOnClick
         pauseOnHover
        />
        <div className="login-bar">
          {!this.state.hideChicken && <Chicken />}
          {!this.state.hideLogin && <LoginForm />}
          {!this.state.hideAddSite && <AddWebsite />}
        </div>
        <div className="login-rotisserie"/>
      </div>
    )
   }
};
