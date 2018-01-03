'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { ProjectBody }          from './projectBody';
import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
/*************************************************************************/

class Vmil extends Component {
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
          name = {"vmil"}
          github = {"https://anchorlink.vanderbilt.edu/organization/medicalinnovationlab"}
          link = {"https://anchorlink.vanderbilt.edu/organization/medicalinnovationlab"}
          projectBannerImage = {"https://farm5.staticflickr.com/4730/24528195987_e6fe7c7804_b.jpg"}
          properName = {"Vanderbilt Medical Innovation Laboratory"}
          description = {"Lorem Ipsum"}
        />
      </div>
    )
  }
}

export default withRouter(Vmil);
