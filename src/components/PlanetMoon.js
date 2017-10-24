import React from 'react';

export default class PlanetMoon extends React.Component{
  render(){
    switch (this.props.orbit) {
      default:
      case 'second':
        return(
          <div>
            <div className={this.props.className + '-moon-orbit'}>
              <div className={this.props.orbit + '-orbit-moon00'}
              onClick={e=>this.props.handleSiteClick(e)}
              key={this.props.website.id + 10}
              value={this.props.website.url}/>
            </div>
            <div className={this.props.className}
            onClick={e=>this.props.handleSiteClick(e)}
            key={this.props.website.id}
            value={this.props.website.url}>
            {this.props.website.title}
            </div>
          </div>
        )
      case 'third':
        return(
          <div>
            <div className={this.props.className + '-moon-orbit'}>
              <div className={this.props.orbit + '-orbit-moon00'}
              onClick={e=>this.props.handleSiteClick(e)}
              key={this.props.website.id + 10}
              value={this.props.website.url}/>
              <div className={this.props.orbit + '-orbit-moon01'}
              onClick={e=>this.props.handleSiteClick(e)}
              key={this.props.website.id + 11}
              value={this.props.website.url}/>
              <div className={this.props.orbit + '-orbit-moon02'}
              onClick={e=>this.props.handleSiteClick(e)}
              key={this.props.website.id + 12}
              value={this.props.website.url}/>
              <div className={this.props.orbit + '-orbit-moon03'}
              onClick={e=>this.props.handleSiteClick(e)}
              key={this.props.website.id + 13}
              value={this.props.website.url}/>
            </div>
            <div className={this.props.className}
            onClick={e=>this.props.handleSiteClick(e)}
            key={this.props.website.id}
            value={this.props.website.url}>
            {this.props.website.title}
            </div>
          </div>
        )
        case 'fourth':
          return(
            <div>
              <div className={this.props.className + '-moon-orbit'}>
                <div className={this.props.orbit + '-orbit-moon00'}
                onClick={e=>this.props.handleSiteClick(e)}
                key={this.props.website.id + 10}
                value={this.props.website.url}/>
                <div className={this.props.orbit + '-orbit-moon01'}
                onClick={e=>this.props.handleSiteClick(e)}
                key={this.props.website.id + 11}
                value={this.props.website.url}/>
              </div>
              <div className={this.props.className}
              onClick={e=>this.props.handleSiteClick(e)}
              key={this.props.website.id}
              value={this.props.website.url}>
              {this.props.website.title}
              </div>
            </div>
          )
        case 'fifth':
          return(
            <div className={this.props.className + '-moon-orbit'}>
              <div className={this.props.orbit + '-orbit-moon-chicken'}
              onClick={this.props.toggleForm}
              key="login-chicken">
                <img className="chicken" src="https://orig00.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" alt="chicken"/>
              </div>
              <div className={this.props.orbit + '-orbit-moon-egg'}
              onClick={this.props.toggleForm}
              key="login-egg">
                <img className="egg" src="https://orig00.deviantart.net/1039/f/2012/008/7/5/8bit_egg_by_xxx515xxx-d4ls0ll.png" alt="egg"/>
              </div>
            </div>
          )
    }
  };
};
