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
import GalleryInformation       from './data/gallery';

// Bring app CSS into the picture
require('./app.css');
/*************************************************************************/

class MyApp extends Component {
  constructor(props){
    super(props),
    this.galleries = GalleryInformation.galleries,
    this.galleryNames = GalleryInformation.galleryNames
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
                      <GalleryPage galleryName={this.galleries.moab.name} galleryUrl={this.galleries.moab.url} galleryList={ this.galleryNames }/>
                    </div>}}/>
          <Route path="/stills/bolivia" render={props => {
            return  <div>
                      <Header/>
                      <GalleryPage galleryName={this.galleries.bolivia.name} galleryUrl={this.galleries.bolivia.url} galleryList={ this.galleryNames }/>
                    </div>}}/>
          <Route path="/stills/experiment" render={props => {
            return  <div>
                      <Header/>
                      <GalleryPage galleryName={this.galleries.experiment.name} galleryUrl={this.galleries.experiment.url} galleryList={ this.galleryNames }/>
                    </div>}}/>
          <Route exact path="/stills/peru" render={props => {
            return  <div>
                      <Header/>
                      <GalleryPage galleryName={this.galleries.peru.name} galleryUrl={this.galleries.peru.url} galleryList={ this.galleryNames }/>
                    </div>}}/>
          <Route exact path="/stills/jackson" render={props => {
            return  <div>
                      <Header/>
                      <Jackson/>
                    </div>}}/>
          <Route exact path="/stills/nashville" render={props => {
            return  <div>
                      <Header/>
                      <GalleryPage galleryName={this.galleries.nashville.name} galleryUrl={this.galleries.nashville.url} galleryList={ this.galleryNames }/>
                    </div>}}/>
          <Route exact path="/stills/colorado" render={props => {
            return  <div>
                        <Header/>
                        <GalleryPage galleryName={this.galleries.colorado.name} galleryUrl={this.galleries.colorado.url} galleryList={ this.galleryNames }/>
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

render(<MyApp/> ,document.getElementById('mainDiv'));
