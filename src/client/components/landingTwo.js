'use strict';
import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { withRouter }           from 'react-router-dom';
import Header                   from './header';
/*************************************************************************/
class TitleBanner extends Component {
  constructor(props) {
    super(props);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() { if(screen.width > 800) document.getElementById(this.props.nameAlt).style.height = "100%" }

  closeNav() { document.getElementById(this.props.nameAlt).style.height = "0%" }

  render() {
    let subHeads = "";
    if(this.props.subheaders != undefined){
      subHeads = this.props.subheaders.map(subhead => <a href={ `${this.props.id}/${subhead}` }><h4 className="col-xs-offset-1">{ subhead }</h4></a> );
    }
    let headerDescription = "";
    if(this.props.description != undefined){
      headerDescription = this.props.description.map(des => <h4 className="col-xs-offset-1">{ des }</h4>);
    }
    let name = this.props.name == 'portfolio' ? 'stills' : this.props.name
    let new_path = this.props.folder == undefined ? `${name}` : `${this.props.folder}/${name}`;
    return(
    <div className="hidden-title-banner">
      <a href={ new_path }>
        <div id={this.props.name} className="col-lg-4 col-xs-12 landing-divs2" >
          <h2 className="vertical-heading">{this.props.name}</h2>
            <div id={this.props.nameAlt} className="title-modal">
              <div className="title-modal-content">
                <h2 className="vertical-heading inner-head">{ this.props.name }</h2>
                { subHeads }
                <h4> { headerDescription } </h4>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

class HomeHeader extends Component {
  constructor(props){ super(props) }

  componentDidMount(){
    // Get the components DOM node
	  let elem = ReactDOM.findDOMNode(this);
	  // Set the opacity of the element to 0
	  elem.style.opacity = 0;
    setTimeout(() => { window.requestAnimationFrame(() => {
  		  elem.style.transition = "opacity 5000ms";
  		  elem.style.opacity = 1;
  	  }) }, 2600)
  }

  render(){ return <Header/> }
}

class NavBarSubheadings extends Component {
  constructor(props){ super(props) }

  componentDidMount(){
    // Get the components DOM node
	  let elem = ReactDOM.findDOMNode(this);
	  // Set the opacity of the element to 0
	  elem.style.opacity = 0;
    setTimeout(() => { window.requestAnimationFrame(() => {
  		  elem.style.transition = "opacity 5000ms";
  		  elem.style.opacity = 1;
  	  }) }, 2600)
  }

  render(){
    return(
        <div className="row">
          <div id="stills-navbar" className="col-sm-offset-1 col-lg-2 col-xs-3 landing-subheader">
            <a href="/stills"><h3>Stills</h3></a>
          </div>
          <div id="projects-navbar" className="col-lg-2 col-xs-3 landing-subheader">
            <a href="/projects"><h3>Projects</h3></a>
          </div>
          <div id="about-navbar" className="col-lg-2 col-xs-3 landing-subheader">
            <a href="/about"><h3>About</h3></a>
          </div>
        </div>
    )
  }
}

const NavBar = () => <div className="landingTwo-typwriter">
      <div className="row typewriter-container">
        <div className="typewriter col-lg-12 col-xs-12"> <h1>brendan broderick.</h1> </div>
      </div>
    </div>



class LandingBanner extends Component {
  constructor(props){ super(props) }

  componentDidMount(){
    // Get the components DOM node
	  let elem = ReactDOM.findDOMNode(this);
	  // Set the opacity of the element to 0
	  elem.style.opacity = 0;
    setTimeout(() => { window.requestAnimationFrame(() => {
  		  elem.style.transition = "opacity 5000ms";
  		  elem.style.opacity = 1;
  	  }) }, 2600)
  }
  render(){ return( <div className="col-xs-12 fillerArea"></div> ) }
}

class TitleBannerContainer extends Component {
  constructor(props) { super(props) }

  componentDidMount(){
    // Get the components DOM node
	  let elem = ReactDOM.findDOMNode(this);
	  // Set the opacity of the element to 0
	  elem.style.opacity = 0;
    setTimeout(() => { window.requestAnimationFrame(() => {
  		  elem.style.transition = "opacity 2000ms";
  		  elem.style.opacity = 1;
  	  }) }, 3500)
  }

  render(){
    return(
      <div>
        <div className="row landing-page-banners">
          <TitleBanner id={"stills"} name={"portfolio"} nameAlt={"portfolio1"} subheaders={["Peru", "Bolivia", "Moab", "Jackson", "Colorado", "Nashville", "Experiment"]}/>
          <TitleBanner id={"projects"} name={"projects"} nameAlt={"projects1"} subheaders={["Concertify", "FacePay", "Solitaire", "Black Star Rentals", "VUtensils"]}/>
          <TitleBanner id={"about"} name={"about"} nameAlt={"about1"} description={["Brendan Broderick", "Denver, Colorado", "Vanderbilt University", "Computer Science & Economics"]}/>
        </div>
      </div>
    )
  }
}

class ScreenSaverOverlay extends Component{
  constructor(props) { super(props) }

  componentDidMount(){
    // Get the components DOM node
    let elem = ReactDOM.findDOMNode(this);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    setTimeout(() => { window.requestAnimationFrame(() => {
        elem.style.transition = "opacity 2000ms";
        elem.style.opacity = 1;
      }) }, 2000)
  }

  render(){
    return(
      <div className="screen-saver-overlay"></div>
    )
  }
}

class LandingTwo extends Component {
  constructor(props) { super(props) }

  render() {
    return(
      <div>
        <HomeHeader/>
        <div className="outerDiv contentDiv col-xs-12">
          <NavBar/>
          <ScreenSaverOverlay/>
          <TitleBannerContainer/>
        </div>
      </div>
    )
  }
}

export default withRouter(LandingTwo);
