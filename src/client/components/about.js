'use strict';
import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { NavBar }               from './navBar';
/*************************************************************************/

class About extends Component {
  constructor(props) { super(props) }

  componentDidMount(){
	  let elem = ReactDOM.findDOMNode(this);
	  elem.style.opacity = 0;
    setTimeout(() => { window.requestAnimationFrame(() => {
  		    elem.style.transition = "opacity 1000ms";
  		    elem.style.opacity = 1;
  	  }) }, 0);
  }

  render() {
    document.title = "Brendan Broderick | About"
    return(
      <div className="outerDiv contentDiv-secondary col-xs-12">
        <NavBar selector={"about-navbar"}/>
        <div className="row">
          <div className="col-md-5 about-info">
            <div className="row">
              <h4><strong>Name: </strong> Brendan Broderick</h4>
              <h4><strong>Hometown:</strong> Denver, CO</h4>
              <h4><strong>University: </strong> Vanderbilt</h4>
              <h4><strong>Majors: </strong> Computer Science & Economics</h4>
              <h4><strong>Interests: </strong> Skiing, Rockclimbing, Mountaineering, Photography, Product Mangement, Software Development, Design, Human Computer Interaction, Anything Oscar Wilde</h4>
              <h4><strong>Languages: </strong> C/C++, Java, javascript/node, Go, Ruby/Rails, SQL, NoSQL, HTML/CSS</h4>
              <h4><strong>Frameworks & Libraries: </strong> React, Angular, Ember, Bootstrap, Material UI, JQuery, Express, Mongoose, Passport.js / Oauth</h4>
              <h4><strong>Companies: </strong> Accenuture Innovation Garage, Ibotta, Vanderbilt University Medical Center, Choozle</h4>
          </div>
          </div>
          <div className="col-md-4 col-xs-11" id="personal-photo"></div>
          <div className="col-md-2 col-xs-11" id="icon-list">
            <a href="https://github.com/bbroderick7" target="_blank"><div className="col-md-12 col-xs-3 icon-units" id="about-github-icon">
              <img src="https://pbs.twimg.com/profile_images/616309728688238592/pBeeJQDQ.png"/>
            </div></a>
          <a href="https://www.linkedin.com/in/brendan-broderick-5885a284/" target="_blank"><div className="col-md-12 col-xs-3 icon-units" id="about-linkedin-icon">
              <img src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png"/>
            </div></a>
          <a href="https://www.instagram.com/bbroderick95/" target="_blank"><div className="col-md-12 col-xs-3 icon-units" id="about-instagram-icon">
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
