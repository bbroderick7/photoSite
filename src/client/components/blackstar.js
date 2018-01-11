'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { ProjectBody }          from './projectBody';
import { NavBar }               from './navBar';
/*************************************************************************/

class BlackStar extends Component {
  constructor(props) {
    super(props);
    this.state = { galleryPhotos: [] }
  }
  render() {
    return(
      <div className="outerDiv contentDiv col-xs-12">
        <NavBar selector={"projects-navbar"}/>
        <ProjectBody
            name = {"blackstar"}
            github = {"https://github.com/bbroderick7"}
            link = {"http://blackstarrentals.com"}
            projectBannerImage = {"https://farm5.staticflickr.com/4643/38674111994_d184fdcc52_b.jpg"}
            properName = {"Black Star Rentals"}
            description = {"Black Star Rentals is a student-run dorm furnishing rental service provided to the Vanderbilt community. We make moving in and out hassle free and environmentally friendly, while also making dorms and off-campus apartments more comfortable. We rent the best brand new full-sized deluxe beds, twin-sized memory foam mattresses and deluxe futons on campus, and deliver them right to your door. Black Star Rentals, Its Home Delivered"}
            tech = {"html/css, jquery, bootstrap"}
            />
      </div>
    )
  }
}

export default withRouter(BlackStar);
