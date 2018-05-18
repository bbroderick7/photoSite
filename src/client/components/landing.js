'use strict';
import React, { Component }     from 'react';
import ReactDOM                 from 'react-dom';
import { withRouter }           from 'react-router-dom';
import { TitleBanner }          from './titleBanner';
import Header                   from './header';
/*************************************************************************/
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

const NavBar = () => <div>
      <div className="row typewriter-container">
        <div className="typewriter col-lg-6 col-xs-12">
          <h1>brendan broderick.</h1>
        </div>
      </div>
      <NavBarSubheadings/>
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
	  let elem = ReactDOM.findDOMNode(this);
	  elem.style.opacity = 0;
    setTimeout(() => { window.requestAnimationFrame(() => {
  		  elem.style.transition = "opacity 5000ms";
  		  elem.style.opacity = 1;
  	  }) }, 2600)
  }

  render(){
    let stillsInfo=["Peru", "Bolivia", "Moab", "Jackson", "Colorado", "Nashville", "Experiment"];
    return(
      <div>
        <div className="row landing-page-banners">
          <TitleBanner id={"stills"} name={"portfolio"} nameAlt={"portfolio1"} subheaders={stillsInfo}/>
          <TitleBanner id={"projects"} name={"projects"} nameAlt={"projects1"} subheaders={["Concertify", "FacePay", "Solitaire", "Black Star Rentals", "VUtensils"]}/>
          <TitleBanner id={"about"} name={"about"} nameAlt={"about1"} description={["Brendan Broderick", "Denver, Colorado", "Vanderbilt University", "Computer Science & Economics"]}/>
        </div>
      </div>
    )
  }
}

class Landing extends Component {
  constructor(props) { super(props) }

  render() {
    return(
      <div>
        <HomeHeader/>
        <div className="outerDiv contentDiv col-xs-12">
          <LandingBanner/>
          <NavBar/>
          <TitleBannerContainer/>
        </div>
      </div>
    )
  }
}

export default withRouter(Landing);
