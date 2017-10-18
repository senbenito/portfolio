import React from 'react';

export default class PlanetMoon extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      orbit: this.props.orbit,
      className: this.props.className,
      website: this.props.website,
      handleSiteClick: this.props.onClick
    };
  };

  render(){
    switch (this.state.orbit) {
      default:
      case 'second':
        return(
          <div>
            <div className={this.state.className + '-moon-orbit'}>
              <div className={this.state.orbit + '-orbit-moon00'}
              onClick={(e)=>this.state.handleSiteClick(e)}
              key={this.state.website.id + 10}
              value={this.state.website.url}/>
            </div>
            <div className={this.state.className}
            onClick={(e)=>this.state.handleSiteClick(e)}
            key={this.state.website.id}
            value={this.state.website.url}>
            {this.state.website.title}
            </div>
          </div>
        )
      case 'third':
        return(
          <div>
            <div className={this.state.className + '-moon-orbit'}>
              <div className={this.state.orbit + '-orbit-moon00'}
              onClick={(e)=>this.state.handleSiteClick(e)}
              key={this.state.website.id + 10}
              value={this.state.website.url}/>
              <div className={this.state.orbit + '-orbit-moon01'}
              onClick={(e)=>this.state.handleSiteClick(e)}
              key={this.state.website.id + 11}
              value={this.state.website.url}/>
              <div className={this.state.orbit + '-orbit-moon02'}
              onClick={(e)=>this.state.handleSiteClick(e)}
              key={this.state.website.id + 12}
              value={this.state.website.url}/>
              <div className={this.state.orbit + '-orbit-moon03'}
              onClick={(e)=>this.state.handleSiteClick(e)}
              key={this.state.website.id + 13}
              value={this.state.website.url}/>
            </div>
            <div className={this.state.className}
            onClick={(e)=>this.state.handleSiteClick(e)}
            key={this.state.website.id}
            value={this.state.website.url}>
            {this.state.website.title}
            </div>
          </div>
        )
        case 'fourth':
          return(
            <div>
              <div className={this.state.className + '-moon-orbit'}>
                <div className={this.state.orbit + '-orbit-moon00'}
                onClick={(e)=>this.state.handleSiteClick(e)}
                key={this.state.website.id + 10}
                value={this.state.website.url}/>
                <div className={this.state.orbit + '-orbit-moon01'}
                onClick={(e)=>this.state.handleSiteClick(e)}
                key={this.state.website.id + 11}
                value={this.state.website.url}/>
              </div>
              <div className={this.state.className}
              onClick={(e)=>this.state.handleSiteClick(e)}
              key={this.state.website.id}
              value={this.state.website.url}>
              {this.state.website.title}
              </div>
            </div>
          )
        case 'fifth':
          return(
            <div className={this.state.className}
            onClick={(e)=>this.state.handleSiteClick(e)}
            key={this.state.website.id}
            value={this.state.website.url}>
              <div className={this.state.orbit + '-orbit-moon00'}
              onClick={(e)=>this.state.handleSiteClick(e)}
              key={this.state.website.id + 10}
              value={this.state.website.url}/>
              <div className={this.state.orbit + '-orbit-moon01'}
              onClick={(e)=>this.state.handleSiteClick(e)}
              key={this.state.website.id + 11}
              value={this.state.website.url}/>
              {this.state.website.title}
            </div>
          )
    }
  };
};
