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
    <MyApp user={user}/>,
    document.getElementById('mainDiv')
);
