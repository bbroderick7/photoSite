"use strict";

import React, { Component }     from 'react';
import { render }               from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Header                   from './components/header';
import Landing                  from './components/landing';
import Projects                 from './components/projects';
import Logout                   from './components/logout';
import Stills                   from './components/stills';
import About                    from './components/about';
import Deloache                 from './components/deloache';
import Jackson                  from './components/jackson';
import Concertify               from './components/concertify';
import BlackStar                from './components/blackstar';
import FacePay                  from './components/facePay';
import Solitaire                from './components/solitaire';
import Vmil                     from './components/vmil';
import Vutensils                from './components/vutensils';
import GalleryPage              from './components/galleryPage';

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
                      <Header/>
                      <About/>
                    </div>}}/>
          <Route exact path="/projects" render={props => {
            return  <div>
                      <Header/>
                      <Projects/>
                    </div>}}/>
          <Route exact path="/projects/concertify" render={props => {
            return  <div>
                      <Header/>
                      <Concertify/>
                    </div>}}/>
          <Route exact path="/projects/blackstar" render={props => {
            return  <div>
                      <Header/>
                      <BlackStar/>
                    </div>}}/>
          <Route exact path="/projects/facePay" render={props => {
            return  <div>
                      <Header/>
                      <FacePay/>
                    </div>}}/>
          <Route exact path="/projects/solitaire" render={props => {
            return  <div>
                      <Header/>
                      <Solitaire/>
                    </div>}}/>
          <Route exact path="/projects/vmil" render={props => {
            return  <div>
                      <Header/>
                      <Vmil/>
                    </div>}}/>
          <Route exact path="/projects/vutensils" render={props => {
            return  <div>
                      <Header/>
                      <Vutensils/>
                    </div>}}/>
          <Route path="/stills/deloache" render={props => {
            return  <div>
                      <Header/>
                      <Deloache/>
                    </div>}}/>
          <Route path="/stills/moab" render={props => {
            return  <div>
                      <Header/>
                      <GalleryPage galleryName={this.galleries.moab.name} galleryUrl={this.galleries.moab.url}/>
                    </div>}}/>
          <Route path="/stills/bolivia" render={props => {
            return  <div>
                      <Header/>
                      <GalleryPage galleryName={this.galleries.bolivia.name} galleryUrl={this.galleries.bolivia.url}/>
                    </div>}}/>
          <Route path="/stills/experiment" render={props => {
            return  <div>
                      <Header/>
                      <GalleryPage galleryName={this.galleries.experiment.name} galleryUrl={this.galleries.experiment.url}/>
                    </div>}}/>
          <Route exact path="/stills/peru" render={props => {
            return  <div>
                      <Header/>
                      <GalleryPage galleryName={this.galleries.peru.name} galleryUrl={this.galleries.peru.url}/>
                    </div>}}/>
          <Route exact path="/stills/jackson" render={props => {
            return  <div>
                      <Header/>
                      <Jackson/>
                    </div>}}/>
          <Route exact path="/stills/nashville" render={props => {
            return  <div>
                      <Header/>
                      <GalleryPage galleryName={this.galleries.nashville.name} galleryUrl={this.galleries.nashville.url}/>
                    </div>}}/>
          <Route exact path="/stills/colorado" render={props => {
            return  <div>
                        <Header/>
                        <GalleryPage galleryName={this.galleries.colorado.name} galleryUrl={this.galleries.colorado.url}/>
                    </div>}}/>
          <Route exact path="/stills" render={props => {
            return  <div>
                      <Header/>
                      <Stills/>
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
