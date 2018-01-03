'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { ProjectBody }          from './projectBody';
import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
/*************************************************************************/

class BlackStar extends Component {
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
            name = {"blackstar"}
            github = {"https://github.com/bbroderick7/concertify"}
            link = {"https://cs4278-concertify.herokuapp.com/"}
            projectBannerImage = {"https://farm5.staticflickr.com/4643/38674111994_d184fdcc52_b.jpg"}
            properName = {"Black Star Rentals"}
            description = {"Lorem Ipsum"}
            />
      </div>
    )
  }
}

export default withRouter(BlackStar);
