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
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSiteSubmit = this.handleSiteSubmit.bind(this);
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

  notify=(message)=>toast(message);

  async handleLogin(event) {
    event.preventDefault();
    const username = this._username.value;
    const password = this._password.value;
    this.notify(`Hey, ${username}. You down? We'll see....`);
    const response = await fetch('https://senbenito-server.herokuapp.com/login',
      {method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: qs.stringify({username, password})
      });
    if (response.status !== 200) return this.notify(`Could not login: ${username}`);
    const data = await response.json();
    this.notify(`Righteous. Welcome to the fun, ${data.greeting}`);
    this.setState({
      hideLogin: !this.state.hideLogin,
      hideAddSite: !this.state.hideAddSite
    })
  }

  async handleSiteSubmit(event) {
    event.preventDefault();
    const url = this._url.value;
    const title = this._title.value;
    this.notify(`Yeah buddy! You made another site!! Let's add ${title}`);
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
      body: qs.stringify({url, title})
      });
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
        <input placeholder="username" name="username" type="text" ref={input => this._username = input} />
        <input placeholder="password" name="password" type="password" ref={input => this._password = input} />
        <input type="submit" value="Submit" />
      </form>
    )
    const Chicken = () => (
      <img className={this.state.chickenClass} src="https://orig00.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" alt="./chicken_caw_animation_by_captaintoog-d7338wq.gif" onClick={this.toggleForm}/>
    )

    const AddWebsite = () => (
      <form onSubmit={this.handleSiteSubmit}>
        <input placeholder="website" name="url" type="text" ref={input => this._url = input} />
        <input placeholder="title" name="title" type="text" ref={input => this._title = input} />
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
      </div>
    )
   }
};
