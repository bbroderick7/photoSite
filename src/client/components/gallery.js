import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';

export class Gallery extends Component {
  constructor(props) {
    super(props)
    this.showGallery = this.showGallery.bind(this)
    this.enlargePhoto = this.enlargePhoto.bind(this)
    this.onKeyPressed = this.onKeyPressed.bind(this)
    this.clickNextPhoto = this.clickNextPhoto.bind(this)
    this.getNextPhoto = this.getNextPhoto.bind(this)
    this.state = {
      photoUrls: [],
      photoTitles: [],
      currentTitle: ""
    }
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
    window.addEventListener('load', this.showGallery);
    document.addEventListener("keydown", this.onKeyPressed);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    let photoArray = nextProps.photoArray;
    let photoUrls = photoArray.map(photo => {
      return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    })
    let photoTitles = photoArray.map(photo => { return photo.title })
    this.setState({
      photoUrls: photoUrls,
      photoTitles: photoTitles
    })
  }

  clickNextPhoto(ev){
    if(ev.target.parentNode.id == 'left-arrow' || ev.target.id == "left-arrow"){
      this.getNextPhoto('left');
    }else{
      this.getNextPhoto('right')
    }
  }

  getNextPhoto(direction){
    let selectedPhoto = document.getElementById("galleryBlowup").src
    let selected_index = 0;
    this.state.photoUrls.forEach((p_url, index) => {
      if(p_url == selectedPhoto ){
        selected_index = index;
      }
    })
    if (direction == 'left'){
      let new_selected_index = selected_index == 0 ? this.state.photoUrls.length - 1 : selected_index - 1;
      let new_photo_url = this.state.photoUrls[new_selected_index];
      document.getElementById("galleryBlowup").src = new_photo_url;
      this.setState({currentTitle: this.state.photoTitles[new_selected_index]})
    }else{
      let new_selected_index = selected_index == this.state.photoUrls.length - 1 ? 0  : selected_index + 1;
      let new_photo_url = this.state.photoUrls[new_selected_index];
      document.getElementById("galleryBlowup").src = new_photo_url;
      this.setState({currentTitle: this.state.photoTitles[new_selected_index]})
    }
  }

  showGallery(){
    let elem = ReactDOM.findDOMNode(this);
    elem.style.visibility = "visible"
  }

  onKeyPressed(ev){
    console.log(ev.code)
    if(ev.code == 'ArrowLeft'){
      this.getNextPhoto('left');
    }else if(ev.code == 'ArrowRight'){
      this.getNextPhoto('right');
    }else if (ev.code == 'Escape'){
      this.closeGalleryNav(ev)
    }
  }

  enlargePhoto(ev){
    console.log(ev.target)
    let photoUrl = ev.target.nodeName == 'H4' ? ev.target.parentNode.nextSibling.src : ev.target.nextSibling.src
    let imgElement = document.getElementById("galleryBlowup");
    imgElement.src = photoUrl;
    imgElement.style.border= "solid 15px white";
    document.getElementById("blowup-title").innerHTML = ev.target.nodeName == 'H4' ? ev.target.innerHTML : ev.target.children[0].innerHTML
    document.getElementById("my-gallery-modal").style.opacity = "1";
    document.getElementById("my-gallery-modal").style.zIndex = "100000";
  }

  closeGalleryNav(ev){
    console.log('hittt')
    console.log(ev.target.tagName)
    if(ev.target != undefined){
      if(ev.target.tagName != 'IMG' && ev.target.className != 'gallery-arrow-cont' && ev.target.tagName != 'h1' && ev.target.className != "gallery-arrow"){
        document.getElementById("my-gallery-modal").style.opacity = "0";
        document.getElementById("my-gallery-modal").style.zIndex = "-10";
      }
    }else{
      document.getElementById("my-gallery-modal").style.opacity = "0";
      document.getElementById("my-gallery-modal").style.zIndex = "-10";
    }
  }

  render(){
    let photoArray = this.props.photoArray;
    let photoUrls = photoArray.map(photo => {
      return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    })
    let photoTitles = photoArray.map(photo => { return photo.title })
    let gallery = [];
    if(screen.width > 700){
      gallery = photoUrls.map((photo, index) => {
        return(
          <div key={index} className="col-xs-12 col-md-6 col-lg-3 box-image-container">
            <div onClick={this.enlargePhoto} className='photo-cover-cont'><h4>{photoTitles[index]}</h4></div>
            <img className="box-gallery-img" src={ photo } />
          </div>
        )
      })
    }else{
      gallery = photoUrls.map((photo, index) => {
        return(
          <div key={index} className="col-xs-12 col-md-6 col-lg-3 box-image-container-mobile">
            <div className='photo-cover-cont'><h4>{photoTitles[index]}</h4></div>
            <img className="box-gallery-img-mobile" src={ photo } />
            <div className="col-xs-1 col-xs-offset-5  mobile-photo-breaker"></div>
          </div>
        )
      })
    }
    return(
      <div id ="my-gallery-container">
        <div onClick={this.closeGalleryNav} id="my-gallery-modal" className="gallery-overlay">
          <div className="gallery-overlay-content">
            <img src="#" id="galleryBlowup"/>
            <h2 id="blowup-title">{this.state.currentTitle}</h2>
          </div>
          <div onClick={this.clickNextPhoto} className= "gallery-arrow-cont" id="left-arrow">
            	<h1 className="gallery-arrow">&#9001;</h1>
          </div>
          <div onClick={this.clickNextPhoto} className= "gallery-arrow-cont" id="right-arrow">
            	<h1 className="gallery-arrow">&#9002;</h1>
          </div>
          <a href="javascript:void(0)" className="gallery-closebtn" onClick={this.closeGalleryNav}>&times;</a>
        </div>
        <div className="col-xs-12 col-md-10 gallery-container">
          { gallery }
        </div>
      </div>
    )
  }
}
