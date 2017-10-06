/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { withRouter }           from 'react-router';

/*************************************************************************/

class Card extends Component {
  constructor(props){
    super(props);
    this.getCardFile = this.getCardFile.bind(this);
  }

  getCardFile(){
    let cardVal = '';
    if(this.props.value > 10){
      let royals = ['jack', 'queen', 'king', 'ace', 'joker'];
      cardVal = royals[this.props.value - 11];
    }else{
      cardVal = this.props.value;
    }
    return `/images/${cardVal}_of_${this.props.suite}.png`
  }

  render(){
    let cardFile = this.getCardFile();
    return(
      <img src={cardFile}/>
    )
  }
}

class Pile extends Component {
  constructor(props){
    super(props);
    this.cardList = this.cardList.bind(this);
  }

  cardList(){
    return this.props.pile.map((cardCur, index) => {
      return <Card key={index} value={cardCur.value} suite={cardCur.suite}/>
    })
  }

  render(){
    return(
      <div>
        {this.cardList()}
      </div>
    )
  }
}

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      gameStatus: ''
    };
  }

  componentDidMount() {
    console.log('MOUNTED.');
    $.ajax({
      url: `/v1/cards/initial`,
      method: 'GET',
    }).then((data) => {
      this.setState({ gameStatus: data });
    })
  }

  render(){
    let myPi = this.state.gameStatus.pile6;
    console.log(myPi);
    if(myPi != undefined){
      return(
          <div>
            <Pile pile={myPi}/>
          </div>
      )
    }else{
      return(<h1>Please Wait</h1>)
    }

  }
}

export default withRouter(Game);
