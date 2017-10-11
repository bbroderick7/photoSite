/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { withRouter }           from 'react-router';

/*************************************************************************/


const ErrorMsg = () => <div className="center-block">
                        <p id="errorMsg" className="bg-danger"></p>
                      </div>

const NewGameHeader = () => <h4>Create New Game</h4>

class GameOption extends Component {
  constructor(props) {
    super(props);
    this.optionID = this.props.gameOption.toLowerCase();
    this.defaultOption = this.defaultOption.bind(this);
  }

  defaultOption(){
    if(this.optionID == 'klondyke'){
      return (<input type="radio" name="game" id={this.optionID} value={this.optionID} defaultChecked/>)
    }else{
      return (<input type="radio" name="game" id={this.optionID} value={this.optionID}/>)
    }
  }

  render(){
    return(
      <div className="radio">
        <label>
          {this.defaultOption()}
          {this.props.gameOption}
        </label>
      </div>
    )
  }
}

class GamePicker extends Component {
  constructor(props) {
    super(props)
  }

  paintGameTypes(){
    let options = ["Klondyke", "Pyramid", "Canfield", "Golf", "Yukon", "Hearts"];
    return(
      options.map((option, index) => {
        return <GameOption key={index} gameOption={option}/>
    }))
  }

  render(){
    return(
      <div className="form-group col-xs-4">
        {this.paintGameTypes()}
      </div>
    )
  }
}

class CardDrawOptions extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="col-xs-12">
        <label className="control-label" htmlFor="draw">Draw:</label>
        <select id="draw" name="draw" className="form-control">
          <option>Draw 1</option>
          <option>Draw 3</option>
        </select>
      </div>
    )
  }
}

class CardColorOptions extends Component {
  constructor(props) {
    super(props)
  }

  paintOptions(){
    return this.props.options.map((opt, index) => {
      return <option key={index}>{opt}</option>
    })
  }

  render(){
    return(
      <div className="col-xs-12">
        <label className="control-label" htmlFor="color">Card Color:</label>
        <select id="color" name="color" className="form-control">
          {this.paintOptions()}
        </select>
      </div>
    )
  }
}

class GameOptions extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="form-group col-xs-8">
        <div className="row">
          <CardDrawOptions/>
          <CardColorOptions options={["Red", "Green", "Blue", "Magical"]}/>
        </div>
      </div>
    )
  }
}

class GameForm extends Component {
  constructor(props) {
    super(props)
  }

  onStart(event) {
      event.preventDefault();
      let gameType = $("input[name='game']:checked").val();
      const data = {
          game: gameType,
          draw: '1',
          color: 'red'
      };
      $.ajax({
          url: "/v1/game",
          method: "post",
          data: data,
          success: function(data) {
              window.location = `/game/${data.id}`;
          },
          error: function(err) {
              let errorEl = document.getElementById('errorMsg');
              errorEl.innerHTML = `Error: ${err.responseJSON.error}`;
          }
      });
  }

  render(){
    return(
      <form className="form-horizontal" action="/start" method="post">
        <GamePicker/>
        <GameOptions/>
        <div className="form-group col-xs-12">
          <button id="submitBtn" className="btn btn-default" onClick={this.onStart} >Start</button>
        </div>
      </form>
    )
  }

}

class Start extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      if(this.props.username == ''){
        window.location = `/login`;
        return;
      }
      return(
        <div>
          <div className="row">
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              <ErrorMsg />
              <NewGameHeader/>
              <GameForm/>
            </div>
          </div>
        </div>
      )
    }
}

export default withRouter(Start);
