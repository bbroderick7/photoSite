/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { withRouter }           from 'react-router';

/*************************************************************************/

class Register extends Component {
  constructor(props) {
    super(props)
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
                      <label className="col-sm-2 control-label" htmlFor="first_name">First Name:</label>
                      <div className="col-sm-10">
                          <input className="form-control" id="first_name" name="first_name" type="text" placeholder="First Name"/>
                      </div>
                  </div>
                  <div className="form-group">
                      <label className="col-sm-2 control-label" htmlFor="last_name">Last Name:</label>
                      <div className="col-sm-10">
                          <input className="form-control" id="last_name" name="last_name" type="text" placeholder="Last Name"/>
                      </div>
                  </div>
                  <div className="form-group">
                      <label className="col-sm-2 control-label" htmlFor="city">City:</label>
                      <div className="col-sm-10">
                          <input className="form-control" id="city" name="city" type="text" placeholder="City"/>
                      </div>
                  </div>
                  <div className="form-group">
                      <label className="col-sm-2 control-label" htmlFor="primary_email">Email:</label>
                      <div className="col-sm-10">
                          <input className="form-control" id="primary_email" name="primary_email" type="email" placeholder="Email Address"/>
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
                          <button id="submitBtn" className="btn btn-default">Register</button>
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

export default withRouter(Register);
