'use strict';
import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
import { Gallery }              from './gallery';
/*************************************************************************/

class Nashville extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoArray: []
    }
  }

  componentDidMount(){
    $.ajax({
      url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157691652131015&user_id=148642232%40N07&format=json&nojsoncallback=1"
    }).then(data => {
      let photoArray = data.photoset.photo;
      let photoUrls = photoArray.map(photo => {
        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      })
      let photoTitles = photoArray.map(photo => { return photo.title })
      this.setState({ photoArray: data.photoset.photo })
    })
  }

  render() {
    return(
      <div className="outerDiv contentDiv col-xs-12">
        <NavBar selector={"stills-navbar"}/>
        <div onClick={this.fadeOut} className="row photo-container">
          <SubheaderNav selected={'nashville'} subheadings={["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"]}/>
          <Gallery photoArray={ this.state.photoArray }/>
        </div>
      </div>
    )
  }
}

export default withRouter(Nashville);
