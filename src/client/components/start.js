/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { withRouter }           from 'react-router';

/*************************************************************************/

class Start extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return(
        <div>
          <div className="row">
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
              <div className="center-block">
                <p id="errorMsg" className="bg-danger"></p>
              </div>
              <h4>Create New Game</h4>
              <form className="form-horizontal" action="/start" method="post">
                <div className="form-group col-xs-4">
                  <div className="radio">
                    <label>
                      <input type="radio" name="game" id="klondyke" value="klondyke" defaultChecked/>
                      Klondyke
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="game" id="pyramid" value="pyramid"/>
                      Pyramid
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="game" id="canfield" value="canfield"/>
                      Canfield
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="game" id="golf" value="golf"/>
                      Golf
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="game" id="yukon" value="yukon"/>
                      Yukon
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="game" id="hearts" value="hearts"/>
                      Hearts
                    </label>
                  </div>
                </div>

                <div className="form-group col-xs-8">
                  <div className="row">
                    <div className="col-xs-12">
                      <label className="control-label" htmlFor="draw">Draw:</label>
                      <select id="draw" name="draw" className="form-control">
                        <option>Draw 1</option>
                        <option>Draw 3</option>
                      </select>
                    </div>
                    <div className="col-xs-12">
                      <label className="control-label" htmlFor="color">Card Color:</label>
                      <select id="color" name="color" className="form-control">
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Magical</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group col-xs-12">
                  <button id="submitBtn" className="btn btn-default">Start</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
}

export default withRouter(Start);
