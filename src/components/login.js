import React from 'react';
import qs from 'qs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../App.css';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hideAddSite: true,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSiteSubmit = this.handleSiteSubmit.bind(this);
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
      hideLogin: true,
      hideAddSite: false
    })
  }

  async handleSiteSubmit(event) {
    event.preventDefault();
    const url = this._url.value;
    const title = this._title.value;
    this.notify(`Yeah buddy! You made another site!! Let's add ${title}`);
    this.setState({
        hideAddSite: !this.state.hideAddSite,
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
      this.setState({
        hideLogin: true,
        hideAddSite: true
      })
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

    const AddWebsite = () => (
      <form onSubmit={this.handleSiteSubmit}>
        <input placeholder="website" name="url" type="text" ref={input => this._url = input} />
        <input placeholder="title" name="title" type="text" ref={input => this._title = input} />
        <input type="submit" value="Submit" />
      </form>
    )
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
        <div className="login-bar">
          <h3>this is some of the neat stuff <a href="https://github.com/senbenito">senbenito</a> has crafted:</h3>
          {!this.props.hideLogin && <LoginForm />}
          {!this.state.hideAddSite && <AddWebsite />}
        </div>
      </div>
    )
   }
};
