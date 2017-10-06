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
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-default navbar-static-top">
          <div className="col-xs-8">
              <h2>Grahams Solitare</h2>
          </div>
          <div className="col-xs-4 right-nav">
              <a id="loginLink" href="/login.html">Log In</a>
              <a id="regLink" href="/register.html">Register</a>
          </div>
      </nav>
      </div>
    )
  }

}

export default withRouter(Header);
