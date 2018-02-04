import React, { Component }     from 'react';

let NavBarDesktopHeadings = () => <div className="row">
        <div id="stills-navbar" className="col-sm-offset-1 col-lg-2 col-xs-3 landing-subheader">
          <a href="/stills"><h3>Stills</h3></a>
        </div>
        <div id="projects-navbar" className="col-lg-2 col-xs-3 landing-subheader">
          <a href="/projects"><h3>Projects</h3></a>
        </div>
        <div id="about-navbar" className="col-lg-2 col-xs-3 landing-subheader">
          <a href="/about"><h3>About</h3></a>
        </div>
      </div>;

let NavLinks = () => <div className="my-mobile-navbar-overlay-content">
  <a href="/stills"><h4>Stills</h4></a>
  <a href="/projects"><h4>Projects</h4></a>
  <a href="/about"><h4>About</h4></a>
</div>

class NavBarMobile extends Component {
  constructor(props){
    super(props)
    this.state = { open: false }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    if(this.state.open == false){
      document.getElementById("mobileNav").style.height = "170px";
      this.setState({ open: true })
    }else{
      document.getElementById("mobileNav").style.height = "0px";
      this.setState({ open: false })
    }
  }

  render(){
    let selectedname = this.props.selector;
    let mytitle = this.state.open ? <h5 id="mobile-selection-header">{ selectedname } <span className="downTriangle">&#9652;</span></h5>
                                  : <h5 id="mobile-selection-header">{ selectedname } <span className="downTriangle">&#9662;</span></h5> ;
    return(
      <div className="col-xs-5">
        <div onClick={ this.toggleNav } className="my-mobile-navbar-container"> { mytitle } </div>
        <div id="mobileNav" className="my-mobile-navbar-overlay"><NavLinks/></div>
      </div>
    )
  }
}

export class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state= { screenWidth: 0 }
    this.getSize = this.getSize.bind(this)
  }

  componentDidMount(){
    window.addEventListener("resize", this.getSize);
    let aa = document.getElementById(this.props.selector);
    if (aa != null) { aa.children[0].id = "selected-subheader" }
  }

  getSize(){ this.setState({ screenWidth: screen.width }) }

  render(){
    let mobileSelector = this.props.selector.slice(0, this.props.selector.indexOf('-'));
    let contextualSubheading = screen.width < 600 ? <NavBarMobile selector={ mobileSelector }/> : <NavBarDesktopHeadings/>;
    let nameHeading = screen.width < 600 ? <h6></h6> : <h1> brendan broderick. </h1>
    return(
      <div>
        <div className="row typewriter-container">
          <div className="col-lg-6 col-xs-12"> { nameHeading } </div>
        </div>
        { contextualSubheading }
      </div>
    )
  }
}
