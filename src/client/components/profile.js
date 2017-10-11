/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }             from 'react';
import { Link, withRouter }             from 'react-router-dom';
import { GravHash }                     from './header';

/*************************************************************************/

class ProfileInformation extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col-xs-6">
        <p id="username">{this.props.playerInfo.username}</p>
        <p id="first_name">{this.props.playerInfo.first_name}</p>
        <p id="last_name">{this.props.playerInfo.last_name}</p>
        <p id="city">{this.props.playerInfo.city}</p>
        <p id="primary_email">{this.props.playerInfo.primary_email}</p>
      </div>
    )
  }
}

const ProfileLabels = () => <div className="col-xs-6 text-right">
            <p><b>Username:</b></p>
            <p><b>First Name:</b></p>
            <p><b>Last Name:</b></p>
            <p><b>City:</b></p>
            <p><b>Email Address:</b></p>
          </div>;

class ProfileHeader extends Component {
  constructor(props){
    super(props);
    this.displayEditProfile = this.displayEditProfile.bind(this);
  }

  displayEditProfile(){
    if(this.props.profileUsername == this.props.loggedInUsername){
      return <div><h5><Link to="/edit">Edit Profile</Link></h5></div>
    }else{
      return null
    }
  }

  render(){
    return(
      <div className="col-xs-2" id="profile-header">
        <h4>Player Profile</h4>
        {this.displayEditProfile()}
      </div>
    )
  }

}

const StartNewGameLink = (loggedin) => {
  if(loggedin.loggedin){
    return <Link to="/start" id="startLink">Start new game</Link>
  }else{
    return <div></div>
  }
}

class GameTally extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <h4 id="games_count">Games Played ({this.props.numGames}):</h4>
    )
  }
}

class ProfileImage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="col-xs-1">
        <img src={this.props.imgSrc}/>
      </div>
    )
  }
}

const ErrorBox = () => <div className="center-block">
      <p id="errorMsg" className="bg-danger"></p>
    </div>;


class GameTableHead extends Component {
  constructor(props){
    super(props)
    this.makeHeaders = this.makeHeaders.bind(this);
  }

  makeHeaders(){
    let headers = ["Status", "Start Date", "# of moves", "Score", "Game Type"]
    return headers.map((header, index) => {
        return <th key={index}>{header}</th>
      })
  }

  render(){
    return(
      <thead>
        <tr>
          {this.makeHeaders()}
        </tr>
      </thead>
    )
  }
}


class GameTable extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <table id="gameTable" className="col-xs-12 table">
        <GameTableHead/>
        <tbody id="games"></tbody>
      </table>
    )
  }
}


class Profile extends Component {
  constructor(props){
    super(props);
    this.pageUserName = this.getUrlVars();
    this.loggedInUsername = this.props.username;
    console.log(this.props.username);
    this.state = {
      playerInformation: ''
    }
  }

  getUrlVars() {
      return window.location.href.slice(window.location.href.indexOf('profile/')+8);
  }

  componentDidMount(){
    $.ajax({
        url: `/v1/user/${this.pageUserName}`,
        method: "get",
    }).then(data => {this.setState({playerInformation: data})});
  }

  componentWillReceiveProps(nextProps){
    console.log("Prop Comp");
    console.log(nextProps.username);
    //console.log(this.pageUserName);
    $.ajax({
        url: `/v1/user/${nextProps.username}`,
        method: "get",
    }).then(data => {this.setState({playerInformation: data})});
  }

  render() {
    return(
      <div>
        <div className="row">
          <ErrorBox/>
          <ProfileHeader profileUsername={this.pageUserName} loggedInUsername={this.props.username? this.props.username : ''} />
          <div className="col-xs-8">
            <div className="row">
              <ProfileImage imgSrc={this.state.playerInformation? GravHash(this.state.playerInformation.primary_email, 65) : ''}/>
              <div className="col-xs-11">
                <ProfileLabels/>
                <ProfileInformation playerInfo={this.state.playerInformation}/>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <GameTally numGames={this.state.playerInformation? this.state.playerInformation.games.length : 1}/>
                <StartNewGameLink loggedin={this.props.username==''? false : true}/>
              </div>
              <GameTable/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile);
