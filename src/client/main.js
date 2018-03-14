"use strict";

import React, { Component }     from 'react';
import { render }               from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Header                   from './components/header';
import Landing                  from './components/landing';
import LandingTwo               from './components/landingTwo';
import Projects                 from './components/projects';
import ProjectPage              from './components/projectPage';
import Stills                   from './components/stills';
import About                    from './components/about';
import Deloache                 from './components/deloache';
import Jackson                  from './components/jackson';
import GalleryPage              from './components/galleryPage';

import GalleryInformation       from './data/gallery';
import ProjectInformation       from './data/projects';

require('./app.css');
/*************************************************************************/

class MyApp extends Component {
  constructor(props){
    super(props),
    this.galleries = GalleryInformation.galleries,
    this.galleryNames = GalleryInformation.galleryNames,
    this.projects = ProjectInformation.projects,
    this.projectNames = ProjectInformation.projectNames
  }

  render(){
    let currentProjects = this.projectNames.map(proj =>
      <Route exact path={ `/projects/${proj}` } render={ () => <div>
        <Header/>
        <ProjectPage project={ this.projects[proj] }/>
      </div> }/>)

    let currentGalleries = this.galleryNames.map(gall =>
      <Route path={ `/stills/${gall}` } render={ () => <div>
          <Header/>
          <GalleryPage galleryInfo={this.galleries[gall]} galleryList={ this.galleryNames }/>
        </div>}/>)

    let landingPage = window.innerWidth < 1000 ? <Landing/> : <LandingTwo/>

    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" render={ () => landingPage }/>
          <Route exact path="/two" render={ () => <LandingTwo/> }/>
          <Route exact path="/about" render={ () => <div>
              <Header/>
              <About/>
            </div> }/>
          <Route exact path="/projects" render={ () => <div>
              <Header/>
              <Projects/>
            </div> }/>
          <Route exact path="/stills" render={ () => <div>
              <Header/>
              <Stills/>
            </div> }/>

          { currentProjects }

          { currentGalleries }

        </div>
      </BrowserRouter>
    )
  }
}

render(<MyApp/> ,document.getElementById('mainDiv'));
