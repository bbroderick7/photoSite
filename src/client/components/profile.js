/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }             from 'react';
import { Link, withRouter }             from 'react-router-dom';
import { GravHash }                     from './header';

/*************************************************************************/

class Profile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="center-block">
            <p id="errorMsg" className="bg-danger"></p>
          </div>
          <div className="col-xs-2" id="profile-header"><h4>Player Profile</h4></div>
          <div className="col-xs-8">
            <div className="row">
              <div className="col-xs-1">
                <img src="https://gravatar.com/avatar/008a6815971c21022090fdcc33511165?size=100"/>
              </div>
              <div className="col-xs-11">
                <div className="col-xs-6 text-right">
                  <p><b>Username:</b></p>
                  <p><b>First Name:</b></p>
                  <p><b>Last Name:</b></p>
                  <p><b>City:</b></p>
                  <p><b>Email Address:</b></p>
                </div>
                <div className="col-xs-6">
                  <p id="username"></p>
                  <p id="first_name"></p>
                  <p id="last_name"></p>
                  <p id="city"></p>
                  <p id="primary_email"></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h4 id="games_count">Games Played (7):</h4>
                <a id="startLink" href="/start.html">Start new game</a>
              </div>
              <table id="gameTable" className="col-xs-12 table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th># of moves</th>
                    <th>Score</th>
                    <th>Game Type</th>
                  </tr>
                </thead>
                <tbody id="games"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile);
