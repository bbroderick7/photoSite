/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { Link, withRouter }  from 'react-router-dom';

import md5                      from 'md5';

/*************************************************************************/

export function GravHash(email, size) {
    let hash = email.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    hash = hash.toLowerCase();
    hash = md5(hash);
    return `https://www.gravatar.com/avatar/${hash}?size=${size}`;
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.props.username!=''? true : false;
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(){
    this.props.logOutFunction();
    console.log("Logout Success");
  }

  loggedInUserLinks(){
    return <div className="col-xs-4 login-nav">
              <Link to="/logout" id="logoutLink" onClick={this.logoutUser} >Log Out</Link>
              <Link to= {`/profile/${this.props.username}`} id="gravatarID"><img src={GravHash('slickwilly@clinton.com', 65)}/></Link>
          </div>
  }

  loggedOutUserLinks(){
      return <div className="col-xs-4 right-nav">
                <Link to="/login" id="loginLink">Log In</Link>
                <Link to="/register" id="regLink">Register</Link>
              </div>
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-default navbar-static-top">
          <div className="col-xs-8">
              <h2>Grahams Solitare</h2>
          </div>
          {this.loggedIn? this.loggedInUserLinks(): this.loggedOutUserLinks()}
      </nav>
      </div>
    )
  }

}

export default withRouter(Header);
