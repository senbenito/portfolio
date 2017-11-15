import React from 'react';
import { Parallax } from 'react-parallax';
// import { ToastContainer, toast } from 'react-toastify';
import flowingRiver from '../images/flowingriver2.gif';
import '../App.css';

export default class Resume extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hideAddSite: true,
    };
   };

  // notify=(message)=>toast(message);
  // notifyRed=(message)=>toast.error(message);
  // notifyGreen=(message)=>toast.success(message);
  // notifyYellow=(message)=>toast.warn(message);


  // async handleLogin(event) {
  //   event.preventDefault();
  //   const username = this._username.value;
  //   const password = this._password.value;
  //   this.notify(`Hey, ${username}. You down? We'll see....`);
  //   const response = await fetch('https://senbenito-server.herokuapp.com/login',
  //     {method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //     },
  //     body: qs.stringify({username, password})
  //     });
  //   if (response.status !== 200) return this.notifyRed(`Could not login: ${username}`);
  //   const data = await response.json();
  //   this.notifyGreen(`Righteous. Welcome to the fun, ${data.greeting}`);
  //   this.props.toggleForm();
  //   this.setState({
  //     hideAddSite: false
  //   })
  // }
  //
  // async handleSiteSubmit(event) {
  //   event.preventDefault();
  //   const url = this._url.value;
  //   const title = this._title.value;
  //   this.notifyGreen(`Yeah buddy! You made another site!! Let's add ${title}`);
  //   this.setState({
  //       hideAddSite: !this.state.hideAddSite,
  //   });
  //   const response = await fetch('https://senbenito-server.herokuapp.com/sites',
  //     {method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //     },
  //     credentials: 'include',
  //     body: qs.stringify({url, title})
  //     });
  //   if (response.status !== 200) {
  //     this.notifyYellow(`Something went wrong, dude.`)
  //   } else {
  //     const data = await response.json();
  //     this.notifyGreen(`Another site added: ${data.title}... ROCK ON!!`);
  //     this.setState({
  //       hideAddSite: true
  //     })
  //   }
  // }

  render(){
    const insideStyles = {background: 'white', padding: 15, position: 'absolute', top: '20vh', left: '50%', color: 'black', transform: 'translate(-50%,-50%)'};

    return(
      <Parallax bgImage={flowingRiver}
      bgHeight="392px"
      bgWidth="800px"
        strength={-200}>
        <div style={{height: "300px"}}>
          <div style={insideStyles}>
            “... I am now a river, carving my own path.”
          </div>
        </div>
      </Parallax>
    )
   }
};
