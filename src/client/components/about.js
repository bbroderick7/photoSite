'use strict';
import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { NavBar }               from './navBar';
/*************************************************************************/

class About extends Component {
  constructor(props) { super(props) }

  render() {
    return(
      <div className="outerDiv contentDiv col-xs-12">
        <NavBar selector={"about-navbar"}/>
        <div className="row">
          <div className="col-md-5 about-info">
            <div className="row">
              <h3>Name: Brendan Broderick</h3>
              <h3>Hometown: Denver, CO</h3>
              <h3>University: Vanderbilt</h3>
              <h3>Majors: Computer Science & Economics</h3>
              <h3>Interests: Skiing, Rockclimbing, Mountaineering, Photography, Product Mangement, Software Development, Anything Oscar Wilde</h3>
            </div>
          </div>
          <div className="col-md-4 col-xs-12" id="personal-photo"></div>
          <div className="col-md-3 col-xs-3" id="icon-list">
            <a href="https://github.com/bbroderick7" target="_blank"><div className="col-md-12 col-xs-3 icon-units" id="about-github-icon">
              <img src="http://computermentors.org/wp-content/uploads/2017/07/GitHub_Logo_White.png"/>
            </div></a>
            <a href="https://github.com/bbroderick7" target="_blank"><div className="col-md-12 col-xs-3 icon-units" id="about-linkedin-icon">
              <img src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png"/>
            </div></a>
            <a href="https://github.com/bbroderick7" target="_blank"><div className="col-md-12 col-xs-3 icon-units" id="about-instagram-icon">
              <img src="https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png"/>
            </div></a>
            <a href="https://github.com/bbroderick7" target="_blank"><div className="col-md-12 col-xs-3 icon-units" id="about-facebook-icon">
              <img src="https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1-400x400.png"/>
            </div></a>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(About);
