/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { withRouter }           from 'react-router';

/*************************************************************************/

class RegistrationField extends Component {
  constructor(props){
    super(props);
    this.fieldID = (this.props.fieldName.toLowerCase()).replace(' ', '_');
  }

  render(){
    return(
      <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor={this.fieldID}>{this.props.fieldName}:</label>
          <div className="col-sm-10">
              <input className="form-control" id={this.fieldID} name={this.fieldID} type={(this.fieldID=="password")? "password": "text"} placeholder={this.props.fieldName}/>
          </div>
      </div>
    )
  }
}

class RegisterSubmitBtn extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button id="submitBtn" className="btn btn-default">Register</button>
          </div>
      </div>
    )
  }
}

class RegisterForm extends Component {
  constructor(props){
    super(props)
    this.paintRegistrationFields = this.paintRegistrationFields.bind(this);
  }

  paintRegistrationFields(){
    let fields = ["Username", "First Name", "Last Name", "City", "Primary Email", "Password"];
    return(
      fields.map((field, index) => {
        return <RegistrationField key={index} fieldName={field}/>
      })
    )
  }

  render(){
    return(
      <form className="form-horizontal">
          {this.paintRegistrationFields()}
          <RegisterSubmitBtn/>
      </form>
    )
  }
}

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
              <RegisterForm/>

          </div>
          <div className="col-xs-2"></div>
      </div>
      </div>
    )
  }
}

export default withRouter(Register);
