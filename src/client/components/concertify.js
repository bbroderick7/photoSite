'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { ProjectBody }          from './projectBody';
import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
/*************************************************************************/

class Concertify extends Component {
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
          name = {"concertify"}
          github = {"https://github.com/bbroderick7/concertify"}
          link = {"https://cs4278-concertify.herokuapp.com/"}
          projectBannerImage = {"https://farm5.staticflickr.com/4691/39382218961_17f586df5e_b.jpg"}
          properName = {"Concertify"}
          description = {"Web Application that enables users to search for bands recent concert setlists and build spotify playlists based on the setlists. Spotify playlists are automatically saved to users Spotify account at the click of a button"}
          tech = {"React, Node, Material UI, Spotify OAuth & Passport.js, Setlist API"}
          />
      </div>
    )
  }
}

export default withRouter(Concertify);
