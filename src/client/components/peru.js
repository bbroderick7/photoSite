'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
/*************************************************************************/

class Peru extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="outerDiv contentDiv col-xs-12">
        <NavBar selector={"stills-navbar"}/>
        <div className="row photo-container">
          <SubheaderNav selected={'peru'} subheadings={["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"]}/>
        </div>
      </div>
    )
  }
}

export default withRouter(Peru);
