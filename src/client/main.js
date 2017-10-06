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

class MyApp extends Component {}

/* Think about storing some client-side state here */
let user = {};

render(
  <BrowserRouter>
    <div>
      <Route exact path="/" render={props => {
        return  <div>
                  <Header/>
                  <Landing/>
                </div>}}/>
      <Route path="/login" render={props => {
        return  <div>
                    <Header/>
                    <Login/>
                </div>}}/>
      <Route path="/register" render={props => {
        return  <div>
                    <Header/>
                    <Register/>
                </div>}}/>
    <Route path="/profile" render={props => {
      return  <div>
                  <Header/>
                  <Profile/>
              </div>}}/>
    <Route path="/results" render={props => {
      return  <div>
                <Header/>
                <Results/>
              </div>}}/>
    <Route path="/start" render={props => {
      return  <div>
                <Header/>
                <Start/>
              </div>}}/>
    <Route path="/game" render={props => {
      return  <div>
                <Header/>
                <Game/>
              </div>}}/>
  </div>
  </BrowserRouter>,
  document.getElementById('mainDiv'));
