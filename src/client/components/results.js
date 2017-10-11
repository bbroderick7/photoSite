/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';

import React, { Component }         from 'react';
import { withRouter, Link }         from 'react-router-dom';

/*************************************************************************/


const GameInfoLables = (labels) => {
  let labelMap = labels.labels.map((label, index) => {
        return <p key={index}><b>{label}</b></p>
      })
  return <div className="col-xs-3 text-right"> {labelMap} </div>
}

class GameInformation extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col-xs-6">
        <p id="duration">{this.props.information.time}</p>
        <p id="moves">{this.props.information.moves}</p>
        <p id="points">{this.props.information.score}</p>
        <p id="remaining">{this.props.information.cards}</p>
        <p id="active">{this.props.information.active}</p>
      </div>
    )
  }
}

const ResultsTableHead = (headers) => {
  let headerLabels = headers.headers.map((header, index) => {
    return <th key={index}>{header}</th>
  })
  return <thead><tr>{headerLabels}</tr></thead>
}

class ResultsTable extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <table id="gameTable" className="col-xs-12 table">
        <ResultsTableHead headers={["Id", "Duration", "Player", "Move Details"]}/>
        <tbody></tbody>
      </table>
    )
  }
}

const ErrorMsg = () => <div className="center-block">
                        <p id="errorMsg" className="bg-danger"></p>
                      </div>

const GameHeader = () => <div className="col-xs-2"><h4>Game Detail</h4></div>


class Results extends Component {
  constructor(props) {
    super(props);
    this.gameID = this.getGameID()
    this.state = {
      gameInformation: ''
    }
  }

  getGameID(){
        return window.location.href.slice(window.location.href.indexOf('game/')+5);
  }

  componentDidMount(){
    $.ajax({
        url: `/v1/game/${this.gameID}`,
        method: "get",
    }).then(data => {this.setState({gameInformation: data})});
  }

  render() {
    return(
      <div>
        <div className="row">
          <ErrorMsg/>
          <GameHeader/>
          <div className="col-xs-10">
            <div className="row">
              <GameInfoLables labels={["Duration:", "Number of Moves:", "Points:", "Cards Remaining:", "Able to Move:"]}/>
              <GameInformation information={this.state.gameInformation}/>
            </div>
            <div className="row">
              <ResultsTable/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
//component did mount

export default withRouter(Results);
