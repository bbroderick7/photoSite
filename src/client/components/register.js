/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { withRouter }           from 'react-router';

/*************************************************************************/

const RegistrationField = (props) => {
  let fieldID = (props.fieldName.toLowerCase()).replace(' ', '_');
  return <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor={fieldID}>{props.fieldName}:</label>
          <div className="col-sm-10">
              <input className="form-control" id={fieldID} name={fieldID} type={(fieldID=="password")? "password": "text"} placeholder={props.fieldName}/>
          </div>
      </div>;
}

class RegisterSubmitBtn extends Component {
  constructor(props){
    super(props);
    this.onRegister = this.onRegister.bind(this);
  }

  validPassword(password) {
      if (!password || password.length < 8) {
          return { error: 'password length must be > 7' };
      }
      else if (!password.match(/[0-9]/i)) {
          return { error: 'password must contain a number' };
      }
      else if (!password.match(/[a-z]/)) {
          return { error: 'password a lowercase letter' };
      }
      else if (!password.match(/\@|\!|\#|\$|\%|\^/i)) {
          return { error: 'password must contain @, !, #, $, % or ^' };
      }
      else if (!password.match(/[A-Z]/)) {
          return { error: 'password an uppercase letter' };
      }
      return undefined;
  }

  onRegister(event) {
      event.preventDefault();
      const data = {
          username:       document.getElementById('username').value,
          first_name:     document.getElementById('first_name').value,
          last_name:      document.getElementById('last_name').value,
          city:           document.getElementById('city').value,
          primary_email:  document.getElementById('primary_email').value,
          password:       document.getElementById('password').value
      };
      let $error = $('#errorMsg');
      let pwdInvalid = this.validPassword(data.password);
      if (!data.username || data.username.length > 16 || data.username.length < 6 || !data.username.match(/^[a-z0-9]+$/i)) {
          $error.html('Error: malformed username');
      } else if (pwdInvalid) {
          $error.html(`Error: ${pwdInvalid.error}`);
      } else if (!data.primary_email.match(/\@/) || !data.primary_email.match(/\./)) {
          $error.html(`Error: malformed email`);
      } else
          $.ajax({
          url: "/v1/user",
          method: "post",
          data: data,
          success: (data) => {
              this.props.setGameAndUserState(data.username, data.primary_email);
              window.location = `/profile/${data.username}`;
          },
          error:(err) => {
              let errorEl = document.getElementById('errorMsg');
              errorEl.innerHTML = `Error: ${err.responseJSON.error}`;
          }
      });
      return false;
  }

  render(){
    return(
      <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button id="submitBtn" className="btn btn-default" onClick={this.onRegister}>Register</button>
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
          <RegisterSubmitBtn setGameAndUserState={this.props.setGameAndUserState}/>
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
      <div className="row">
          <div className="col-xs-2"></div>
          <div className="col-xs-8">
              <div className="center-block">
                  <p id="errorMsg" className="bg-danger"></p>
              </div>
              <RegisterForm setGameAndUserState={this.props.setGameAndUserState}/>
          </div>
          <div className="col-xs-2"></div>
      </div>
    )
  }
}

export default withRouter(Register);
