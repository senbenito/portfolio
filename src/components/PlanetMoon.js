import React from 'react';
import chicken_caw_animation_by_captaintoog from '../images/chicken_caw_animation_by_captaintoog.gif';
import egg_by_xxx515xxx from '../images/egg_by_xxx515xxx.png';

export default class PlanetMoon extends React.Component{
  render(){
    const pointer = {cursor: 'pointer'};
    switch (this.props.orbit) {
      default:
      case 'second':
        return(
          <div>
            <div className={this.props.className + '-moon-orbit'}>
              <div
                className={this.props.orbit + '-orbit-moon00'}
                style={pointer}
                onClick={e=>this.props.handleSiteClick(e)}
                key={this.props.website.id + 10}
                value={this.props.website.url}
              />
            </div>
            <div
              className={this.props.className}
              style={pointer}
              onClick={e=>this.props.handleSiteClick(e)}
              key={this.props.website.id}
              value={this.props.website.url}
            >
              {this.props.website.title}
            </div>
          </div>
        )
      case 'third':
        return(
          <div>
            <div className={this.props.className + '-moon-orbit'}>
              <div
                className={this.props.orbit + '-orbit-moon00'}
                style={pointer}
                onClick={e=>this.props.handleSiteClick(e)}
                key={this.props.website.id + 10}
                value={this.props.website.url}
              />
              <div
                className={this.props.orbit + '-orbit-moon01'}
                style={pointer}
                onClick={e=>this.props.handleSiteClick(e)}
                key={this.props.website.id + 11}
                value={this.props.website.url}
              />
              <div
              className={this.props.orbit + '-orbit-moon02'}
              style={pointer}
                onClick={e=>this.props.handleSiteClick(e)}
                key={this.props.website.id + 12}
                value={this.props.website.url}
              />
              <div
                className={this.props.orbit + '-orbit-moon03'}
                style={pointer}
                onClick={e=>this.props.handleSiteClick(e)}
                key={this.props.website.id + 13}
                value={this.props.website.url}
              />
            </div>
            <div
              className={this.props.className}
              style={pointer}
              onClick={e=>this.props.handleSiteClick(e)}
              key={this.props.website.id}
              value={this.props.website.url}
            >
              {this.props.website.title}
            </div>
          </div>
        )
        case 'fourth':
          return(
            <div>
              <div className={this.props.className + '-moon-orbit'}>
                <div
                  className={this.props.orbit + '-orbit-moon00'}
                  style={pointer}
                  onClick={e=>this.props.handleSiteClick(e)}
                  key={this.props.website.id + 10}
                  value={this.props.website.url}
                />
                <div
                  className={this.props.orbit + '-orbit-moon01'}
                  style={pointer}
                  onClick={e=>this.props.handleSiteClick(e)}
                  key={this.props.website.id + 11}
                  value={this.props.website.url}
                />
              </div>
              <div
                className={this.props.className}
                style={pointer}
                onClick={e=>this.props.handleSiteClick(e)}
                key={this.props.website.id}
                value={this.props.website.url}
              >
                {this.props.website.title}
              </div>
            </div>
          )
        case 'fifth':
          return(
            <div className={this.props.className + '-moon-orbit'}>
              <div
                className={this.props.orbit + '-orbit-moon-chicken'}
                style={pointer}
                onClick={this.props.toggleForm}
                key="login-chicken"
              >
                <img
                  className="chicken"
                  src={chicken_caw_animation_by_captaintoog}
                  alt="chicken"
                />
              </div>
              <div
                className={this.props.orbit + '-orbit-moon-egg'}
                style={pointer}
                onClick={this.props.toggleForm}
                key="login-egg"
              >
                <img className="egg" src={egg_by_xxx515xxx} alt="egg"/>
              </div>
            </div>
          )
    }
  };
};
