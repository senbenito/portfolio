import React from 'react';

export default class Website extends React.Component{
   render(){
      return(
         <div>
           <iframe
             id="player"
             title={this.props.title}
             type="text/html"
             width="1200"
             height="400"
             src= {this.props.url}
             frameBorder="10">
           </iframe>
         </div>
      )
   }
};
