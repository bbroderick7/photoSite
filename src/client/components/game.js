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
    if(this.props.up === false){
      return `/images/backOfCard.png`
    }
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
      <div className={this.props.className}>
        <img className="cardImage" src={cardFile}/>
      </div>
    )
  }
}

class Pile extends Component {
  constructor(props){
    super(props);
    this.cardList = this.cardList.bind(this);
  }

  cardList(){
    let pileCardClass = "pile-Card-Class"
    this.props.pile.reverse();
    return this.props.pile.map((cardCur, index) => {
      if(index == 0){
        pileCardClass = '';
      }else{
        pileCardClass = "pile-Card-Class"
      }
      return <Card key={index} value={cardCur.value} suite={cardCur.suite} up={cardCur.up} className={pileCardClass}/>
    })
  }

  render(){
    return(
      <div className="card-pile-outer">
        {this.cardList()}
      </div>
    )
  }
}

class PileLayout extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="row">
        <div className= "col-xs-1 card-pile-outer">
          <Pile pile={this.props.myPiles.pile1}/>
        </div>
        <div className= "col-xs-1 card-pile-outer">
          <Pile pile={this.props.myPiles.pile2}/>
        </div>
        <div className= "col-xs-1 card-pile-outer">
          <Pile pile={this.props.myPiles.pile3}/>
        </div>
        <div className= "col-xs-1 card-pile-outer">
          <Pile pile={this.props.myPiles.pile4}/>
        </div>
        <div className= "col-xs-1 card-pile-outer">
          <Pile pile={this.props.myPiles.pile5}/>
        </div>
        <div className= "col-xs-1 card-pile-outer">
          <Pile pile={this.props.myPiles.pile6}/>
        </div>
        <div className= "col-xs-1 card-pile-outer">
          <Pile pile={this.props.myPiles.pile7}/>
        </div>
      </div>
    )
  }
}

class CardStack extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col-xs-1">
        <div className="card-stack-border">
          <Card className="card-stack" up={false}/>
        </div>
      </div>
    )
  }
}

class DrawStack extends Component {
  constructor(props){
    super(props);
    this.makeDrawCards = this.makeDrawCards.bind(this);
  }

  makeDrawCards(){
    let dCard = `draw-card`
    return(
      this.props.draw.map((drawCard, index) => {
        return <Card key={index} value={drawCard.value} suite={drawCard.suite} up={false} className={dCard}/>
      })
    )
  }

  render(){
    return(
      <div className="col-xs-1">
        {this.makeDrawCards()}
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

  getGameID(){
    return window.location.href.slice(window.location.href.indexOf('game/')+5);
  }

  componentDidMount() {
    $.ajax({
      url: `/v1/game/${this.getGameID()}`,
      method: 'GET',
    }).then((data) => { this.setState({ gameStatus: data })})
  }

  render(){
    let myPi = this.state.gameStatus
    if(myPi != ''){
      return(
        <div>
          <div className="row top-card-row">
            <div className="col-xs-1"></div>
            <DrawStack draw={this.state.gameStatus.draw} />
            <CardStack/>
            <div className="col-xs-4"></div>
            <CardStack/>
            <CardStack/>
            <CardStack/>
            <CardStack/>
          </div>
          <div className="row">
            <div className="col-xs-4"></div>
            <PileLayout myPiles={this.state.gameStatus}/>
          </div>
        </div>
      )
    }else{
      return(<h1>Please Wait</h1>)
    }
  }
}

export default withRouter(Game);
