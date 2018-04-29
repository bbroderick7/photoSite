/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';
import React, { Component }     from 'react';
import { Link, withRouter }  from 'react-router-dom';
/*************************************************************************/
let SideBarExpand = (props) => <div id="myNav" className="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick={ props.closeNav }>&times;</a>
        <div className="overlay-content">
          <a href="/">Home</a>
          <a href="/stills">Stills</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
        </div>
      </div>

let DesktopHeader = (props) => <div className="outerDiv headerDiv">
        <SideBarExpand closeNav = { props.closeNav }/>
        <div onClick={ props.openNav }>
          <div className="b-logo">
            <a href="/">
              <h2> b </h2>
            </a>
          </div>
          <span className="spanNav">&#9776;</span>
          <div className="vertical-text"> <h4>brendan broderick</h4> </div>
        </div>
      </div>

let MobileHeader = (props) => <div>
      <div className="headerDiv-mobile" scrolling="no">
        <div className = "header-mobile-cont">
          <div className="b-logo-mobile col-xs-10"> <a href="/"> <h4>brendan broderick.</h4> </a> </div>
          <span className="col-xs-2" onClick={ props.openNav } className="spanNav-mobile ">&#9776;</span>
        </div>
      </div>
      <div className="shadowDiv-mobile"></div>
      <SideBarExpand closeNav = { props.closeNav }/>
    </div>

class Header extends Component {
  constructor(props) { super(props) }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.opacity = 1;
  }

  closeNav() { document.getElementById("myNav").style.width = "0%" }

  render() {
    if(screen.width > 800 || window.location.href.length-1 == window.location.origin.length){
      return <DesktopHeader openNav={ this.openNav } closeNav={ this.closeNav }/>
    } else {
      return <MobileHeader openNav={ this.openNav } closeNav={ this.closeNav }/>
    }
  }
}

export default withRouter(Header);
