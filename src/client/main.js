/* Copyright G. Hemingway, 2017 - All rights reserved */
"use strict";

// Necessary modules
import React, { Component }     from 'react';
import { render }               from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Header                   from './components/header';
import Landing                  from './components/landing';
import Login                    from './components/login';
import Logout                   from './components/logout';
import Register                 from './components/register';
import Profile                  from './components/profile';
import Start                    from './components/start';
import Results                  from './components/results';
import Game                     from './components/game';

// Bring app CSS into the picture
require('./app.css');

/*************************************************************************/

class MyApp extends Component {
  constructor(props){
    super(props)
    this.state={
        user: {
          name: this.getCookieVal(document.cookie, "username"),
          email: this.getCookieVal(document.cookie, "email")
        }
    }
    this.setGameAndUserState = this.setGameAndUserState.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  getCookieVal(cookieString, cookieKey){
    if(cookieString.search(cookieKey) == -1){
      return '';
    }
    let nameString = cookieString.substr(cookieString.search(cookieKey));
    if(nameString.search(";") != -1){
      return nameString.substr(0, nameString.search(";")).split("=")[1];
    }else{
      return nameString.split("=")[1];
    }
  }

  deleteLeftOverCookies() {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let cookieAct = cookie.indexOf("=");
        let name = cookieAct  > -1 ? cookie.substr(0, cookieAct ) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  setGameAndUserState(name, email){
    this.deleteLeftOverCookies();
    this.setState({user: {username: name, email: email}});
    document.cookie = `username=${name}`;
    document.cookie = `email=${email}`;
  }

  logoutUser(){
    this.deleteLeftOverCookies();
    this.setState({user: {username: '', email: ''}});
    //window.location.href = "/login";
  }

  render(){
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" render={props => {
            return  <div>
                      <Header username={this.state.user.name} logOutFunction={this.logoutUser}/>
                      <Landing/>
                    </div>}}/>
          <Route path="/login" render={props => {
            return  <div>
                      <Header username={this.state.user.name} logOutFunction={this.logoutUser}/>
                      <Login setGameAndUserState = {this.setGameAndUserState} username={this.state.user.name}/>
                    </div>}}/>
          <Route path="/register" render={props => {
            return  <div>
                      <Header username={this.state.user.name} logOutFunction={this.logoutUser}/>
                      <Register setGameAndUserState = {this.setGameAndUserState} username={this.state.user.name}/>
                    </div>}}/>
          <Route path="/profile/:id" render={props => {
            return  <div>
                      <Header username={this.state.user.name} logOutFunction={this.logoutUser}/>
                      <Profile username={this.state.user.name} email={this.state.user.email}/>
                    </div>}}/>
          <Route path="/results" render={props => {
            return  <div>
                      <Header username={this.state.user.name} logOutFunction={this.logoutUser}/>
                      <Results/>
                    </div>}}/>
          <Route path="/start" render={props => {
            return  <div>
                      <Header username={this.state.user.name} logOutFunction={this.logoutUser}/>
                      <Start username={this.state.user.name}/>
                    </div>}}/>
          <Route path="/game" render={props => {
            return  <div>
                      <Header username={this.state.user.name} logOutFunction={this.logoutUser}/>
                      <Game/>
                    </div>}}/>
        </div>
      </BrowserRouter>
    )
  }
}

/* Think about storing some client-side state here */
let user = {
  username: '',
  email: '',
};

render(<MyApp/> ,document.getElementById('mainDiv'));
