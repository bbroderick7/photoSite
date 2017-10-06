/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';

/*************************************************************************/

class Login extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <div className="row">
          <div className="col-xs-2"></div>
          <div className="col-xs-8">
              <div className="center-block">
                  <p id="errorMsg" className="bg-danger"></p>
              </div>
              <form className="form-horizontal">
                  <div className="form-group">
                      <label className="col-sm-2 control-label" htmlFor="username">Username:</label>
                      <div className="col-sm-10">
                          <input className="form-control" id="username" name="username" type="text" placeholder="Username"/>
                      </div>
                  </div>
                  <div className="form-group">
                      <label className="col-sm-2 control-label" htmlFor="password">Password:</label>
                      <div className="col-sm-10">
                          <input className="form-control" id="password" name="password" type="password" placeholder="Password"/>
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                          <button id="submitBtn" className="btn btn-default">Login</button>
                      </div>
                  </div>
              </form>
          </div>
          <div className="col-xs-2"></div>
      </div>
      </div>
    )
  }
}

export default withRouter(Login);
