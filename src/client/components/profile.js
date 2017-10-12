/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }             from 'react';
import { Link, withRouter }             from 'react-router-dom';
import { GravHash }                     from './header';

/*************************************************************************/

const ProfileInformation = (props) => <div className="col-xs-6">
        <p id="username">{props.playerInfo.username}</p>
        <p id="first_name">{props.playerInfo.first_name}</p>
        <p id="last_name">{props.playerInfo.last_name}</p>
        <p id="city">{props.playerInfo.city}</p>
        <p id="primary_email">{props.playerInfo.primary_email}</p>
      </div> ;

const ProfileLabels = () => <div className="col-xs-6 text-right">
            <p><b>Username:</b></p>
            <p><b>First Name:</b></p>
            <p><b>Last Name:</b></p>
            <p><b>City:</b></p>
            <p><b>Email Address:</b></p>
          </div>;

const ProfileHeader = (props) => {
  let displayEditProfile = () => {
    if(props.profileUsername == props.loggedInUsername){
      return <div><h5><Link to="/edit">Edit Profile</Link></h5></div>;
    }else{
      return null;
    }
  }

  return <div className="col-xs-2" id="profile-header">
      <h4>Player Profile</h4>
      {displayEditProfile()}
    </div> ;
}

const StartNewGameLink = (loggedin) => {
  if(loggedin.loggedin){
    return <Link to="/start" id="startLink">Start new game</Link>
  }else{
    return <div></div>
  }
}

const GameTally = (props) => <h4 id="games_count">Games Played ({props.numGames}):</h4> ;

const ProfileImage = (props) => <div className="col-xs-1"><img src={props.imgSrc}/></div>;

const ErrorBox = () => <div className="center-block">
      <p id="errorMsg" className="bg-danger"></p>
    </div>;


const GameTableHead = (props) => {
  let makeHeaders = () => {
    let headers = ["Status", "Start Date", "# of moves", "Score", "Game Type"];
    return headers.map((header, index) => {
        return <th key={index}>{header}</th>
      })
  }
  return <thead><tr>{makeHeaders()}</tr></thead>;
}

const GameTableBody = (props) => {
  let paintGames = () => {
    if(props.gameInfo == ''){
      return '';
    }else{
      return props.gameInfo.map((game, index) => {
        return (<tr key={index}>
                  <td><a href={game.active? `/game/${game.id}` :`/results/${game.id}`}>{game.active? 'Active' : 'Complete'}</a></td>
                  <td>{game.duration}</td>
                  <td>{game.moves}</td>
                  <td>{game.score}</td>
                  <td >{game.game}</td>
                </tr>)
      })
    }
  }
  return <tbody id="games">{paintGames()}</tbody> ;
}

const GameTable = (props) => {
    return <table id="gameTable" className="col-xs-12 table">
        <GameTableHead/>
        <GameTableBody gameInfo={props.gameInfo}/>
      </table>;
}


class Profile extends Component {
  constructor(props){
    super(props);
    this.pageUserName = this.getUrlVars();
    this.loggedInUsername = this.props.username;
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
          <ProfileHeader profileUsername={this.state.playerInformation==''? '' : this.state.playerInformation.username} loggedInUsername={this.props.username? this.props.username : ''} />
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
              <GameTable gameInfo={this.state.playerInformation==''? '' : this.state.playerInformation.games}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile);
