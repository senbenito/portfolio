import React from 'react';

export default class Website extends React.Component{
<<<<<<< HEAD
=======
  constructor(props){
     super(props)
   }
>>>>>>> 7de08b79ca75f4a304bb52b9f06cf633ed619e14
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
