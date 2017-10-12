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

const HeaderTitle = () => <div className="col-xs-8"><h2>Grahams Solitare</h2></div>;

const LoggedInUserLinks = (props) => <div className="col-xs-4 login-nav">
            <Link to="/login" id="logoutLink" onClick={props.logoutFunc} >Log Out</Link>
            <Link to= {`/profile/${props.user.username}`} id="gravatarID"><img src={GravHash(`${props.user.email}`, 65)}/></Link>
        </div>;


const LoggedOutUserLinks = () => <div className="col-xs-4 right-nav">
              <Link to="/login" id="loginLink">Log In</Link>
              <Link to="/register" id="regLink">Register</Link>
            </div>;

const Links = (props) => {
  if(props.loggedIn){
    return <LoggedInUserLinks logoutFunc={props.logoutFunc} user={props.user}/>
  }else{
    return <LoggedOutUserLinks/>
  }
}


class Header extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.props.user.username!=''? true : false;
    this.state = {
      username: this.props.user.username
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
          <HeaderTitle/>
          <Links loggedIn={this.loggedIn} logoutFunc={this.props.logOutFunction} user= {this.props.user}/>
      </nav>
    )
  }
}

export default withRouter(Header);
