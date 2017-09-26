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
      this.handleSubmit = this.handleSubmit.bind(this);
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
   const response = await fetch('https://senbenito-server.herokuapp.com/login',
   {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: qs.stringify(this.state)
   })
   if (response.status !== 200) return this.notify(`Could not login: ${this.state.username}`);
   const data = await response.json();
   this.notify(`Righteous. ${data.username}, welcome to the fun!`);
  //  let pathEnd = data.url;
  //  setTimeout(()=>{
  //    this._reactInternalInstance._context.router.history.push(pathEnd, null);}
  //    , 1500);
  }

  render(){
    const LoginForm = () => (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
        <input placeholder="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
    const Chicken = () => (
      <img className={this.state.chickenClass} src="https://orig00.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" alt="./chicken_caw_animation_by_captaintoog-d7338wq.gif" onClick={this.toggleForm}/>
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
        {!this.state.hideChicken && <Chicken />}
        {!this.state.hideForm && <LoginForm />}
      </div>
    )
   }
};
