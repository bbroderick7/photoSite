'use strict';
import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';

import { NavBar }               from './navBar';
import { SubheaderNav }         from './subheaderNav';
import { Gallery }              from './gallery';
import { Deloache }              from './deloache';
/*************************************************************************/

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = { photoArray: [] }
  }

  componentDidMount(){
    $.ajax({ url: this.props.galleryInfo.url })
    .then(data => { this.setState({ photoArray: data.photoset.photo }) })
    .fail(err => console.log(err))
  }

  render() {
    if(this.props.galleryInfo.name == 'deloache'){ return <Deloache/> }
    return(
      <div className="outerDiv contentDiv col-xs-12">
        <NavBar selector={"stills-navbar"}/>
          <div className="row photo-container">
            <SubheaderNav selected={this.props.galleryInfo.name} subheadings={this.props.galleryList}/>
            <Gallery photoArray={ this.state.photoArray }/>
          </div>
      </div>
    )
  }
}

export default withRouter(GalleryPage);
