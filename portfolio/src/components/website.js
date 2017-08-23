import React, {Component} from 'react';

class Website extends Component{
  constructor(props){
     super(props)
   }
   render(){
      let url = `${this.props.url}`
      let elm = <iframe
          id="player"
          type="text/html"
          width="1200"
          height="400"
          src= {url}
          frameBorder="10">
          </iframe>

      return(
         <div>
           { elm }
         </div>
      )
   }
}

export default Website
