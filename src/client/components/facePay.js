'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { ProjectBody }          from './projectBody';
import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
/*************************************************************************/

class FacePay extends Component {
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
            name = {"facePay"}
            github = {"https://github.com/vu-cs4288-f17/assignment6-bbroderick7"}
            link = {"https://mighty-plateau-52681.herokuapp.com/"}
            projectBannerImage = {"https://farm5.staticflickr.com/4729/38706264574_a87215a1fa_b.jpg"}
            properName = {"FacePay"}
            description = {"Lorem Ipsum"}
            />
      </div>
    )
  }
}

export default withRouter(FacePay);
