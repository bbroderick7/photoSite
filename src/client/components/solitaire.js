'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { ProjectBody }          from './projectBody';
import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
/*************************************************************************/

class Solitaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryPhotos: []
    }
  }
  render() {
    return(
      <div className="outerDiv contentDiv col-xs-12">
        <NavBar selector={"projects-navbar"}/>
        <ProjectBody
            name = {"solitaire"}
            github = {"https://github.com/vu-cs4288-f17/assignment6-bbroderick7"}
            link = {"https://mighty-plateau-52681.herokuapp.com/"}
            projectBannerImage = {"https://farm5.staticflickr.com/4681/38674111074_ba6eb9e131_b.jpg"}
            properName = {"Solitaire"}
            description = {"A single player klondike solitaire game that allows 1 and 3 card draw. All games moves are recorded and results can be viewed through a player created profile. Uses github OAuth for player signin and includes a game solver"}
            tech = {"Mongo, Mongoose, Redis, Node, Express, React, Bootstrap, Passport.js"}
            />
      </div>
    )
  }
}

export default withRouter(Solitaire);
