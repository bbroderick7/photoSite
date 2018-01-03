/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';
import React, { Component }     from 'react';
import { Link, withRouter }  from 'react-router-dom';
/*************************************************************************/

class Header extends Component {
  constructor(props) {
    super(props);
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <div className="outerDiv headerDiv">
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <div className="overlay-content">
            <a href="/">Home</a>
            <a href="/stills">Stills</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
          </div>
        </div>
        <div onClick={this.openNav}>
          <div className="b-logo"><a href="/">
            <h2>b</h2>
          </a></div>
          <span className="spanNav">&#9776;</span>
          <div className="vertical-text">
            <h4>brendan broderick</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
