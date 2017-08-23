import React, { Component } from 'react';
import './App.css';
import Website from './components/website.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Look upon my works ye mighty...</h2>
          <img className="App-logo1" src="https://orig09.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" />
          <img className="App-logo2" src="https://orig09.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" />
          <img className="App-logo3" src="https://orig09.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" />
          <img className="App-logo4" src="https://orig09.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" />
          <img className="App-logo5" src="https://orig09.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" />
          <img className="App-logo6" src="https://orig09.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" />
          <img className="App-logo7" src="https://orig09.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" />
        </div>
        <p className="App-intro">
        Hey! Check it out... this is all the neat stuff <a href="https://github.com/senbenito">senbenito</a> has crafted:
        </p>
        <Website url={"http://checkout-vr.surge.sh/"}/>
        <Website url={"https://wry-noise.herokuapp.com/"}/>
        <Website url={"https://drinking-buddies.herokuapp.com/"}/>
        <Website url={"http://eatertain_me.surge.sh/"}/>
        <Website url={"http://senbenito.surge.sh/"}/>
        <Website url={"http://utopian-locket.surge.sh/"}/>
        <Website url={"http://musicator.surge.sh/"}/>
      </div>
    );
  }
}

export default App;
