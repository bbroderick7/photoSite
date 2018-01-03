'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { ProjectBody }          from './projectBody';
import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
/*************************************************************************/

class Vutensils extends Component {
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
          name = {"vutensils"}
          github = {"https://github.com/bbroderick7/VUtensils"}
          link = {"http://vutensils.com/"}
          projectBannerImage = {"https://farm5.staticflickr.com/4598/39382218661_4ee073dca7_b.jpg"}
          properName = {"VUtensils"}
          description = {"Lorem Ipsum"}
        />
      </div>
    )
  }
}

export default withRouter(Vutensils);
