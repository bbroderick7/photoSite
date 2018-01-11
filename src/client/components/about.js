'use strict';
import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { NavBar }               from './navBar';
/*************************************************************************/

class About extends Component {
  constructor(props) { super(props) }

  render() {
    return(
      <div className="outerDiv contentDiv col-xs-12">
        <NavBar selector={"about-navbar"}/>
        <div className="row">
          <div className="col-md-offset-3 col-xs-6" id="personal-photo"></div>
          <div className="col-xs-8"> <h1>hey my name is brendan broderick</h1> </div>
        </div>
      </div>
    )
  }
}

export default withRouter(About);
