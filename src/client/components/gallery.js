import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';

export class Gallery extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
	  let elem = ReactDOM.findDOMNode(this);
	  elem.style.opacity = 0;
    setTimeout(() => {
      window.requestAnimationFrame(() => {
  		    elem.style.transition = "opacity 1000ms";
  		     elem.style.opacity = 1;
  	  });
    }, 0);
  }

  enlargePhoto(ev){
    let photoUrl = ev.target.nodeName == 'H4' ? ev.target.parentNode.nextSibling.src : ev.target.nextSibling.src
    let imgElement = document.getElementById("galleryBlowup");
    imgElement.src = photoUrl;
    imgElement.style.border= "solid 15px white";
    document.getElementById("my-gallery-modal").style.opacity = "1";
    document.getElementById("my-gallery-modal").style.zIndex = "10";
  }

  closeGalleryNav(){
    document.getElementById("my-gallery-modal").style.opacity = "0";
    document.getElementById("my-gallery-modal").style.zIndex = "-10";
  }

  render(){
    let photoArray = this.props.photoArray;
    let photoUrls = photoArray.map(photo => {
      return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    })
    let photoTitles = photoArray.map(photo => { return photo.title })
    let gallery = photoUrls.map((photo, index) => {
      return(
        <div key={index} className="col-xs-3 box-image-container">
          <div onClick={this.enlargePhoto} className='photo-cover-cont'><h4>{photoTitles[index]}</h4></div>
          <img className="box-gallery-img" src={ photo } />
        </div>
      )
    })
    return(
      <div>
        <div id="my-gallery-modal" className="gallery-overlay">
          <a href="javascript:void(0)" className="gallery-closebtn" onClick={this.closeGalleryNav}>&times;</a>
          <div className="gallery-overlay-content">
            <img src="#" id="galleryBlowup"/>
            </div>
        </div>
        <div className="col-xs-9 gallery-container">
          { gallery }
        </div>
      </div>
    )
  }
}
