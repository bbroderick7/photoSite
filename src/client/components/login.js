/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';

/*************************************************************************/

const LoginFormField = (props) => {
    let fieldID = props.fieldName.toLowerCase();
    return( <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor={fieldID}>{props.fieldName}:</label>
          <div className="col-sm-10">
              <input className="form-control" id={fieldID} name={fieldID} type={(fieldID=="password")? "password": "text"} placeholder={props.fieldName}/>
          </div>
      </div>)
}

class LoginSubmitBtn extends Component {
  constructor(props) {
    super(props);
    this.attemptLogin = this.attemptLogin.bind(this);
  }

  attemptLogin(event) {
      event.preventDefault();
      const data = {
          username: document.getElementById('username').value,
          password: document.getElementById('password').value
      };
      $.ajax({
          url: "/v1/session",
          method: "post",
          data: data,
          success: (data) => {
              this.props.setGameAndUserState(data.username, data.primary_email);
              console.log(data.username);
              window.location = `/profile/${data.username}`;
          },
          error: function(err) {
              let errorEl = document.getElementById('errorMsg');
              errorEl.innerHTML = `Error: ${err.responseJSON.error}`;
          }
      });
    return false;
  }

  render() {
    return(
      <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button id="submitBtn" className="btn btn-default" onClick={this.attemptLogin} >Login</button>
          </div>
      </div>
    )
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form-horizontal">
          <LoginFormField fieldName="Username"/>
          <LoginFormField fieldName="Password"/>
          <LoginSubmitBtn setGameAndUserState={this.props.setGameAndUserState}/>
      </form>
    )
  }
}

const ErrorBox = () => <div className="center-block">
      <p id="errorMsg" className="bg-danger"></p>
    </div>;

class Login extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="row">
          <div className="col-xs-2"></div>
          <div className="col-xs-8">
              <ErrorBox/>
              <LoginForm setGameAndUserState={this.props.setGameAndUserState}/>
          </div>
          <div className="col-xs-2"></div>
      </div>
    )
  }
}

export default withRouter(Login);
