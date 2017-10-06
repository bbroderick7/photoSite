/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';

import React, { Component }         from 'react';
import { withRouter, Link }         from 'react-router-dom';

/*************************************************************************/


class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="center-block">
            <p id="errorMsg" className="bg-danger"></p>
          </div>
          <div className="col-xs-2"><h4>Game Detail</h4></div>
          <div className="col-xs-10">
            <div className="row">
              <div className="col-xs-3 text-right">
                <p><b>Duration:</b></p>
                <p><b>Number of Moves:</b></p>
                <p><b>Points:</b></p>
                <p><b>Cards Remaining:</b></p>
                <p><b>Able to Move:</b></p>
              </div>
              <div className="col-xs-6">
                <p id="duration"></p>
                <p id="moves"></p>
                <p id="points"></p>
                <p id="remaining"></p>
                <p id="active"></p>
              </div>
            </div>
            <div className="row">
              <table id="gameTable" className="col-xs-12 table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Duration</th>
                    <th>Player</th>
                    <th>Move Details</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
//component did mount

export default withRouter(Results);
