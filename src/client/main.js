"use strict";

import React, { Component }     from 'react';
import { render }               from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Header                   from './components/header';
import Landing                  from './components/landing';
import Projects                 from './components/projects';
import Logout                   from './components/logout';
import Peru                     from './components/peru';
import Stills                   from './components/stills';
import About                    from './components/about';
import Deloache                 from './components/deloache';
import Experiment               from './components/experiment';
import Jackson                  from './components/jackson';
import Nashville                from './components/nashville';
import Bolivia                  from './components/bolivia';
import Colorado                 from './components/colorado';
import Moab                     from './components/moab';
import Concertify               from './components/concertify';
import BlackStar                from './components/blackstar';
import FacePay                  from './components/facePay';
import Solitaire                from './components/solitaire';
import Vmil                     from './components/vmil';
import Vutensils                from './components/vutensils';
import GalleryPage              from './components/galleryPage';
import Game                     from './components/game';

// Bring app CSS into the picture
require('./app.css');
/*************************************************************************/

class MyApp extends Component {
  constructor(props){
    super(props)
    this.galleries = {
      bolivia: {
        name: "bolivia",
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157690236053501&user_id=148642232%40N07&format=json&nojsoncallback=1"
      },
      peru: {
        name: "peru",
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157668110748089&user_id=148642232%40N07&format=json&nojsoncallback=1"
      },
      moab: {
        name: "moab",
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157689047067132&user_id=148642232%40N07&format=json&nojsoncallback=1"
      },
      jackson: {
        name: "jackson",
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157688849867972&user_id=148642232%40N07&format=json&nojsoncallback=1"
      },
      colorado: {
        name: "colorado",
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157667919986069&user_id=148642232%40N07&format=json&nojsoncallback=1"
      },
      nashville: {
        name: "nashville",
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157691652131015&user_id=148642232%40N07&format=json&nojsoncallback=1"
      },
      experiment: {
        name: "experiment",
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157677942277644&user_id=148642232%40N07&format=json&nojsoncallback=1"
      }
    }
    this.state={
        user: {
          username: this.getCookieVal(document.cookie, "username"),
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

  setGameAndUserState(username, email){
    this.deleteLeftOverCookies();
    this.setState({user: {username: username, email: email}});
    document.cookie = `username=${username}`;
    document.cookie = `email=${email}`;
  }

  logoutUser(){
    this.deleteLeftOverCookies();
    this.setState({user: {username: '', email: ''}});
  }

  render(){
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" render={props => {
            return  <div>
                      <Landing/>
                    </div>}}/>
          <Route exact path="/about" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <About setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route exact path="/projects" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Projects setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route exact path="/projects/concertify" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Concertify setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route exact path="/projects/blackstar" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <BlackStar setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route exact path="/projects/facePay" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <FacePay setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route exact path="/projects/solitaire" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Solitaire setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route exact path="/projects/vmil" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Vmil setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route exact path="/projects/vutensils" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Vutensils setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route path="/stills/deloache" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Deloache setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route path="/stills/moab" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Moab setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route path="/stills/bolivia" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Bolivia setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route path="/stills/trial" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <GalleryPage galleryName={this.galleries.bolivia.name} galleryUrl={this.galleries.bolivia.url}/>
                    </div>}}/>
          <Route path="/stills/experiment" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Experiment setGameAndUserState = {this.setGameAndUserState} username={this.state.user.username}/>
                    </div>}}/>
          <Route exact path="/stills/peru" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Peru/>
                    </div>}}/>
          <Route exact path="/stills/jackson" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Jackson/>
                    </div>}}/>
          <Route exact path="/stills/nashville" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Nashville/>
                    </div>}}/>
          <Route exact path="/stills/colorado" render={props => {
            return  <div>
                        <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                        <Colorado/>
                    </div>}}/>
          <Route exact path="/stills" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
                      <Stills/>
                    </div>}}/>
          <Route path="/game" render={props => {
            return  <div>
                      <Header user={this.state.user} logOutFunction={this.logoutUser}/>
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
