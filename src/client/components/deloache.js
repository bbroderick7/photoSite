'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
/*************************************************************************/

class Deloache extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryPhotos: []
    }
  }

  componentDidMount(){
    $.ajax({
      url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=72157691641364595&user_id=148642232%40N07&format=json&nojsoncallback=1"
    }).then(data => {
      let photoArray = data.photoset.photo;
      let photoUrls = photoArray.map(photo => {
        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      })
      this.setState({galleryPhotos: photoUrls})
    })
  }

  render() {
    let gallery = this.state.galleryPhotos.map((photo, index) => {
      return(<div key={index} className="col-xs-12 col-md-6 col-lg-4"><img className="deloache-gallery-img" src={ photo } /></div>)
    })
    return(
      <div className="outerDiv contentDiv col-xs-12">
            <NavBar selector={"stills-navbar"}/>
            <div className="row photo-container">
              <SubheaderNav selected={'deloache'} subheadings={["peru", "bolivia", "moab", "jackson", "colorado", "nashville", "experiment", "deloache"]}/>
              <div className="col-xs-12 col-lg-10">
                {gallery}
              </div>
            </div>
          </div>
    )
  }
}

export default withRouter(Deloache);
